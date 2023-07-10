import { useState } from "react";
import AddMovieInput from "./AddMovieInput";

function addMovieForm() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [cat, setCat] = useState("");
  const [pic, setPic] = useState("");

  const submit = async () => {
    if (name.length > 0 && cat.length > 0 && pic.length > 0 && rating <= 5 && rating > 0) {
      const response = await fetch("http://localhost:3001/addMovie", {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({ "name": name, "rating": rating, "category": cat, "picUrl": pic })
      });
      const data = await response.json();
      console.log(data);
      alert("MOVIE ADDED");
      window.location.href = "http://localhost:3000/addMovie";
    } else if (rating > 5 || rating < 0) {
      alert("RATING MUST BE BETWEEN 0 AND 5");
    } else {
      alert("ONE OR MORE VALUES MISSING");
    }
  };

  return (
    <div
      className="d-flex flex-column gap-4 p-4 position-absolute top-50 start-50 translate-middle align-items-center"
      style={{ border: "1px solid black", borderRadius: "30px", backgroundColor: "#55555555" }}
    >
      <header style={{ fontSize: "30px", fontWeight: 500 }}>Add a movie</header>
      <AddMovieInput
        type="text"
        placeHolder="Movie Name:"
        onChange={(event: any) => {
          setName(event.target.value);
        }}
      />
      <AddMovieInput
        type="text"
        placeHolder="Movie Category:"
        onChange={(event: any) => {
          setCat(event.target.value);
        }}
      />
      <AddMovieInput
        type="number"
        placeHolder="Movie Rating:"
        onChange={(event: any) => {
          setRating(event.target.valueAsNumber);
        }}
      />
      <AddMovieInput
        type="text"
        placeHolder="Movie Picture URL:"
        onChange={(event: any) => {
          setPic(event.target.value);
        }}
      />
      <input
        style={{ height: "4vh", width: "5vw", border: "1px solid black", borderRadius: "20px", padding: "2%" }}
        type="button"
        value="submit"
        onClick={submit}
      />
    </div>
  );
}

export default addMovieForm;
