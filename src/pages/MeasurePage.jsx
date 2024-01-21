import { useContext, useState } from 'react';
import styled from 'styled-components';
import { AppContext } from '../store/app-context';

const StyledInput = styled.input`
  width: 360px;
  height: 64px;
  border-radius: 10px;
  padding-left: 15px;
  margin-bottom: 10px;
  display: block;
  font-size: 14px;
  color: #2d3436;
`;

const StyledTabs = styled.div`
  display: flex;
  width: 360px;
  height: 32px;
  border: 1px solid #5fcb39;
  border-radius: 10px;
  margin-bottom: 10px;
  overflow: hidden;
  color: #5fcb39;
`;
const StyledTab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 50%;
  background-color: ${(props) => (props.active ? '#5fcb39' : '#fff')};
  color: ${(props) => (props.active ? '#fff' : '#5fcb39')};
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

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

const MeasurePage = () => {
  const [metric, setMetric] = useState('imp');
  const { measures, pickMeasures } = useContext(AppContext);
  const setHeightHandler = (e) => {
    pickMeasures({ ...measures, height: e.target.value });
  };
  const setWeightHandler = (e) => {
    console.log(e.target.value);
    pickMeasures({ ...measures, weight: e.target.value });
  };
  console.log(measures);
  return (
    <div>
      <StyledTitle>Measure Yourself</StyledTitle>
      <StyledText>What are your height and body weight</StyledText>
      <StyledTabs>
        <StyledTab active={metric === 'imp'} onClick={() => setMetric('imp')}>
          IMPERIAL
        </StyledTab>
        <StyledTab active={metric === 'metr'} onClick={() => setMetric('metr')}>
          METRIC
        </StyledTab>
      </StyledTabs>
      <StyledInput
        type='number'
        onChange={setHeightHandler}
        placeholder={`Height ${
          metric === 'imp' ? '(ft)' : '(cm)'
        }`}></StyledInput>
      <StyledInput
        type='number'
        onChange={setWeightHandler}
        placeholder={`Current Weight ${
          metric === 'imp' ? '(ft)' : '(kg)'
        }`}></StyledInput>
    </div>
  );
};
export default MeasurePage;
