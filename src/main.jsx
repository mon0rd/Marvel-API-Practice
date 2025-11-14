import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "/src/styles/index.sass";

import Header from "/src/components/header/Header.jsx";
import CharactersApp from "/src/components/pages/charactersApp/CharactersApp.jsx";
import ComicsApp from "/src/components/pages/comicsApp/ComicsApp.jsx";
// import ComicsItem from "/src/components/pages/comicsItem/ComicsItem.jsx";
import Page404 from "/src/components/pages/404/404.jsx";

// import MarvelService from "/src/services/MarvelService.jsx";
// const marvelService = new MarvelService();
// marvelService.getCharacter(1011005).then((res) => console.log(res));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<CharactersApp />} />
          <Route path="/comics/*" element={<ComicsApp />} />
          {/* <Route path="/comics/:comicsId" element={<ComicsItem />} /> */}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  </StrictMode>
);
