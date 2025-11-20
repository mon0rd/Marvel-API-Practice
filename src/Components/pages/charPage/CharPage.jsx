// import { useEffect } from "react";
import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router";
import useMarvelService from "/src/services/MarvelService.jsx";
import "/src/components/pages/charPage/CharPage.sass";
import Banner from "/src/components/comics/banner/Banner.jsx";
import Spinner from "/src/components/spinner/Spinner.jsx";

const CharPage = () => {
  const [char, setChar] = useState(null),
    location = useLocation(),
    { charId } = useParams();

  const { getCharacter } = useMarvelService();

  useEffect(() => {
    if (location.state?.char) {
      setChar(location.state.char);
    } else {
      getCharacter(charId).then(setChar);
    }
  }, [charId, location.state, getCharacter]);

  if (!char) {
    return (
      <>
        <Banner />
        <Spinner style={{ margin: "50px auto" }} />
      </>
    );
  }

  return (
    <>
      <Banner />
      <div className="CharPage">
        <img src={char.thumbnail} alt={char.name} className="CharPage_avatar" />
        <div className="CharPage_wrapper">
          <h2 className="title_h2">{char.name}</h2>
          <p className="CharPage_text">{char.text}</p>
        </div>
      </div>
    </>
  );
};

export default CharPage;
