import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/images/icons/Icon - 1.png';

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 10px;
  gap: 10px;
  font-size: 18px;  
  font-weight:600;
`;

const Header = () => {
  return (
    <Link to='/'>
      <StyledHeader>
        <span>&lt;</span>
        <img src={logo} alt='logo'></img>
        <span>Food Mentor</span>
      </StyledHeader>
    </Link>
  );
};
export default Header;
