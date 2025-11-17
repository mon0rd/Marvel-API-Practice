import "/src/components/characters/charInfoPlaceholder/CharInfoPlaceholder.sass";

function CharInfoPlaceholder() {
  return (
    <aside className="CharInfoPlaceholder">
      <h3 className="title_h3">Please select a character to see information</h3>
      <div className="CharInfoPlaceholder_wrapper">
        <div className="CharInfoPlaceholder_round"></div>
        <div className="CharInfoPlaceholder_bar_slim"></div>
      </div>
      <div className="CharInfoPlaceholder_bar"></div>
      <div className="CharInfoPlaceholder_bar"></div>
      <div className="CharInfoPlaceholder_bar"></div>
    </aside>
  );
}

export default CharInfoPlaceholder;
