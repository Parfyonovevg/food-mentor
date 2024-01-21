
import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../store/app-context';
import { DESTRUCTIVE_BEHAVIORS } from '../constants/constants';

const StyledTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.25px;
`;
const StyledText = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #616161;
  text-align: center;
  letter-spacing: 0.25px;
`;

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 16px;
`;
const StyledGridItem = styled.div`
  width: 172px;
  height: 60px;
  border: 1px solid #bab6b6;
  border-radius: 15px;
  display: flex;
  gap: 5px;
  padding: 0 15px;
  align-items: center;
  background-color: ${(props) => (props.active ? '#5fcb39' : '#fff')};
  &:hover {
    cursor: pointer;
    opacity: 0.8;
    scale: 1.1;
  }
`;
const StyledIcon = styled.img`
  width: 30px;
  height: 30px;
`;
const DestructiveBehaviorsPage = () => {
  const { pickDestructiveBehaviors, destructiveBehaviors } =
    useContext(AppContext);
  return (
    <div>
      <StyledTitle>Destructive behaviors</StyledTitle>
      <StyledText>We all have them! Which are yours?</StyledText>
      <StyledContainer>
        {DESTRUCTIVE_BEHAVIORS.map((destructiveBehavior) => (
          <StyledGridItem
            active={destructiveBehaviors.includes(destructiveBehavior.title)}
            key={destructiveBehavior.title}
            onClick={() => pickDestructiveBehaviors(destructiveBehavior.title)}>
            <StyledIcon src={destructiveBehavior.img} />
            <StyledText>{destructiveBehavior.title}</StyledText>
          </StyledGridItem>
        ))}
      </StyledContainer>
    </div>
  );
};
export default DestructiveBehaviorsPage;
