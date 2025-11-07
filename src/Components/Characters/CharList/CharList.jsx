import { useState, useEffect } from "react";
import "/src/components/characters/charList/CharList.sass";
import MarvelService from "/src/services/MarvelService.jsx";

const CharList = (props) => {
  const [charlist, setCharlist] = useState(null),
    [offset, setOffset] = useState(0),
    [error, setError] = useState(false),
    [expanding, setExpanding] = useState(false),
    [loadBtn, setLoadBtn] = useState(false);

  const marvelService = new MarvelService();

  useEffect(() => {
    updateCharList();
  }, []);

  const updateCharList = () => {
    if (!expanding || error) {
      setError(false);
      setExpanding(true);
      marvelService
        .getAllCharacters(offset)
        .then(onCharListLoaded)
        .catch(onError);
    }
  };

  const onCharListLoaded = (newCharlist) => {
    setCharlist(charlist ? [...charlist, ...newCharlist] : newCharlist);
    setOffset(offset + 9);
    setExpanding(false);
    setLoadBtn(newCharlist.length < 9 ? false : true);

    props.showDecor(true);
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
          onKeyDown={(e) => {
            if (e.key === " " || e.key === "Space" || e.key === "Enter") {
              e.preventDefault();
              props.onCharSelect(element);
            }
          }}
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
      <div className="CharList_wrapper">
        {charlist ? formRenderedList() : null}
      </div>
      {!charlist && !error ? <div className="spinner"></div> : null}
      {error ? (
        <>
          <img
            src="/src/assets/error.gif"
            style={{ width: "40%", margin: "auto" }}
            alt="error"
          />
          <button onClick={() => updateCharList()} className="red_wide_btn">
            reload
          </button>
        </>
      ) : null}
      {charlist && expanding ? (
        <div
          style={{ marginTop: "35px", height: "60px", width: "60px" }}
          className="spinner"></div>
      ) : null}
      {charlist && loadBtn && !expanding && offset !== 20 ? (
        <button onClick={() => updateCharList()} className="red_wide_btn">
          load more
        </button>
      ) : null}
    </div>
  );
};

export default CharList;
