import { CSSProperties, useEffect, useState } from "react";
import SimpleNav from "../components/SimpleNav";
import AdminBlock from "../components/AdminBlock";

function Admin() {
  const [movieList, setMovieList] = useState([{ name: " ", rating: 4, picUrl: " ", category: " " }]);
  let movies = true;

  useEffect(() => {
    fetch("http://localhost:3001/getMovies")
      .then((response) => response.json())
      .then((data) => {
        data[0] == null ? setMovieList(data) : (movies = true);
        console.log(data);
      });
  }, []);

  const appStyle: CSSProperties = { backgroundColor: "#66aaff", height: "100vh", margin: "0px", overflow: "hidden" };

  return (
    <div style={appStyle}>
      <SimpleNav LogoImg="./images/unnamed.jpg" />
      <div
        className="d-flex"
        style={{ height: "100%", gap: "30px", margin: "30px" }}
      >
        {movies ? (
          <h1
            className="translate-middle start-50 top-50"
            style={{ position: "absolute", fontSize: "5rem" }}
          >
            No movies
          </h1>
        ) : (
          movieList.map((movie, index) => (
            <AdminBlock
              name={movie.name}
              category={movie.category}
              rating={movie.rating}
              picUrl={movie.picUrl}
              key={index}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Admin;
