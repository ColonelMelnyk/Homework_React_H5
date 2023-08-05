import { Outlet } from 'react-router-dom';
import { NavBlock, Header, Link } from './Header.styled';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
export const MainHeader = () => {
  return (
    <Header>
      <NavBlock>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </NavBlock>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Header>
  );
};