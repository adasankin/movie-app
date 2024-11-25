import React from 'react';
import PropTypes from 'prop-types';
import noPoster from '../assets/no-poster-available.jpg';

const Movie = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="card">
      {movie.poster_path ? (
        <img src={posterUrl} alt={movie.title || movie.name} className="card-img-top" />
      ) : (
        <img src={noPoster} alt="No Poster Available" className="card-img-top" />
      )}
      <div className="card-body">
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
