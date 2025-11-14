import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router";
import "/src/components/comics/comicsList/ComicsList.sass";
import useMarvelService from "/src/services/MarvelService.jsx";
import Error from "/src/components/error/Error.jsx";
import Spinner from "/src/components/spinner/Spinner.jsx";

const ComicsList = () => {
  const [comicsList, setComicsList] = useState([]),
    [offset, setOffset] = useState(0),
    navigate = useNavigate();


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
      navigate(`${element.id}`);
    }
  };

  const formRenderedList = () => {
    return comicsList.map((element) => {
      return (
        <li className="ComicsList_item" key={element.id}>
          <Link
            to={`${element.id}`}
            tabIndex={0}
            onKeyDown={(e) => handleKeySelect(e, element)}>
            <img
              src={element.thumbnail}
              alt={element.title}
              className="ComicsList_item_cover"
            />
          </Link>
          <Link
            to={`${element.id}`}
            className="ComicsList_item_title"
            onKeyDown={(e) => handleKeySelect(e, element)}>
            {element.title}
          </Link>

          <span className="ComicsList_item_price">{element.price}$</span>
        </li>
      );
    });
  };

  return (
    <div className="ComicsList">
      <ul className="ComicsList_wrapper">{formRenderedList()}</ul>
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
