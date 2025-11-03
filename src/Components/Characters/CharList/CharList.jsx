import React, { Component } from "react";
import "/src/components/characters/charList/CharList.sass";
import MarvelService from "/src/services/MarvelService.jsx";

class CharList extends Component {
  state = {
    // charlist: [], //nostrictMode
    offset: 0,
    error: false,
    expanding: false,
  };

  marvelService = new MarvelService();

  componentDidMount() {
    this.updateCharList();
  }

  updateCharList = () => {
    if (!this.state.expanding || this.state.error) {
      this.setState({
        error: false,
        expanding: true,
      });
      this.marvelService
        .getAllCharacters(this.state.offset)
        .then(this.onCharListLoaded)
        .catch(this.onError);
    }
  };

  onCharListLoaded = (newCharlist) => {
    this.setState(({ offset, charlist }) => ({
      charlist:
        charlist && charlist[0].id !== newCharlist[0].id
          ? [...charlist, ...newCharlist]
          : newCharlist,
      loadBtn: newCharlist.length < 9 ? false : true,
      offset:
        charlist && charlist[0].id == newCharlist[0].id ? offset : offset + 9,
      expanding: false,
    }));

    //noStrictMode
    // this.setState(({ charlist }) => ({
    //   charlist: [...charlist, ...newCharlist],
    //   loadBtn: newCharlist.length < 9 ? false : true,
    //   offset: this.state.offset + 9,
    //   expanding: false,
    // }));

    this.props.showDecor(true);
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
          tabIndex={0}
          onClick={() => this.props.onCharSelect(element)}
          onKeyDown={(e) => {
            if (e.key === " " || e.key === "Space" || e.key === "Enter") {
              e.preventDefault();
              this.props.onCharSelect(element);
            }
          }}
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
    this.props.showDecor(false);
  };

  render() {
    const { charlist, error, loadBtn, expanding, offset } = this.state;

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
              style={{ width: "40%", margin: "auto" }}
              alt="error"
            />
            <button
              onClick={() => this.updateCharList()}
              className="red_wide_btn">
              reload
            </button>
          </>
        ) : null}
        {charlist && expanding ? (
          <div
            style={{ marginTop: "35px", height: "60px", width: "60px" }}
            className="spinner"></div>
        ) : null}
        {charlist && loadBtn && !expanding && offset !== 20 ? (
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
