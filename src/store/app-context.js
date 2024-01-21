import { createContext } from 'react';

export const AppContext = createContext({
  goal: '',
  measures: {
    system: '',
    height: '',
    weight: '',
  },
  destructiveBehaviors: [],
  physicalActivities: '',
  pickGoal: () => {},
  pickMeasures: () => {},
  pickDestructiveBehaviors: () => {},
  pickPhysicalActivities: () => {},
});
