import { useState, useEffect, useCallback, useMemo } from "react";
import "/src/components/characters/charList/CharList.sass";
import MarvelService from "/src/services/MarvelService.jsx";
import Error from "/src/components/error/Error.jsx";
import Spinner from "/src/components/spinner/Spinner.jsx";

const CharList = (props) => {
  const [charlist, setCharlist] = useState([]),
    [offset, setOffset] = useState(0),
    [error, setError] = useState(false),
    [expanding, setExpanding] = useState(false),
    [loadBtn, setLoadBtn] = useState(false);

  const marvelService = useMemo(() => new MarvelService(), []);

  useEffect(() => {
    updateCharList();
  }, []);

  const updateCharList = useCallback(() => {
    if (!expanding || error) {
      setError(false);
      setExpanding(true);
      marvelService
        .getAllCharacters(offset)
        .then(onCharListLoaded)
        .catch(onError);
    }
  }, [marvelService, offset]);

  const onCharListLoaded = (newCharlist) => {
    setCharlist(charlist ? [...charlist, ...newCharlist] : newCharlist);
    setOffset(offset + 9);
    setExpanding(false);
    setLoadBtn(newCharlist.length === 9);

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
    setError(true);
    setExpanding(false);
    props.showDecor(false);
  };

  return (
    <div className="CharList">
      <div className="CharList_wrapper">{formRenderedList()}</div>
      <View
        charlist={charlist}
        loadBtn={loadBtn}
        expanding={expanding}
        offset={offset}
        error={error}
        updateCharList={() => updateCharList()}
      />
    </div>
  );
};

const View = ({
  charlist,
  error,
  loadBtn,
  expanding,
  offset,
  updateCharList,
}) => {
  const showLoadButton =
      charlist.length > 0 && loadBtn && !expanding && offset !== 20,
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
