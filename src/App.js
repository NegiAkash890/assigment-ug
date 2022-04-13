import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import MovieList from './components/MovieList';
import { fetchMovies } from './redux/actions/movieActions';

const URL = 'https://www.omdbapi.com/?apikey=13c8e4f8&type=movie&s=anime';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const data = await fetch(URL)
        .then((res) => res.json())
        .then((movieData) => movieData);
      dispatch(fetchMovies(data.Search));
      return data;
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <MovieList />
    </div>
  );
}

export default App;
