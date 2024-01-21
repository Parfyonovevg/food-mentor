import { RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import router from './routes';
import { AppContext } from './store/app-context';

function App() {
  const [goal, setGoal] = useState('');
  const [measures, setMeasures] = useState({
    system: '',
    height: '',
    weight: '',
  });
  const [destructiveBehaviors, setDestructiveBehaviors] = useState([]);
  const [physicalActivities, setPhysicalActivities] = useState('');

  const pickGoal = (goal) => {
    setGoal(goal);
  };

  const pickMeasures = (measures) => {
    setMeasures(measures);
  };

  const pickDestructiveBehaviors = (destructiveBehavior) => {
    if (destructiveBehavior === 'None of the above') {
      setDestructiveBehaviors(['None of the above']);
    } else if (destructiveBehaviors.includes('None of the above')) {
      setDestructiveBehaviors([destructiveBehavior]);
    } else if (destructiveBehaviors.includes(destructiveBehavior)) {
      setDestructiveBehaviors(
        destructiveBehaviors.filter((item) => item !== destructiveBehavior)
      );
    } else {
      setDestructiveBehaviors([...destructiveBehaviors, destructiveBehavior]);
    }
  };

  const pickPhysicalActivities = (physicalActivities) => {
    setPhysicalActivities(physicalActivities);
  };

  const contextValues = {
    goal,
    measures,
    destructiveBehaviors,
    physicalActivities,
    pickGoal,
    pickMeasures,
    pickDestructiveBehaviors,
    pickPhysicalActivities,
  };

  return (
    <AppContext.Provider value={contextValues}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}

export default App;
