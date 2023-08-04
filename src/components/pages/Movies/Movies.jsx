import { useSearchParams } from 'react-router-dom';
import { getQuery } from 'components/API';
import { useEffect, useState } from 'react';
import { TrendList } from 'components/TrendList/TrendList';
import { Notify } from 'notiflix';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState('');
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const getFilms = async query => {
      try {
        setIsLoading(true);
        const data = await getQuery(query);
        if (data.results.length === 0) {
          return Notify.failure('No movies found, try something else!');
        }
        setFilms(data.results);
      } catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    const searchValue = searchParams.get('query');
    if (searchValue) {
      getFilms(searchValue);
    }
  }, [searchParams]);

  const handleSubmit = event => {
    event.preventDefault();

    if (!searchInput.trim()) {
      return Notify.failure('Input Required!');
    }
    setSearchParams({ query: searchInput.trim() });
    setSearchInput('');
  };

  return (
    <main>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {films.length > 0 && <TrendList films={films} />}
      {isLoading && <Loader />}
      {error && <p>An Error Occurred! {error}</p>}
    </main>
  );
};

export default Movies;