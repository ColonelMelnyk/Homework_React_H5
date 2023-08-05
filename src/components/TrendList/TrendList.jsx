import { Link, useLocation } from 'react-router-dom';
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
