import { useState } from "react";
import "/src/components/characters/charactersApp/CharactersApp.sass";

import RandomChar from "/src/components/characters/randomChar/RandomChar.jsx";
import CharList from "/src/components/characters/charList/CharList.jsx";
import CharInfo from "/src/components/characters/charInfo/CharInfo.jsx";

const CharactersApp = () => {
  const [selectedChar, setSelectedChar] = useState(),
    [decor, setDecor] = useState();

  const onCharSelect = (elem) => {
    setSelectedChar(selectedChar && elem.id === selectedChar.id ? null : elem);
  };

  const showDecor = (decor) => {
    setDecor(decor);
  };

  return (
    <div className="CharactersApp">
      <RandomChar />
      <div className="Char_wrapper">
        <CharList
          onCharSelect={onCharSelect}
          selectedChar={selectedChar}
          showDecor={showDecor}
        />
        <CharInfo selectedChar={selectedChar} />
        {decor ? (
          <img
            src="/src/assets/Characters/img/png/bg_vision.png"
            alt="vision"
            className="Characters_decor"
          />
        ) : null}
      </div>
    </div>
  );
};

export default CharactersApp;
