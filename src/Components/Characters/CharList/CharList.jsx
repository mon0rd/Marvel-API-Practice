import { useState, useEffect, useCallback } from "react";
import "/src/components/characters/charList/CharList.sass";
import useMarvelService from "/src/services/MarvelService.jsx";
import Error from "/src/components/error/Error.jsx";
import Spinner from "/src/components/spinner/Spinner.jsx";

const CharList = (props) => {
  const [charList, setCharList] = useState([]),
    [offset, setOffset] = useState(0);

  const { error, clearError, expanding, setExpanding, getAllCharacters } =
    useMarvelService();

  useEffect(() => {
    updateCharList();
  }, []);

  const updateCharList = useCallback(() => {
    if (!expanding || error) {
      clearError();
      setExpanding(true);
      getAllCharacters(offset)
        .then(onCharListLoaded)
        .catch(() => {
          setExpanding(false);
          props.showDecor(false);
        });
    }
  }, [getAllCharacters, offset]);

  const onCharListLoaded = (newCharList) => {
    setCharList(charList ? [...charList, ...newCharList] : newCharList);
    setOffset(offset + 9);
    setExpanding(false);

    props.showDecor(true);
  };

  const handleKeySelect = (e, element) => {
    if ([" ", "Space", "Enter"].includes(e.key)) {
      e.preventDefault();
      props.onCharSelect(element);
    }
  };

  const formRenderedList = () => {
    return charList.map((element) => {
      let classname = "CharList_card";
      if (props.selectedChar && element.id === props.selectedChar.id) {
        classname = "CharList_card active";
      }
      return (
        <li
          tabIndex={0}
          onClick={() => props.onCharSelect(element)}
          onKeyDown={(e) => handleKeySelect(e, element)}
          key={element.id}
          className={classname}>
          <img
            src={element.thumbnail}
            alt={element.name}
            className="CharList_card_avatar"
          />
          <span className="CharList_card_name">{element.name}</span>
        </li>
      );
    });
  };

  return (
    <div className="CharList">
      <ul className="CharList_wrapper">{formRenderedList()}</ul>
      <View
        charList={charList}
        expanding={expanding}
        offset={offset}
        error={error}
        updateCharList={() => updateCharList()}
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
