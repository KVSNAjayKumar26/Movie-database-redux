import React from 'react';
import './MovieItem.css';

const MovieItem = ({ movie }) => {
  return (
    <div className='movie-item'>
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
    </div>
  );
};

export default MovieItem;