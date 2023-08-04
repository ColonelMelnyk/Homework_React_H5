import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { TrendingList, TrendingMember } from 'components/pages/Home/Home.styled';
export const TrendList = ({ films }) => {
  const location = useLocation();

  return (
    <TrendingList>
      {films.map(film => {
        return (
          <TrendingMember key={film.id}>
            <Link to={`/movies/${film.id}`} state={{ from: location }}>
              {film.title || film.name || film.original_title}
            </Link>
          </TrendingMember>
        );
      })}
    </TrendingList>
  );
};

TrendList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
      original_title: PropTypes.string,
    })
  ).isRequired,
};