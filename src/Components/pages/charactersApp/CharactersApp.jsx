import { useState } from "react";
import "/src/components/pages/charactersApp/CharactersApp.sass";

import RandomChar from "/src/components/characters/randomChar/RandomChar.jsx";
import CharList from "/src/components/characters/charList/CharList.jsx";
import CharInfo from "/src/components/characters/charInfo/CharInfo.jsx";
import CharSearch from "/src/components/characters/charSearch/CharSearch.jsx";
import CharPage from "/src/components/characters/charPage/CharPage.jsx";
import Banner from "/src/components/comics/banner/Banner.jsx";

const CharactersApp = () => {
  const [selectedChar, setSelectedChar] = useState(),
    [searchedChar, setSearchedChar] = useState(),
    [decor, setDecor] = useState();

  const onCharSelect = (elem) => {
    setSelectedChar(selectedChar && elem.id === selectedChar.id ? null : elem);
  };
  const onCharSearch = (elem) => {
    setSearchedChar(elem);
  };

  return (
    <div className="CharactersApp">
      {!searchedChar ? (
        <>
          <RandomChar />
          <div className="Char_wrapper">
            <CharList
              onCharSelect={onCharSelect}
              selectedChar={selectedChar}
              setDecor={setDecor}
            />
            <div className="CharPanel">
              <CharInfo selectedChar={selectedChar} />
              <CharSearch onCharSearch={onCharSearch} />
            </div>
            {decor ? (
              <img
                src="/src/assets/Characters/img/png/bg_vision.png"
                alt="vision"
                className="Characters_decor"
              />
            ) : null}
          </div>
        </>
      ) : null}
      {searchedChar ? (
        <>
          <Banner />
          <CharPage searchedChar={searchedChar} onCharSearch={onCharSearch} />
        </>
      ) : null}
    </div>
  );
};

export default CharactersApp;
