import "/src/components/characters/randomChar/RandomChar.sass";
import { useState, useEffect, useRef } from "react";
import MarvelService from "/src/services/MarvelService.jsx";

const RandomChar = () => {
  const [char, setChar] = useState({ name: "123" }),
    [error, setError] = useState(),
    intervalRef = useRef(null);

  const marvelService = new MarvelService();

  useEffect(() => {
    updateChar();
  }, []);

  const updateChar = () => {
    let id = Math.floor(Math.random() * (15 - 13) + 13);
    console.log(id, char.id);
    if (char && char.id === id + 1) {
      console.log(id, char.id);
      return updateChar();
    }
    if (error || char.name) {
      setChar({});
      setError(false);
      marvelService.getCharacter(id).then(onCharLoaded).catch(onError);
    }
  };

  const onCharLoaded = (character) => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(updateChar, 4000);
    setChar(character);
  };

  const onError = () => {
    setError(true);
  };

  // let name, text, thumbnail, homepage, wiki;

  // if (char.id) {
  //   console.log(char);
  //   let {
  //     char: { name, text, thumbnail, homepage, wiki },
  //   } = char;
  // }

  let randomChar = <div className="spinner"></div>;

  if (error) {
    randomChar = (
      <>
        <img
          src="/src/assets/error.gif"
          style={{ width: "100%" }}
          alt="error"
        />
      </>
    );
  } else if (char.thumbnail) {
    randomChar = (
      <>
        <img src={char.thumbnail} alt={char.name} />
        <div className="Char_descr">
          <h2 className="title_h2">{char.name}</h2>
          <div className="Char_text">
            {char.text ? char.text : "Description missing"}
          </div>
          <div className="Char_btns">
            <a tabIndex={-1} href={char.homepage}>
              <button className="red_btn">HOMEPAGE</button>
            </a>
            <a tabIndex={-1} href={char.wiki}>
              <button className="gray_btn">WIKI</button>
            </a>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="RandomChar">
      <div className="Char">{randomChar}</div>
      <div className="TryIt">
        <span>
          Random character for today! <br />
          Do you want to get to know him better?
        </span>
        <span>Or choose another one</span>
        <button onClick={updateChar} className="red_btn">
          try it
        </button>
        <img
          src="/src/assets/Characters/img/png/mjolnir_shield.png"
          alt="mjolnir_shield"
        />
      </div>
    </div>
  );
};

export default RandomChar;
