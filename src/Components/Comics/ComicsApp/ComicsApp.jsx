// import { useState } from "react";
import { Component } from "react";
import "/src/Components/Comics/ComicsApp/ComicsApp.sass";

import Banner from "/src/Components/Comics/Banner/Banner.jsx";
import ComicsList from "/src/Components/Comics/ComicsList/ComicsList.jsx";
import ComicsItem from "/src/Components/Comics/ComicsItem/ComicsItem.jsx";
import ComicsCharPage from "/src/Components/Comics/ComicsCharPage/ComicsCharPage.jsx";

class ComicsApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="ComicsApp">
        <Banner />
        {/* <ComicsList /> */}
        {/* <ComicsItem /> */}
        <ComicsCharPage />
      </div>
    );
  }
}

export default ComicsApp;
