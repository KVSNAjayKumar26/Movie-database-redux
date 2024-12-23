import axios from "axios";

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const SEARCH_MOVIES = 'SEARCH_MOVIES';
export const FILTER_MOVIES = 'FILTER_MOVIES';

export const fetchMovies = () => {
    return async (dispatch) => {
        const response = await axios.get('https://freetestapi.com/api/v1/movies ');
        dispatch({ type: FETCH_MOVIES, payload: response.data });
    };
};

export const searchMovies = (query) => {
    return { type: SEARCH_MOVIES, payload: query };
};

export const filterMovies = (genre) => {
    return {type: FILTER_MOVIES, payload: genre };
};