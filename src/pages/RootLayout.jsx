import { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { PATHS } from '../constants/constants';

const RootLayout = () => {
  const [activePath, setActivePath] = useState(PATHS[0]);
  const navigate = useNavigate();
  const handleNext = () => {
    const index = PATHS.indexOf(activePath);
    if (index < PATHS.length - 1) {
      setActivePath(PATHS[index + 1]);
    }
    if (index === PATHS.length - 1) {
      setActivePath(PATHS[0]);
    }
    navigate(PATHS[index + 1]);
  };
  return (
    <>
      <Link to='/'>Home</Link>
      <Outlet />
      <button onClick={handleNext}>Continue</button>
    </>
  );
};
export default RootLayout;
