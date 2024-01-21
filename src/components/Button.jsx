import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledButton = styled.button`
  margin-top: 130px;
  width: 360px;
  height: 50px;
  border: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  background-color: #5fcb39;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const Button = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
