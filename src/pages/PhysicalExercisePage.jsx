import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../store/app-context';
import image from '../assets/images/active girl.png';

import { PHYSICAL_EXERCISES } from '../constants/constants';

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
  line-height: 24px;
`;

const StyledQuestion = styled.p`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.2px;
  text-align: center;
  color: #2d3436;
  margin: 15px auto;
`;

const StyledContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledTabs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledTab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 172px;
  height: 80px;
  border: 1px solid #bab6b6;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 0 15px;
  font-size: 16px;
  line-height: 22px;
  background-color: ${(props) => (props.active ? '#5fcb39' : '#fff')};
  &:hover {
    cursor: pointer;
    opacity: 0.8;
    scale: 1.1;
  }
`;

const StyledImage = styled.img`
  /* width: 30px; */
  height: 100%;
`;
const PhysicalExercisePage = () => {
  const { pickPhysicalActivities, physicalActivities } = useContext(AppContext);
  return (
    <div>
      <StyledTitle>Physical exercise</StyledTitle>
      <StyledText>
        Physical exercise means a lot for a woman who <br /> wants to lose kilos
        and works at the office
      </StyledText>
      <StyledQuestion>How active are you during the day?</StyledQuestion>
      <StyledContainer>
        <StyledImage src={image} alt='active-girl' />
        <StyledTabs>
          {PHYSICAL_EXERCISES.map((physicalActivity) => (
            <StyledTab
              active={physicalActivities === physicalActivity}
              key={physicalActivity}
              onClick={() => pickPhysicalActivities(physicalActivity)}>
              <StyledText>{physicalActivity}</StyledText>
            </StyledTab>
          ))}
        </StyledTabs>
      </StyledContainer>
    </div>
  );
};
export default PhysicalExercisePage;
