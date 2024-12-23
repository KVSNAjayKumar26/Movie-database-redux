import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies } from './actions/movieActions';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Movie Database</h1>
      <div className="search-bar">
        <SearchBar />
      </div>
      <div className="movie-list">
        <MovieList />
      </div>
    </div>
  );
};

export default App;
