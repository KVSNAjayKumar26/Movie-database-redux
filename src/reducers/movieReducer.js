import { FETCH_MOVIES, FILTER_MOVIES, SEARCH_MOVIES } from "../actions/movieActions";


const initialState = {
    movies: [],
    filteredMovies: [],
    searchQuery: '',
    selectedGenre: ''
};

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            return { ...state, movies: action.payload, filteredMovies: action.payload };
        case SEARCH_MOVIES:
            return {
                ...state,
                searchQuery: action.payload,
                filteredMovies: state.movies.filter(movie =>
                    movie.title.toLowerCase().includes(action.payload.toLowerCase())
                )
            };
        case FILTER_MOVIES:
            return {
                ...state,
                selectedGenre: action.payload,
                filteredMovies: state.movies.filter(movie =>
                    movie.genre.includes(action.payload)
                )
            };
        default:
            return state;
    };
};

export default movieReducer;