import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "/src/components/characters/charList/CharList.sass";
import useMarvelService from "/src/services/MarvelService.jsx";
import Error from "/src/components/error/Error.jsx";
import Spinner from "/src/components/spinner/Spinner.jsx";

const CharList = (props) => {
  const [charList, setCharList] = useState([]),
    [offset, setOffset] = useState(0),
    firstLoadRef = useRef(true),
    lastBatchRef = useRef(0);

  const { error, clearError, expanding, setExpanding, getAllCharacters } =
    useMarvelService();

  useEffect(() => {
    if (firstLoadRef.current) {
      firstLoadRef.current = false;
      updateCharList();
    }
  }, []);

  const updateCharList = () => {
    if (!expanding || error) {
      clearError();
      setExpanding(true);
      getAllCharacters(offset)
        .then(onCharListLoaded)
        .catch(() => {
          setExpanding(false);
          props.setDecor(false);
        });
    }
  };

  const onCharListLoaded = (newCharList) => {
    lastBatchRef.current = charList.length;
    setCharList((prev) => [...prev, ...newCharList]);
    setOffset((prev) => prev + 9);
    setExpanding(false);

    props.setDecor(true);
  };

  const handleKeySelect = (e, element) => {
    if ([" ", "Space", "Enter"].includes(e.key)) {
      e.preventDefault();
      props.onCharSelect(element);
    }
  };

  const formRenderedList = () => {
    return charList.map((element, i) => {
      let classname = "CharList_card";
      if (props.selectedChar && element.id === props.selectedChar.id) {
        classname = "CharList_card active";
      }
      const isNew = i >= lastBatchRef.current;
      return (
        <motion.li
          tabIndex={0}
          key={element.id}
          onClick={() => props.onCharSelect(element)}
          onKeyDown={(e) => handleKeySelect(e, element)}
          className={classname}
          initial={isNew ? { opacity: 0 } : false}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.2,
            delay: isNew ? (i - lastBatchRef.current) * 0.15 : 0,
          }}>
          <img
            src={element.thumbnail}
            alt={element.name}
            className="CharList_card_avatar"
          />
          <span className="CharList_card_name">{element.name}</span>
        </motion.li>
      );
    });
  };

  return (
    <div className="CharList">
      <motion.ul className="CharList_wrapper">{formRenderedList()}</motion.ul>
      <View
        charList={charList}
        expanding={expanding}
        offset={offset}
        error={error}
        updateCharList={updateCharList}
      />
    </div>
  );
};

const View = ({ charList, error, expanding, updateCharList }) => {
  const showLoadButton =
      charList.length > 0 && charList.length % 9 === 0 && !error && !expanding,
    emptyListSpinner = charList.length === 0 && !error,
    expandingSpinner = charList.length > 0 && expanding;
  return (
    <>
      {emptyListSpinner && <Spinner />}
      {error && (
        <>
          <Error style={{ width: "40%", margin: "auto", marginTop: "-30px" }} />
          <button onClick={updateCharList} className="red_wide_btn">
            reload
          </button>
        </>
      )}
      {expandingSpinner && (
        <Spinner style={{ marginTop: "35px", height: "60px", width: "60px" }} />
      )}
      {showLoadButton && (
        <button onClick={updateCharList} className="red_wide_btn">
          Load more
        </button>
      )}
    </>
  );
};

export default CharList;
