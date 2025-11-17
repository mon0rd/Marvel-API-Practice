// import { useEffect } from "react";
import "/src/components/characters/charPage/CharPage.sass";
import Banner from "/src/components/comics/banner/Banner.jsx";
import { Link } from "react-router";

const CharPage = (props) => {
  const { name, text, thumbnail } = props.searchedChar;

  // console.log(props.searchedChar);

  return (
    <div className="CharPage">
      <img src={thumbnail} alt={name} className="CharPage_avatar" />
      <div className="CharPage_wrapper">
        <h2 className="title_h2">{name}</h2>
        <p className="CharPage_text">{text}</p>
      </div>
      <a
        onClick={() => props.onCharSearch(null)}
        to="/"
        className="ComicsItem_back">
        Back to all
      </a>
    </div>
  );
};

export default CharPage;
