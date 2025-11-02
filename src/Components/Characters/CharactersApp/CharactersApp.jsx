import { Component } from "react";
import "/src/components/characters/charactersApp/CharactersApp.sass";

import RandomChar from "/src/components/characters/randomChar/RandomChar.jsx";
import CharList from "/src/components/characters/charList/CharList.jsx";
import CharInfo from "/src/components/characters/charInfo/CharInfo.jsx";

class CharactersApp extends Component {
  state = { selectedChar: null, decor: null };

  onCharSelect = (element) => {
    if (this.state.selectedChar && element.id === this.state.selectedChar.id) {
      this.setState({ selectedChar: null });
    } else {
      this.setState({ selectedChar: element });
    }
  };

  showDecor = (decor) => {
    if (!this.state.decor) {
      this.setState({ decor });
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
            showDecor={this.showDecor}
          />
          <CharInfo selectedChar={this.state.selectedChar} />
          {this.state.decor ? (
            <img
              src="/src/assets/Characters/img/png/bg_vision.png"
              alt="vision"
              className="Characters_decor"
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default CharactersApp;
