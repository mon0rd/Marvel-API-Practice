// import { useState } from "react";
import { Component } from "react";
import "/src/components/comics/comicsList/ComicsList.sass";

class ComicsList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="ComicsList">
        <div className="ComicsList_wrapper">
          <div className="ComicsList_card">
            <img
              src="/src/assets/Comics/img/jpeg/ultimate_war.jpg"
              alt="ultimate_war"
              className="ComicsList_card_avatar"
            />
            <span className="ComicsList_card_name">
              ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
            </span>
            <span className="ComicsList_card_price">9.99$</span>
          </div>
          <div className="ComicsList_card">
            <img
              src="/src/assets/Comics/img/jpeg/x_men.jpg"
              alt="x_men"
              className="ComicsList_card_avatar"
            />
            <span className="ComicsList_card_name">
              X-Men: Days of Future Past
            </span>
            <span className="ComicsList_card_price">NOT AVAILABLE</span>
          </div>
          <div className="ComicsList_card">
            <img
              src="/src/assets/Comics/img/jpeg/ultimate_war.jpg"
              alt="ultimate_war"
              className="ComicsList_card_avatar"
            />
            <span className="ComicsList_card_name">
              ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
            </span>
            <span className="ComicsList_card_price">9.99$</span>
          </div>
          <div className="ComicsList_card">
            <img
              src="/src/assets/Comics/img/jpeg/x_men.jpg"
              alt="x_men"
              className="ComicsList_card_avatar"
            />
            <span className="ComicsList_card_name">
              X-Men: Days of Future Past
            </span>
            <span className="ComicsList_card_price">NOT AVAILABLE</span>
          </div>
          <div className="ComicsList_card">
            <img
              src="/src/assets/Comics/img/jpeg/ultimate_war.jpg"
              alt="ultimate_war"
              className="ComicsList_card_avatar"
            />
            <span className="ComicsList_card_name">
              ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
            </span>
            <span className="ComicsList_card_price">9.99$</span>
          </div>
          <div className="ComicsList_card">
            <img
              src="/src/assets/Comics/img/jpeg/x_men.jpg"
              alt="x_men"
              className="ComicsList_card_avatar"
            />
            <span className="ComicsList_card_name">
              X-Men: Days of Future Past
            </span>
            <span className="ComicsList_card_price">NOT AVAILABLE</span>
          </div>
          <div className="ComicsList_card">
            <img
              src="/src/assets/Comics/img/jpeg/ultimate_war.jpg"
              alt="ultimate_war"
              className="ComicsList_card_avatar"
            />
            <span className="ComicsList_card_name">
              ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
            </span>
            <span className="ComicsList_card_price">9.99$</span>
          </div>
          <div className="ComicsList_card">
            <img
              src="/src/assets/Comics/img/jpeg/x_men.jpg"
              alt="x_men"
              className="ComicsList_card_avatar"
            />
            <span className="ComicsList_card_name">
              X-Men: Days of Future Past
            </span>
            <span className="ComicsList_card_price">NOT AVAILABLE</span>
          </div>
        </div>
        <button className="red_wide_btn">load more</button>
      </div>
    );
  }
}

export default ComicsList;
