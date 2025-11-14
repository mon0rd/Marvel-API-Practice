import { useState, useEffect, useCallback } from "react";
import "/src/components/pages/comicsItem/ComicsItem.sass";
import useMarvelService from "/src/services/MarvelService.jsx";
import Spinner from "/src/components/spinner/Spinner.jsx";
import { useParams, Link } from "react-router";

const ComicsItem = () => {
  const [comics, setComics] = useState({ title: "123" });
  const { error, clearError, getComics } = useMarvelService();
  let { comicsId } = useParams();

  useEffect(() => {
    updateComics();
  }, []);

  const updateComics = useCallback(() => {
    clearError();
    getComics(comicsId - 1).then(onComicsLoaded);
  }, [getComics]);

  const onComicsLoaded = (newComics) => {
    setComics(newComics);
  };

  if (!comics.id) return <Spinner style={{ margin: "50px auto" }} />;

  return (
    <div className="ComicsItem">
      <img
        src={comics.thumbnail}
        alt={comics.title}
        className="ComicsItem_cover"
      />
      <div className="ComicsItem_wrapper">
        <h2 className="title_h2">{comics.title}</h2>
        <p className="ComicsItem_text">{comics.text}</p>
        <span className="ComicsItem_pages">{comics.pageCount}</span>
        <span className="ComicsItem_lang">{comics.lang}</span>
        <span className="ComicsItem_price">{comics.price}</span>
      </div>
      <Link to="/comics/" className="ComicsItem_back">
        Back to all
      </Link>
    </div>
  );
};

export default ComicsItem;
