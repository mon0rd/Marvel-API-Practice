// import { useState } from "react";
import { Component } from "react";
import "/src/components/comics/comicsApp/ComicsApp.sass";

import Banner from "/src/components/comics/banner/Banner.jsx";
import ComicsList from "/src/components/comics/comicsList/ComicsList.jsx";
import ComicsItem from "/src/components/comics/comicsItem/ComicsItem.jsx";
import ComicsCharPage from "/src/components/comics/comicsCharPage/ComicsCharPage.jsx";

class ComicsApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="ComicsApp">
        <Banner />
        <ComicsList />
        {/* <ComicsItem /> */}
        {/* <ComicsCharPage /> */}
      </div>
    );
  }
}

export default ComicsApp;
