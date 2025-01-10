const movies = [
    { id: 1, title: "Inception" },
    { id: 2, title: "The Matrix" },
    { id: 3, title: "Interstellar" },
  ];
  
  // Экспортируем функцию для получения всех фильмов
  const getMovies = (req, res) => {
    res.json(movies);
  };
  
  // Экспортируем функцию для получения фильма по ID
  const getMovieById = (req, res) => {
    const movieId = parseInt(req.params.id, 10);
    const movie = movies.find((m) => m.id === movieId);
  
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).send({ error: "Movie not found" });
    }
  };
  
  // Экспорт функций
  module.exports = { getMovies, getMovieById };
