import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Header from './components/Header';
import Movie from './components/Movie';
import Footer from './components/Footer';
import { setMovies, setLoading, setError, setQuery } from './store/action';

const App = () => {
  const dispatch = useDispatch();
  const { movies, query, loading, error } = useSelector((state) => state.movie);

  const apikey = import.meta.env.VITE_MOVIE_API;

  const fetchMovies = async (searchQuery = '') => {
    dispatch(setLoading(true));
    dispatch(setError(null));

    try {
      const response = await axios.get(
        searchQuery
          ? `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${searchQuery}`
          : `https://api.themoviedb.org/3/trending/all/day?api_key=${apikey}`
      );
      dispatch(setMovies(response.data.results));
    } catch (err) {
      dispatch(setError('Something went wrong while fetching data.'));
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    fetchMovies(query);
  }, [query]);

  const handleSearch = (searchQuery) => {
    dispatch(setQuery(searchQuery));
  };

  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
      <Header title="MoaLand" onSearch={handleSearch} />

      <main className="flex-grow-1">
        <div className="container mt-4">
          {loading && <div className="alert alert-info">Loading...</div>}
          {error && <div className="alert alert-danger">{error}</div>}

          <div className="mx-auto mt-4">
            <div className="row">
              {movies.length > 0 ? (
                movies.map((movie) => (
                  <div key={movie.id} className="col-6 col-xs-5 col-sm-4 col-md-3 col-lg-2 col-xl-2 mb-3 p-2">
                    <Movie movie={movie} />
                  </div>
                ))
              ) : (
                !loading && !error && <p>No movies found</p>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default App;
