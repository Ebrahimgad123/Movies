import React, { useEffect, useState } from 'react';

const url = '';

const MovieRequest = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = () => {
    try {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setMovies(data.results || []))
        .then((data) =>console.log(data))
        .catch((error) => console.log('error:', error));
    } catch (error) {
      console.log('error:', error);
    }
  };

  return (
    <div>
      <h2>Favorite Movies</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieRequest;