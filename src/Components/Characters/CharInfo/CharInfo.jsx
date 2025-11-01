import { Component } from "react";
import "/src/Components/Characters/CharInfo/CharInfo.sass";

class CharInfo extends Component {
  formComicsList = () => {
    if (this.props.selectedChar.comics) {
      return this.props.selectedChar.comics.items.map((element, i) => {
        return (
          <li key={i} className="CharInfo_comics_item">
            {element}
          </li>
        );
      });
    }
  };

  render() {
    const { name, text, thumbnail, homepage, wiki } = this.props.selectedChar;

    let comics = this.formComicsList();

    return (
      <aside className="CharInfo">
        <div className="CharInfo_header">
          <img src={thumbnail} alt={name} className="CharInfo_avatar" />
          <div className="CharInfo_header_wrapper">
            <h2 className="title_h2">{name}</h2>
            <a href={homepage}>
              <button className="red_btn">HOMEPAGE</button>
            </a>
            <a href={wiki}>
              <button className="gray_btn">WIKI</button>
            </a>
          </div>
        </div>
        <div className="CharInfo_text">{text}</div>
        <h3 className="title_h3">Comics:</h3>
        <ul className="CharInfo_comics"> {comics}</ul>
      </aside>
    );
  }
}

export default CharInfo;
