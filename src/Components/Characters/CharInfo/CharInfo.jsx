import "/src/components/characters/charInfo/CharInfo.sass";
import CharInfoPlaceholder from "/src/components/characters/charInfoPlaceholder/CharInfoPlaceholder.jsx";

const CharInfo = (props)=> {
  const formComicsList = () => {
    if (props.selectedChar.comics) {
      return props.selectedChar.comics.items.map((element, i) => {
        return (
          <li key={i} className="CharInfo_comics_item">
            {element}
          </li>
        );
      });
    }
  };

  const formCharInfo = () => {
    const { name, text, thumbnail, homepage, wiki } = props.selectedChar;
    return (
      <aside className="CharInfo">
        <div className="CharInfo_header">
          <img src={thumbnail} alt={name} className="CharInfo_avatar" />
          <div className="CharInfo_header_wrapper">
            <h2 className="title_h2">{name}</h2>
            <a tabIndex={-1} href={homepage}>
              <button className="red_btn">HOMEPAGE</button>
            </a>
            <a tabIndex={-1} href={wiki}>
              <button className="gray_btn">WIKI</button>
            </a>
          </div>
        </div>
        <div className="CharInfo_text">{text}</div>
        <h3 className="title_h3">Comics:</h3>
        <ul className="CharInfo_comics">{formComicsList()}</ul>
      </aside>
    );
  };

    let charInfo = <CharInfoPlaceholder />;
    if (props.selectedChar) {
      charInfo = formCharInfo();
    }

    return charInfo;
  
}

export default CharInfo;
