import RatingStars from "./RatingStars";

interface Props {
  name: string;
  picUrl: string;
  rating: number;
  category: string;
}

const delMovie = (name: string, picUrl: string, rating: number, category: string) => {
  fetch("http://localhost:3001/getMovieByName", {
    "headers": { "Content-Type": "application/json" },
    "method": "POST",
    body: JSON.stringify({ name: name })
  })
    .then((response) => response.json())
    .then((data) => {
      fetch("http://localhost:3001/delMovie", {
        "headers": { "Content-Type": "application/json" },
        "method": "POST",
        "body": JSON.stringify({ "name": name, "rating": rating, "category": category, "picUrl": picUrl, "_id": data._id })
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          window.location.href = "http://localhost:3000/admin";
        });
    });
};
function MovieBlock({ name, picUrl, rating, category }: Props) {
  const removeMovie = () => {
    delMovie(name, picUrl, rating, category);
  };

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
        />
        <div className="card-body bg-opacity-25">
          <span className="card-title fs-2">{name}</span>
          <br />
          <span className="card-text fs-5">
            Rating: <RatingStars Rating={rating}></RatingStars>
            <input
              style={{ width: "50%", height: "20%", border: "1px solid black", borderRadius: "30px", marginLeft: "25%", marginTop: "5%" }}
              type="button"
              onClick={removeMovie}
              value={"remove"}
            />
          </span>
        </div>
      </div>
    </>
  );
}
export default MovieBlock;
