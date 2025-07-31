import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "/src/styles/index.sass";

import Header from "/src/Components/Header/Header.jsx";
import CharactersApp from "/src/Components/Characters/CharactersApp/CharactersApp.jsx";
import ComicsApp from "/src/Components/Comics/ComicsApp/ComicsApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="wrapper">
      <Header />
      {/* <CharactersApp /> */}
      <ComicsApp />
    </div>
  </StrictMode>
);
