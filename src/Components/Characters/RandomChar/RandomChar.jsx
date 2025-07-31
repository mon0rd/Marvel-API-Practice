import "/src/Components/Characters/RandomChar/RandomChar.sass";

function RandomChar() {
  return (
    <div className="RandomChar">
      <div className="Char">
        <img src="/src/assets/Characters/img/jpeg/thor.jpg" alt="thor" />
        <div className="Char_descr">
          <h2 className="title_h2">THOR</h2>
          <div className="Char_text">
            As the Norse God of thunder and lightning, Thor wields one of the
            greatest weapons ever made, the enchanted hammer Mjolnir. While
            others have described Thor as an over-muscled, oafish imbecile, he's
            quite smart and compassionate...
          </div>
          <div className="Char_btns">
            <button className="red_btn">HOMEPAGE</button>
            <button className="gray_btn">WIKI</button>
          </div>
        </div>
      </div>
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

export default RandomChar;
