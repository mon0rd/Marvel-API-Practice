import "/src/components/characters/randomChar/RandomChar.sass";
import { Component } from "react";
import MarvelService from "/src/services/MarvelService.jsx";

class RandomChar extends Component {
  state = {
    char: { name: "123" },
  };

  marvelService = new MarvelService();

  componentDidMount() {
    this.updateChar();
  }

  updateChar = () => {
    if (this.state.error || this.state.char.name) {
      let id = Math.floor(Math.random() * (20 - 0) + 0);
      if (this.state.char.id === id + 1) {
        return this.updateChar();
      }
      this.setState({ char: {}, error: false });
      this.marvelService
        .getCharacter(id)
        .then(this.onCharLoaded)
        .catch(this.onError);
    }
  };

  onCharLoaded = (char) => {
    this.setState({ char });
  };

  onError = () => {
    this.setState({ error: true });
  };

  render() {
    const {
      char: { name, text, thumbnail, homepage, wiki },
      error,
    } = this.state;
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
    } else if (thumbnail) {
      randomChar = (
        <>
          <img src={thumbnail} alt={name} />
          <div className="Char_descr">
            <h2 className="title_h2">{name}</h2>
            <div className="Char_text">
              {text ? text : "Description missing"}
            </div>
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
          <button onClick={this.updateChar} className="red_btn">
            try it
          </button>
          <img
            src="/src/assets/Characters/img/png/mjolnir_shield.png"
            alt="mjolnir_shield"
          />
        </div>
      </div>
    );
  }
}

export default RandomChar;
