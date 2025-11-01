import { Component } from "react";
import "/src/Components/Characters/CharList/CharList.sass";
import MarvelService from "/src/services/MarvelService.jsx";

class CharList extends Component {
  state = { error: false };

  marvelService = new MarvelService();

  componentDidMount() {
    this.updateCharList();
  }

  updateCharList = () => {
    // if (this.state.error || this.state.char.name) {
    const id = Math.floor(Math.random() * (19 - 1 + 1) + 1);
    // this.setState({ char: {}, error: false });
    this.marvelService
      .getAllCharacters(id)
      .then(this.onCharListLoaded)
      .catch(this.onError);
    // }
  };

  onCharListLoaded = (charlist) => {
    this.setState({ charlist });
  };

  formRenderedList = () => {
    if (this.state.charlist) {
      return this.state.charlist.map((element) => {
        let classname = "CharList_card";
        if (
          this.props.selectedChar &&
          element.id === this.props.selectedChar.id
        ) {
          classname = "CharList_card active";
        }
        return (
          <div
            onClick={() => this.props.onCharSelect(element)}
            key={element.id}
            className={classname}>
            <img
              src={element.thumbnail}
              alt={element.name}
              className="CharList_card_avatar"
            />
            <span className="CharList_card_name">{element.name}</span>
          </div>
        );
      });
    }
  };

  onError = () => {
    this.setState({ error: true });
  };

  render() {
    const { charlist, error } = this.state;
    let renderedList = this.formRenderedList();

    return (
      <div className="CharList">
        <div className="CharList_wrapper">{renderedList}</div>
        {!charlist && !error ? <div className="spinner"></div> : null}
        {error ? (
          <>
            <img
              src="/src/assets/error.gif"
              style={{ width: "100%" }}
              alt="error"
            />
            <button className="red_wide_btn">reload</button>
          </>
        ) : null}
        {charlist ? <button className="red_wide_btn">load more</button> : null}
      </div>
    );
  }
}

export default CharList;
