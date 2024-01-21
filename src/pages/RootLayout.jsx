import { useState } from 'react';
import styled from 'styled-components';

import { Outlet, useNavigate } from 'react-router-dom';
import { PATHS } from '../constants/constants';
import Info from '../components/Info';
import Header from '../components/Header';
import Button from '../components/Button';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
  gap: 10px;
`;

const RootLayout = () => {
  const [activePath, setActivePath] = useState(PATHS[0]);
  const navigate = useNavigate();
  const nextPageHandler = () => {
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
    <StyledContainer>
      <Header />
      <Outlet />
      <Button text='Continue' onClick={nextPageHandler}></Button>
      <Info />
    </StyledContainer>
  );
};
export default RootLayout;
