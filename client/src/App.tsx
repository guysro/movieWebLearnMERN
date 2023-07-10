import { CSSProperties, useEffect, useState } from "react";
import { CategoryNav } from "./components/CategoryNav";
import MainPanel from "./components/MainPanel";
import SimpleNav from "./components/SimpleNav";
import PageNavBtn from "./components/PageNavBtn";
import axios from "axios";

function App() {
  const cats: string[] = ["all", "action", "drama", "comedy"];

  const [movieList, setMovieList] = useState([{ name: " ", rating: 4, picUrl: " ", category: " " }]);

  useEffect(() => {
    fetch("http://localhost:3001/getMovies")
      .then((response) => response.json())
      .then((data) => setMovieList(data));
  }, []);

  const [currentCat, setCurrentCat] = useState("all");

  const appStyle: CSSProperties = { backgroundColor: "#66aaff", height: "100vh", margin: "0px", overflow: "hidden" };
  if (movieList[0].name == " ") {
    return (
      <div style={appStyle}>
        <SimpleNav LogoImg="./images/unnamed.jpg" />
        <div
          className="d-flex"
          style={{ height: "100%" }}
        >
          <CategoryNav
            CategoriesList={cats}
            SetCat={setCurrentCat}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div style={appStyle}>
        <SimpleNav LogoImg="./images/unnamed.jpg" />
        <div
          className="d-flex"
          style={{ height: "100%" }}
        >
          <CategoryNav
            CategoriesList={cats}
            SetCat={setCurrentCat}
          />
          <MainPanel
            movies={movieList}
            currentCat={currentCat}
          />
        </div>
      </div>
    );
  }
}

export default App;
