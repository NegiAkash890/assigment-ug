import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import MovieList from './components/MovieList';
import { fetchMovies } from './redux/actions/movieActions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <div className="App">
      <Header />
      <MovieList />
    </div>
  );
}

export default App;
