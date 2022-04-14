import {
  DELETE_MOVIE,
  FETCH_MOVIES,
  FETCH_MOVIE_ID,
  UPDATE_MOVIE,
  REMOVE_SELECTED_MOVIE,
  SORT_MOVIE_BY_TITLE
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
        movies: payload !== undefined ? [...payload] : [],
        filteredMovies: payload !== undefined ? [...payload] : [],
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
    case REMOVE_SELECTED_MOVIE: {
      return {
        movies: state.movies,
        filteredMovies: state.filteredMovies,
        selectedMovie: payload
      };
    }
    case SORT_MOVIE_BY_TITLE: {
      const newState = [...state.filteredMovies];
      let dummyState = [];
      /* eslint-disable */
      dummyState = newState.sort((movieA, movieB) => {
        let movieATitle = movieA.Title.split(' ').join('');
        let movieBTitle = movieB.Title.split(' ').join('');
        return movieATitle.localeCompare(movieBTitle);
      });
      if (payload === 'DESCEND') {
        dummyState.reverse();
      }
      return {
        movies: state.movies,
        filteredMovies: dummyState,
        selectedMovie: state.selectedMovie
      };
    }
    default:
      return state;
  }
}
