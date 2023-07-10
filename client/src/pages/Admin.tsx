import { CSSProperties, useEffect, useState } from "react";
import { CategoryNav } from "../components/CategoryNav";
import MainPanel from "../components/MainPanel";
import SimpleNav from "../components/SimpleNav";
import PageNavBtn from "../components/PageNavBtn";
import axios from "axios";
import AdminBlock from "../components/AdminBlock";

function Admin() {
  const [movieList, setMovieList] = useState([{ name: " ", rating: 4, picUrl: " ", category: " " }]);

  useEffect(() => {
    fetch("http://localhost:3001/getMovies")
      .then((response) => response.json())
      .then((data) => setMovieList(data));
  }, []);

  const appStyle: CSSProperties = { backgroundColor: "#66aaff", height: "100vh", margin: "0px", overflow: "hidden" };

  return (
    <div style={appStyle}>
      <SimpleNav LogoImg="./images/unnamed.jpg" />
      <div
        className="d-flex"
        style={{ height: "100%", gap: "30px", margin: "30px" }}
      >
        {movieList.map((movie, index) => (
          <AdminBlock
            name={movie.name}
            category={movie.category}
            rating={movie.rating}
            picUrl={movie.picUrl}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Admin;
