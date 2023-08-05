import { useEffect, useState } from 'react';
import { getMovies } from 'API';
import { TrendList } from 'components/TrendList/TrendList';
import { Loader } from 'components/Loader/Loader';
import { Notify } from 'notiflix';
import { TrendingTitle } from './Home.styled';
const Home = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    try {
      const fetchMovies = async () => {
        const response = await getMovies();
        const movies = response.results;
        if (movies.length === 0) {
          return Notify.failure('Oops.. Simesing went wrong');
        }
        setFilms(movies);
      };
      fetchMovies();
    } catch (error) {
      setError(true);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <main>
      < TrendingTitle>Trending today</ TrendingTitle>
      {films.length > 0 && <TrendList films={films} />}
      {isLoading && <Loader />}
      {error && <p>An Error Occurred! {error}</p>}
    </main>
  );
};

export default Home;