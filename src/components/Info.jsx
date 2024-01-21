import { useContext } from 'react';

import { AppContext } from '../store/app-context';

const Info = () => {
  const { goal, measures, destructiveBehaviors, physicalActivities } =
    useContext(AppContext);

  return (
    <div>
      <h3>Info</h3>
      <p>GOAL: {goal}</p>
      <p>HEIGHT: {measures.height}</p>
      <p>WEIGHT: {measures.weight}</p>
      <p>DESTRUCTIVE BEHAVIORS: {destructiveBehaviors.join(', ')}</p>
      <p>PHYSICAL ACTIVITIES: {physicalActivities}</p>
    </div>
  );
};
export default Info;
