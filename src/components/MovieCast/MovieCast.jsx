import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCast } from 'components/API';
import { Loader } from 'components/Loader/Loader';
import { Notify } from 'notiflix';
const MovieCast = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [cast, setCast] = useState([]);
  const { id } = useParams(null);
  useEffect(() => {
    const getCurrentMovie = async () => {
      try {
        setIsLoading(true);
        const response = await getCast(id);
        if (response.data.cast.length === 0) {
          return Notify.failure('No casts present!');
        }
        setCast(response.data.cast);
      } catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getCurrentMovie();
  }, [id]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>An Error Occurred! {error}</p>}
      {cast.length > 0 ? (
        <ul>
          {cast.map(actor => {
            const Photo = actor.profile_path
              ? `https://image.tmdb.org/t/p/w92${actor.profile_path}`
              : 'http://dummyimage.com/92x138';
            return (
              <li key={actor.id}>
                <img src={Photo} alt="NonPhoto" />
                <p>{actor.original_name}</p>
                <p>Character: {actor.character}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No casts info present</p>
      )}
    </>
  );
};

export default MovieCast;