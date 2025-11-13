import { useState, useEffect, useCallback } from "react";
import "/src/components/comics/comicsList/ComicsList.sass";
import useMarvelService from "/src/services/MarvelService.jsx";
import Error from "/src/components/error/Error.jsx";
import Spinner from "/src/components/spinner/Spinner.jsx";

const ComicsList = () => {
  const [comicsList, setComicsList] = useState([]),
    [offset, setOffset] = useState(0);

  const { error, clearError, expanding, setExpanding, getAllComics } =
    useMarvelService();

  useEffect(() => {
    updateComicsList();
  }, []);

  const updateComicsList = useCallback(() => {
    if (!expanding || error) {
      clearError();
      setExpanding(true);
      getAllComics(offset)
        .then(onComicsListLoaded)
        .catch(() => setExpanding(false));
    }
  }, [getAllComics, offset]);

  const onComicsListLoaded = (newComicsList) => {
    setComicsList(
      comicsList ? [...comicsList, ...newComicsList] : newComicsList
    );
    setOffset(offset + 8);
    setExpanding(false);
  };

  const handleKeySelect = (e, element) => {
    if ([" ", "Space", "Enter"].includes(e.key)) {
      e.preventDefault();
      console.log(element);
      // props.onCharSelect(element);
    } else if (e.type === "click") {
      console.log(element);
    }
  };

  const formRenderedList = () => {
    return comicsList.map((element) => {
      return (
        <div className="ComicsList_card" key={element.id}>
          <img
            tabIndex={0}
            onClick={(e) => handleKeySelect(e, element)}
            onKeyDown={(e) => handleKeySelect(e, element)}
            src={element.thumbnail}
            alt={element.title}
            className="ComicsList_card_avatar"
          />
          <span className="ComicsList_card_title">{element.title}</span>
          <span className="ComicsList_card_price">{element.price}$</span>
        </div>
      );
    });
  };

  return (
    <div className="ComicsList">
      <div className="ComicsList_wrapper">{formRenderedList()}</div>
      <View
        comicsList={comicsList}
        expanding={expanding}
        offset={offset}
        error={error}
        updateComicsList={() => updateComicsList()}
      />
    </div>
  );
};

const View = ({ comicsList, error, expanding, updateComicsList }) => {
  const showLoadButton =
      comicsList.length > 0 &&
      comicsList.length % 8 === 0 &&
      !error &&
      !expanding,
    emptyListSpinner = comicsList.length === 0 && !error,
    expandingSpinner = comicsList.length > 0 && expanding;

  return (
    <>
      {emptyListSpinner && <Spinner />}
      {error && (
        <>
          <Error style={{ width: "25%", margin: "auto" }} />
          <button onClick={updateComicsList} className="red_wide_btn">
            reload
          </button>
        </>
      )}
      {expandingSpinner && (
        <Spinner style={{ marginTop: "35px", height: "60px", width: "60px" }} />
      )}
      {showLoadButton && (
        <button onClick={updateComicsList} className="red_wide_btn">
          Load more
        </button>
      )}
    </>
  );
};

export default ComicsList;
