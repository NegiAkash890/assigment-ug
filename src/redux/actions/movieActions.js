import {
  DELETE_MOVIE,
  FETCH_MOVIES,
  FETCH_MOVIE_ID,
  REMOVE_SELECTED_MOVIE,
  UPDATE_MOVIE,
  SORT_MOVIE_BY_TITLE
} from '../constants/constants';

const URL = 'https://www.omdbapi.com/?apikey=8c2e8707';
const URL2 = 'http://www.omdbapi.com/?apikey=8c2e8707&i=';

export const fetchMovies = (type = 'anime') => async (dispatch) => {
  const data = await fetch(`${URL}&s=${type}`)
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

export const sortMoviesByTitle = (order) => ({
  type: SORT_MOVIE_BY_TITLE,
  payload: order
});
