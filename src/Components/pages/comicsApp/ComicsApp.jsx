import "/src/components/pages/comicsApp/ComicsApp.sass";
import { BrowserRouter, Routes, Route } from "react-router";
import Banner from "/src/components/comics/banner/Banner.jsx";
import ComicsList from "/src/components/comics/comicsList/ComicsList.jsx";
import ComicsItem from "/src/components/pages/comicsItem/ComicsItem.jsx";
import ComicsCharPage from "/src/components/comics/comicsCharPage/ComicsCharPage.jsx";

const ComicsApp = () => {
  return (
    <div className="ComicsApp">
      <Banner />
      <Routes>
        <Route path=":comicsId" element={<ComicsItem />} />
        <Route path="/" element={<ComicsList />} />
      </Routes>
      {/* <ComicsCharPage /> */}
    </div>
  );
};

export default ComicsApp;
