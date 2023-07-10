const express = require("express");
const app = express();
const mongoose = require("mongoose");
const MovieModel = require("./models/Movies");
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://guykube100:Guy123Sroka@movies.0kglxjw.mongodb.net/MoviesDB?retryWrites=true&w=majority");

async function getMovies() {
  const Movies = await MovieModel.find();
  return Movies;
}

function getMovieByName(name) {
  const Movie = MovieModel.findOne({ name: name });
  return Movie;
}

function removeMovieById(id) {
  const deleted = MovieModel.findByIdAndDelete(id);
  return deleted;
}

app.get("/getMovies", function (req, res) {
  getMovies().then(function (MoviesFound) {
    res.json(MoviesFound);
  });
});

app.post("/getMovieByName", function (req, res) {
  getMovieByName(req.body.name)
    .then((MovieFound) => {
      res.json(MovieFound);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/addMovie", async function (req, res) {
  const movie = req.body;
  const newMovie = new MovieModel(movie);
  await newMovie.save();

  res.json(movie);
});

app.post("/delMovie", function (req, res) {
  removeMovieById(req.body._id)
    .then((deleted) => res.json(deleted))
    .catch((err) => {
      console.log(err);
    });
});

app.listen(3001, () => {
  console.log("Server started on port 3001");
});
