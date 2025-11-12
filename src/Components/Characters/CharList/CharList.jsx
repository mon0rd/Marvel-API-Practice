import { useState, useEffect, useCallback } from "react";
import "/src/components/characters/charList/CharList.sass";
import useMarvelService from "/src/services/MarvelService.jsx";
import Error from "/src/components/error/Error.jsx";
import Spinner from "/src/components/spinner/Spinner.jsx";

const CharList = (props) => {
  const [charlist, setCharlist] = useState([]),
    [offset, setOffset] = useState(0),
    [expanding, setExpanding] = useState(false);

  const { error, clearError, getAllCharacters } = useMarvelService();

  useEffect(() => {
    updateCharList();
  }, []);

  const updateCharList = useCallback(() => {
    if (!expanding || error) {
      clearError();
      setExpanding(true);
      getAllCharacters(offset).then(onCharListLoaded).catch(onError);
    }
  }, [getAllCharacters, offset]);

  const onCharListLoaded = (newCharlist) => {
    setCharlist(charlist ? [...charlist, ...newCharlist] : newCharlist);
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
    return charlist.map((element) => {
      let classname = "CharList_card";
      if (props.selectedChar && element.id === props.selectedChar.id) {
        classname = "CharList_card active";
      }
      return (
        <div
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
        </div>
      );
    });
  };

  const onError = () => {
    setExpanding(false);
    props.showDecor(false);
  };

  return (
    <div className="CharList">
      <div className="CharList_wrapper">{formRenderedList()}</div>
      <View
        charlist={charlist}
        expanding={expanding}
        offset={offset}
        error={error}
        updateCharList={() => updateCharList()}
      />
    </div>
  );
};

const View = ({ charlist, error, expanding, offset, updateCharList }) => {
  const showLoadButton =
      charlist.length > 0 &&
      charlist.length % 9 === 0 &&
      !error &&
      !expanding &&
      offset !== 20,
    emptyListSpinner = charlist.length === 0 && !error,
    expandingSpinner = charlist.length > 0 && expanding;

  return (
    <>
      {emptyListSpinner && <Spinner />}
      {error && (
        <>
          <Error style={{ width: "40%", margin: "auto" }} />
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
