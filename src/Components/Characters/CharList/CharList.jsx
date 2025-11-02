import { Component } from "react";
import "/src/components/characters/charList/CharList.sass";
import MarvelService from "/src/services/MarvelService.jsx";

class CharList extends Component {
  state = {
    offset: 0,
    error: false,
  };

  marvelService = new MarvelService();

  componentDidMount() {
    this.updateCharList();
  }

  updateCharList = () => {
    this.marvelService
      .getAllCharacters(this.state.offset)
      .then(this.onCharListLoaded)
      .catch(this.onError);
    this.setState({ offset: this.state.offset + 9 });
  };

  onCharListLoaded = (charlist) => {
    // if (!this.state.charlist) {
    //   this.setState({ charlist });
    // }
    // else if (this.state.charlist[0].id !== charlist[0].id) {//strictmode
    // else {
    this.setState({
      charlist: this.state.charlist
        ? [...this.state.charlist, ...charlist]
        : charlist,
    });
    // }

    if (!this.props.showDecor) {
      this.props.showDecor(true);
    }
  };

  formRenderedList = () => {
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
  };

  onError = () => {
    this.setState({ error: true });
    this.props.showDecor(true);
  };

  render() {
    const { charlist, error } = this.state;

    return (
      <div className="CharList">
        <div className="CharList_wrapper">
          {charlist ? this.formRenderedList() : null}
        </div>
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
        {charlist ? (
          <button
            onClick={() => this.updateCharList()}
            className="red_wide_btn">
            load more
          </button>
        ) : null}
      </div>
    );
  }
}

export default CharList;
