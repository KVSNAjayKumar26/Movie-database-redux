import React from 'react'
import { useSelector } from 'react-redux'
import MovieItem from './MovieItem';

const MovieList = () => {
    const filteredMovies = useSelector(state => state.filteredMovies);
  return (
    <div>
        {filteredMovies.map(movie => (
            <MovieItem key={movie.id} movie={movie} />
        ))}
    </div>
  );
};

export default MovieList;