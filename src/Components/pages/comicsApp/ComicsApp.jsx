import "/src/components/pages/comicsApp/ComicsApp.sass";
import { Routes, Route } from "react-router";
import Banner from "/src/components/comics/banner/Banner.jsx";
import ComicsList from "/src/components/comics/comicsList/ComicsList.jsx";
import ComicsItem from "/src/components/pages/comicsItem/ComicsItem.jsx";
// import ComicsChar from "/src/components/pages/comicsChar/ComicsChar.jsx";

const ComicsApp = () => {
  return (
    <div className="ComicsApp">
      <Banner />
      <Routes>
        <Route path=":comicsId" element={<ComicsItem />} />
        {/* <Route path="/characters/*" element={<ComicsChar />} /> */}
        <Route path="/" element={<ComicsList />} />
      </Routes>
    </div>
  );
};

export default ComicsApp;
