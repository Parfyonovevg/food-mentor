import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../store/app-context';
import { GOALS } from '../constants/constants';

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
const StyledQuestion = styled.p`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.2px;
  text-align: center;
  color: #2d3436;
  margin: 15px auto;
`;

const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 16px;
`;

const StyledGridItem = styled.div`
  display: flex;
  gap: 24px;
  justify-content: space-between;
  align-items: center;
  width: 172px;
  height: 172px;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 0.2px;
  line-height: 23px;
  background-color: #a28383;
  padding: 0 10px;
  border-radius: 20px;
  overflow: hidden;
  background: linear-gradient(
    to bottom,
    rgba(173, 216, 230, 0.5),
    rgba(255, 255, 255, 0.5)
  );
  &:hover {
    cursor:pointer;
    scale: 1.1;
  }
`;
const StyledImage = styled.img`
  height: 100%;
`;

const GoalPage = () => {
  const { pickGoal } = useContext(AppContext);

  return (
    <div>
      <StyledTitle>The Goal</StyledTitle>
      <StyledText>Focus on the health benefits you need.</StyledText>
      <StyledText>Balanced nutrition will let you achieve them</StyledText>
      <StyledQuestion>What are your goals?</StyledQuestion>
      <StyledGridContainer>
        {GOALS.map((goal) => (
          <StyledGridItem key={goal.title} onClick={() => pickGoal(goal.title)}>
            {goal.title}
            <StyledImage src={goal.img} alt={goal.title} />
          </StyledGridItem>
        ))}
      </StyledGridContainer>
    </div>
  );
};
export default GoalPage;
