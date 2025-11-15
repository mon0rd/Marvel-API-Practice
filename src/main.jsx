import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "/src/styles/index.sass";

import Header from "/src/components/header/Header.jsx";
// import CharactersApp from "/src/components/pages/charactersApp/CharactersApp.jsx";
// import ComicsApp from "/src/components/pages/comicsApp/ComicsApp.jsx";
// import Page404 from "/src/components/pages/404/404.jsx";
import Spinner from "/src/components/spinner/Spinner.jsx";

const CharactersApp = lazy(() =>
  import("/src/components/pages/charactersApp/CharactersApp.jsx")
);
const ComicsApp = lazy(() =>
  import("/src/components/pages/comicsApp/ComicsApp.jsx")
);
const Page404 = lazy(() => import("/src/components/pages/404/404.jsx"));
// import MarvelService from "/src/services/MarvelService.jsx";
// const marvelService = new MarvelService();
// marvelService.getCharacter(1011005).then((res) => console.log(res));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Suspense
          fallback={
            <Spinner
              style={{
                width: "188px",
                height: "188px",
                margin: "100px  auto",
              }}
            />
          }>
          <Routes>
            <Route path="/" element={<CharactersApp />} />
            <Route path="/comics/*" element={<ComicsApp />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  </StrictMode>
);
