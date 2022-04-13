import { FETCH_MOVIES } from '../constants/constants';
// eslint-disable-next-line
export const fetchMovies = (movies) => ({
  type: FETCH_MOVIES,
  payload: movies
});
