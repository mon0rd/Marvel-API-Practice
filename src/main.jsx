import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import "/src/styles/index.sass";
import { CacheProvider } from "/src/context/CacheProvider.jsx";

import Header from "/src/components/header/Header.jsx";
import Spinner from "/src/components/spinner/Spinner.jsx";

const CharactersApp = lazy(() =>
  import("/src/components/pages/charactersApp/CharactersApp.jsx")
);
const ComicsApp = lazy(() =>
  import("/src/components/pages/comicsApp/ComicsApp.jsx")
);
const CharPage = lazy(() =>
  import("/src/components/pages/charPage/CharPage.jsx")
);
const Page404 = lazy(() => import("/src/components/pages/404/404.jsx"));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <CacheProvider>
          {/* <Suspense
          fallback={
            <Spinner
              style={{
                width: "188px",
                height: "188px",
                margin: "100px  auto",
              }}
            />
          }> */}
          <Routes>
            <Route path="/" element={<Navigate to="/characters" replace />} />
            <Route index path="/characters/*" element={<CharactersApp />} />
            <Route path="/comics/*" element={<ComicsApp />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
          {/* </Suspense> */}
        </CacheProvider>
      </BrowserRouter>
    </div>
  </StrictMode>
);
