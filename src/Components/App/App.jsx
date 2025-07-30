// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { Component } from "react";
import "/src/Components/App/App.sass";

import Header from "/src/Components/Header/Header.jsx";
import RandomChar from "/src/Components/RandomChar/RandomChar.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Header />
        <RandomChar />
      </div>
    );
  }
}

export default App;
