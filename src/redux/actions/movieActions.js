import {
  DELETE_MOVIE,
  FETCH_MOVIES,
  FETCH_MOVIE_ID,
  REMOVE_SELECTED_MOVIE,
  UPDATE_MOVIE,
  SORT_MOVIE_BY_TITLE
} from '../constants/constants';

const baseURL = process.env.REACT_APP_BASEURL;
const URL = `${baseURL}?apikey=${process.env.REACT_APP_APIKEY}`;

export const fetchMovies = (type = 'anime') => async (dispatch) => {
  const data = await fetch(`${URL}&s=${type}`)
    .then((res) => res.json())
    .then((movieData) => movieData);
  dispatch({ type: FETCH_MOVIES, payload: data.Search });
};

export const fetchMovieById = (id) => async (dispatch) => {
  const data = await fetch(`${URL}&i=${id}`)
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

export const sortMoviesByTitle = (order) => ({
  type: SORT_MOVIE_BY_TITLE,
  payload: order
});
