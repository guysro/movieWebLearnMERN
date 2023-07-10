import { useEffect } from "react";
import RatingStars from "./RatingStars";

interface Props {
  name: string;
  picUrl: string;
  rating: number;
  category: string;
}
function MovieBlock({ name, picUrl, rating, category }: Props) {
  return (
    <>
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      ></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap"
        rel="stylesheet"
      ></link>

      <div
        className="card d-inline-block border border-2 border-dark bg-opacity-25"
        style={{ width: "201px", height: "350px", fontFamily: "Roboto Condensed" }}
      >
        <img
          className="card-img-top"
          src={picUrl}
          alt="No picture for movie"
          style={{ maxHeight: "200px" }}
          id="pic"
        />
        <div className="card-body bg-opacity-25">
          <span className="card-title fs-2">{name}</span>
          <br />
          <span className="card-text fs-5">
            Rating: <RatingStars Rating={rating}></RatingStars>
          </span>
        </div>
      </div>
    </>
  );
}
export default MovieBlock;
