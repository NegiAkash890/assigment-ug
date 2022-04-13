import { FETCH_MOVIES } from '../constants/constants';

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
        filteredMovies: [...payload]
      };
    default:
      return state;
  }
}
