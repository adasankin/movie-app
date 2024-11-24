import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="card">
      {movie.poster_path ? (
        <img src={posterUrl} alt={movie.title || movie.name} className="card-img-top" />
      ) : (
        <p className="text-center">No Image Available</p>
      )}
      <div className="card-body p-2">
        <h6 className="card-title text-center fs-6">
          {movie.title || movie.name}
        </h6>
      </div>
    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default Movie;
