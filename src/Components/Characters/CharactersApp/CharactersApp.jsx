// import { useState } from "react";
import { Component } from "react";
import "/src/Components/Characters/CharactersApp/CharactersApp.sass";

import RandomChar from "/src/Components/Characters/RandomChar/RandomChar.jsx";
import CharList from "/src/Components/Characters/CharList/CharList.jsx";
import CharInfo from "/src/Components/Characters/CharInfo/CharInfo.jsx";
import CharInfoPlaceholder from "/src/Components/Characters/CharInfoPlaceholder/CharInfoPlaceholder.jsx";

class CharactersApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="CharactersApp">
        <RandomChar />
        <div className="Char_wrapper">
          <CharList />
          {/* <CharInfo /> */}
          <CharInfoPlaceholder />
          <img
            src="/src/assets/Characters/img/png/bg_vision.png"
            alt="vision"
            className="Characters_decor"
          />
        </div>
      </div>
    );
  }
}

export default CharactersApp;
