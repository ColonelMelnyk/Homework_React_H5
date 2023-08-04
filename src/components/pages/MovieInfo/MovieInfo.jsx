import { getMovieId } from 'components/API';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams, Link } from 'react-router-dom';
import { MovieDetail, BackButton, MoreInfo } from './MovieStyles.styled';
import { Loader } from 'components/Loader/Loader';
import { Notify } from 'notiflix';

const MovieInfo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  const [currentMovie, setCurrentMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getCurrentMovie = async () => {
      try {
        setIsLoading(true);
        const response = await getMovieId(id);
        if (response.data.length === null) {
          return Notify.failure('Oops.. Simesing went wrong');
        }
        setCurrentMovie(response.data);
      } catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getCurrentMovie();
  }, [id]);

  const posterUrl = currentMovie?.poster_path
    ? `https://image.tmdb.org/t/p/w200${currentMovie.poster_path}`
    : 'https://placehold.it/200x300';

  const userScore = currentMovie ? currentMovie.vote_average * 10 : null;

  return (
    <main>
      {isLoading && <Loader />}
      {error && <p>An Error Occurred! {error}</p>}
      <BackButton to={backLinkLocationRef.current}>Go Back</BackButton>
      {currentMovie && (
        <>
          <MovieDetail>
            <img src={posterUrl} alt="error" />
            <div>
              <h2>{currentMovie.original_title}</h2>
              <p>User Score: {userScore}%</p>
              <h2>Overview</h2>
              <p>{currentMovie.overview ?? 'There is no review'}</p>
              <h2>Genres</h2>
              <p>{currentMovie.genres.map(genre => genre.name).join(', ')}</p>
            </div>
          </MovieDetail>
          <MoreInfo>
            <h2>Additional Information</h2>
            <ul>
              <li>
                <Link to={'cast'}>Cast</Link>
              </li>
              <li>
                <Link to={'reviews'}>Reviews</Link>
              </li>
            </ul>
          </MoreInfo>
        </>
      )}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieInfo;