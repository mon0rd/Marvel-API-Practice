// import { useState } from "react";
import { Component } from "react";
import "/src/Components/Comics/ComicsItem/ComicsItem.sass";

class ComicsItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="ComicsItem">
        <img
          src="/src/assets/Comics/img/jpeg/x_men.jpg"
          alt="x_men"
          className="ComicsItem_avatar"
        />
        <div className="ComicsItem_wrapper">
          <h2 className="title_h2">X-Men: Days of Future Past</h2>
          <p className="ComicsItem_text">
            Re-live the legendary first journey into the dystopian future of
            2013 - where Sentinels stalk the Earth, and the X-Men are humanity's
            only hope...until they die! Also featuring the first appearance of
            Alpha Flight, the return of the Wendigo, the history of the X-Men
            from Cyclops himself...and a demon for Christmas!?
          </p>
          <span className="ComicsItem_pages">144 pages</span>
          <span className="ComicsItem_lang">Language: en-us</span>
          <span className="ComicsItem_price">9.99$</span>
        </div>
        <span className="ComicsItem_back">Back to all</span>
      </div>
    );
  }
}

export default ComicsItem;
