import "/src/components/characters/randomChar/RandomChar.sass";
import { useState, useEffect, useRef, useCallback } from "react";
import useMarvelService from "/src/services/MarvelService.jsx";
import Error from "/src/components/error/Error.jsx";
import Spinner from "/src/components/spinner/Spinner.jsx";

const RandomChar = () => {
  const [char, setChar] = useState({ name: "123" }),
    intervalRef = useRef(null);

  const { error, clearError, getCharacter } = useMarvelService();

  const updateChar = useCallback(async () => {
    let id;
    do {
      id = Math.floor(Math.random() * (20 - 0 + 1) + 0);
    } while (char.id === id);

    if (error || char.name) {
      setChar({});
      clearError();
      getCharacter(id - 1).then(onCharLoaded);
    }
  }, [char.id, getCharacter]);

  const onCharLoaded = (character) => {
    setChar(character);
  };

  const startInterval = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(updateChar, 20000);
  }, [updateChar]);

  const stopInterval = useCallback(() => {
    clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    updateChar();
  }, []);

  useEffect(() => {
    startInterval();
    return stopInterval;
  }, [startInterval]);

  return (
    <div className="RandomChar">
      <div
        className="Char"
        onMouseEnter={stopInterval}
        onMouseLeave={startInterval}>
        <View char={char} error={error} />
      </div>
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

const View = ({ char, error }) => {
  const { name, text, thumbnail, homepage, wiki, id } = char;

  if (error) return <Error style={{ width: "100%" }} />;

  if (!id) return <Spinner />;

  return (
    <>
      <img src={thumbnail} alt={name} />
      <div className="Char_descr">
        <h2 className="title_h2">{name}</h2>
        <div className="Char_text">{text || "Description missing"}</div>
        <div className="Char_btns">
          <a tabIndex={-1} href={homepage}>
            <button className="red_btn">HOMEPAGE</button>
          </a>
          <a tabIndex={-1} href={wiki}>
            <button className="gray_btn">WIKI</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default RandomChar;
