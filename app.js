const express = require("express");
const app = express();

const movies = [
  { id: 1, title: "Inception" },
  { id: 2, title: "The Matrix" },
  { id: 3, title: "Interstellar" },
];

app.get("/api/movies", (req, res) => {
  res.json(movies);
});

app.get("/api/movies/:id", (req, res) => {
  const movieId = parseInt(req.params.id, 10);
  const movie = movies.find((m) => m.id === movieId);

  if (movie) {
    res.json(movie);
  } else {
    res.status(404).send({ error: "Movie not found" });
  }
});

module.exports = app;