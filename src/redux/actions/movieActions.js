import {
  DELETE_MOVIE,
  FETCH_MOVIES,
  FETCH_MOVIE_ID,
  REMOVE_SELECTED_MOVIE,
  UPDATE_MOVIE
} from '../constants/constants';

const URL = 'https://www.omdbapi.com/?apikey=8c2e8707&type=movie&s=anime';
const URL2 = 'http://www.omdbapi.com/?apikey=8c2e8707&i=';

export const fetchMovies = () => async (dispatch) => {
  const data = await fetch(URL)
    .then((res) => res.json())
    .then((movieData) => movieData);
  dispatch({ type: FETCH_MOVIES, payload: data.Search });
};

export const fetchMovieById = (id) => async (dispatch) => {
  const data = await fetch(`${URL2}${id}`)
    .then((res) => res.json())
    .then((movieData) => movieData);
  dispatch({ type: FETCH_MOVIE_ID, payload: data });
};

export const removeSelectedMovie = () => ({
  type: REMOVE_SELECTED_MOVIE,
  payload: {}
});
export const deleteMovieById = (id) => ({
  type: DELETE_MOVIE,
  payload: id
});

export const updateMovieById = (data) => ({
  type: UPDATE_MOVIE,
  payload: data
});
