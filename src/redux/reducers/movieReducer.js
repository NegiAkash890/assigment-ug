import {
  DELETE_MOVIE,
  FETCH_MOVIES,
  FETCH_MOVIE_ID,
  UPDATE_MOVIE
} from '../constants/constants';

const intialState = {
  movies: [],
  filteredMovies: []
};
/* Error - 1 */
// eslint-disable-next-line
export default function movieReducer(state = intialState, { type, payload }) {
  switch (type) {
    case FETCH_MOVIES:
      return {
        movies: [...payload],
        filteredMovies: [...payload],
        selectedMovie: []
      };
    case DELETE_MOVIE: {
      const newState = [...state.filteredMovies];
      const updateState = newState.filter((movie) => movie.imdbID !== payload);
      return {
        movies: state.movies,
        filteredMovies: [...updateState],
        selectedMovie: state.selectedMovie
      };
    }
    case UPDATE_MOVIE: {
      const newState = [...state.filteredMovies];
      const index = newState.findIndex(
        (movie) => movie.imdbID === payload.movieId
      );
      const currentMovie = newState[index];
      currentMovie.Title = payload.title;
      return {
        movies: state.movies,
        filteredMovies: [...newState],
        selectedMovie: state.selectedMovie
      };
    }
    case FETCH_MOVIE_ID: {
      return {
        movies: state.movies,
        filteredMovies: state.filteredMovies,
        selectedMovie: payload
      };
    }
    default:
      return state;
  }
}
