// import { useState } from "react";
import { Component } from "react";
import "/src/Components/Characters/CharactersApp/CharactersApp.sass";

import RandomChar from "/src/Components/Characters/RandomChar/RandomChar.jsx";
import CharList from "/src/Components/Characters/CharList/CharList.jsx";
import CharInfo from "/src/Components/Characters/CharInfo/CharInfo.jsx";
import CharInfoPlaceholder from "/src/Components/Characters/CharInfoPlaceholder/CharInfoPlaceholder.jsx";

class CharactersApp extends Component {
  state = { selectedChar: null };

  onCharSelect = (element) => {
    if (this.state.selectedChar && element.id === this.state.selectedChar.id) {
      this.setState({ selectedChar: null });
    } else {
      this.setState({ selectedChar: element });
    }
  };

  render() {
    return (
      <div className="CharactersApp">
        <RandomChar />
        <div className="Char_wrapper">
          <CharList
            onCharSelect={this.onCharSelect}
            selectedChar={this.state.selectedChar}
          />
          {this.state.selectedChar ? (
            <CharInfo selectedChar={this.state.selectedChar} />
          ) : (
            <CharInfoPlaceholder />
          )}
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
