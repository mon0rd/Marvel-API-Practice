import { useState, useContext } from "react";
import { Routes, Route, useNavigate } from "react-router";
import { CacheContext } from "/src/context/CacheContext.jsx";
import "/src/components/pages/charactersApp/CharactersApp.sass";

import RandomChar from "/src/components/characters/randomChar/RandomChar.jsx";
import CharList from "/src/components/characters/charList/CharList.jsx";
import CharInfo from "/src/components/characters/charInfo/CharInfo.jsx";
import CharSearch from "/src/components/characters/charSearch/CharSearch.jsx";
import CharPage from "/src/components/pages/charPage/CharPage.jsx";

const CharactersApp = () => {
  const [selectedChar, setSelectedChar] = useState(),
    { decor, setDecor } = useContext(CacheContext),
    navigate = useNavigate();

  const onCharSelect = (elem) => {
    setSelectedChar(selectedChar && elem.id === selectedChar.id ? null : elem);
  };

  const onCharSearch = (char) => {
    if (!char) {
      navigate("/characters");
      return;
    }

    navigate(`${char.id}`, { state: { char } });
  };

  return (
    <div className="CharactersApp">
      <Routes>
        <Route
          index
          element={
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
                  {decor && <CharSearch onCharSearch={onCharSearch} />}
                </div>
                {decor && (
                  <img
                    src="/src/assets/Characters/img/png/bg_vision.png"
                    alt="vision"
                    className="Characters_decor"
                  />
                )}
              </div>
            </>
          }
        />
        <Route
          path=":charId"
          element={<CharPage onCharSearch={onCharSearch} />}
        />
      </Routes>
    </div>
  );
};

export default CharactersApp;
