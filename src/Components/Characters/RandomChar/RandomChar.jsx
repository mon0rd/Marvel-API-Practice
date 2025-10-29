import "/src/Components/Characters/RandomChar/RandomChar.sass";
import { Component } from "react";
import MarvelService from "/src/services/MarvelService.jsx";

class RandomChar extends Component {
  constructor(props) {
    super(props);
    this.updateChar();
  }

  state = {
    char: {},
  };

  marvelService = new MarvelService();

  onCharLoaded = (char) => {
    this.setState({ char });
  };

  updateChar = () => {
    const id = Math.floor(Math.random() * (1564 - 1 + 1) + 1);
    console.log(id);
    this.marvelService.getCharacter(id).then(this.onCharLoaded);
  };

  render() {
    const {
      char: { name, text, thumbnail, homepage, wiki },
    } = this.state;
    let randomChar = <div class="spinner"></div>;
    if (thumbnail) {
      randomChar = (
        <>
          <img src={thumbnail} alt={name} />
          <div className="Char_descr">
            <h2 className="title_h2">{name}</h2>
            <div className="Char_text">
              {text ? text : "Description missing"}
            </div>
            <div className="Char_btns">
              <a href={homepage}>
                <button className="red_btn">HOMEPAGE</button>
              </a>
              <a href={wiki}>
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
          <button className="red_btn">try it</button>
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
