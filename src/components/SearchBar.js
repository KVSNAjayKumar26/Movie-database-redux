import React from 'react';
import { useDispatch } from 'react-redux';
import { searchMovies } from '../actions/movieActions';
import './SearchBar.css'; // Import the CSS file

const SearchBar = () => {
    const dispatch = useDispatch();

    const handleSearch = (event) => {
        dispatch(searchMovies(event.target.value));
    };

    return (
        <input
            type="text"
            className="search-bar"
            placeholder="Search movies..."
            onChange={handleSearch}
        />
    );
};

export default SearchBar;
