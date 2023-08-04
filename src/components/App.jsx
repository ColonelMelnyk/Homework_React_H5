import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import { MainHeader } from './Header/Header';
const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const MovieInfo = lazy(() => import('./pages/MovieInfo/MovieInfo'));
const MovieCast = lazy(() => import('./MovieCast/MovieCast'));
const MovieReview = lazy(() => import('./MovieReviews/MovieReviews'));
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainHeader />}>
        <Route index element={<Home />}></Route>
        <Route path="movies" element={<Movies />}></Route>
        <Route path="movies/:id" element={<MovieInfo />}>
          <Route path="cast" element={<MovieCast />}></Route>
          <Route path="reviews" element={<MovieReview />}></Route>
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};