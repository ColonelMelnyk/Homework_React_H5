import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getReviews } from 'components/API';
import { Loader } from 'components/Loader/Loader';
import { Notify } from 'notiflix';
import { ReviewList, ReviewBlock } from 'components/pages/MovieInfo/MovieStyles.styled';
const MovieReviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [reviews, setReviews] = useState([]);
  const { id } = useParams(null);
  useEffect(() => {
    const getCurrentMovie = async () => {
      try {
        setIsLoading(true);
        const response = await getReviews(id);
        setReviews(response.data.results);
        setIsLoading(false);
        if (response.data.results.length === 0) {
          return Notify.failure('No reviews found');
        }
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
      <>
        {reviews.length > 0 ? (
          <ReviewList>
            {reviews.map(review => {
              return (
                <ReviewBlock key={review.id}>
                  <h3>Author: <br></br>{review.author}</h3>
                  <p>{review.content}</p>
                </ReviewBlock>
              );
            })}
          </ReviewList>
        ) : (
          <p>There are no reviews for this movie</p>
        )}
      </>
    </>
  );
};

export default MovieReviews;