// import { useState } from "react";
import { Component } from "react";
import "/src/Components/Characters/CharList/CharList.sass";

class CharList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="CharList">
        <div className="CharList_wrapper">
          <div className="CharList_card">
            <img
              src="/src/assets/Characters/img/jpeg/abyss.jpg"
              alt="abyss"
              className="CharList_card_avatar"
            />
            <span className="CharList_card_name">ABYSS</span>
          </div>
          <div className="CharList_card active">
            <img
              src="/src/assets/Characters/img/jpeg/loki.jpg"
              alt="loki"
              className="CharList_card_avatar"
            />
            <span className="CharList_card_name">LOKI</span>
          </div>
          <div className="CharList_card">
            <img
              src="/src/assets/Characters/img/jpeg/adam_warlock.jpg"
              alt="adam_warlock"
              className="CharList_card_avatar"
            />
            <span className="CharList_card_name">Adam Warlock</span>
          </div>
          <div className="CharList_card">
            <img
              src="/src/assets/Characters/img/jpeg/boom_boom.jpg"
              alt="boom_boom"
              className="CharList_card_avatar"
            />
            <span className="CharList_card_name">Boom Boom</span>
          </div>
          <div className="CharList_card">
            <img
              src="/src/assets/Characters/img/jpeg/calypso.jpg"
              alt="calypso"
              className="CharList_card_avatar"
            />
            <span className="CharList_card_name">Calypso</span>
          </div>
          <div className="CharList_card">
            <img
              src="/src/assets/Characters/img/jpeg/colleen_wing.jpg"
              alt="colleen_wing"
              className="CharList_card_avatar"
            />
            <span className="CharList_card_name">Colleen Wing</span>
          </div>
          <div className="CharList_card">
            <img
              src="/src/assets/Characters/img/jpeg/daimon_hellstrom.jpg"
              alt="daimon_hellstrom"
              className="CharList_card_avatar"
            />
            <span className="CharList_card_name">Daimon Hellstrom</span>
          </div>
          <div className="CharList_card">
            <img
              src="/src/assets/Characters/img/jpeg/damage_control.jpg"
              alt="damage_control"
              className="CharList_card_avatar"
            />
            <span className="CharList_card_name">Damage Control</span>
          </div>
          <div className="CharList_card">
            <img
              src="/src/assets/Characters/img/jpeg/hulk.jpg"
              alt="hulk"
              className="CharList_card_avatar"
            />
            <span className="CharList_card_name">HULK</span>
          </div>
        </div>

        <button className="red_wide_btn">load more</button>
      </div>
    );
  }
}

export default CharList;
