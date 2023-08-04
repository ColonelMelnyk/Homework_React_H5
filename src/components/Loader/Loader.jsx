import { RotatingTriangles } from 'react-loader-spinner';

export const Loader = () => {
  return <RotatingTriangles
  visible={true}
  height="80"
  width="80"
  ariaLabel="rotating-triangels-loading"
  wrapperStyle={{}}
  wrapperClass="rotating-triangels-wrapper"
/>;
};