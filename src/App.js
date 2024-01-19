import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainPage from './pages/MainPage';
import GoalPage from './pages/GoalPage';
import MeasurePage from './pages/MeasurePage';
import DestructiveBehaviorsPage from './pages/DestructiveBehaviorsPage';
import PhysicalExercisePage from './pages/PhysicalExercisePage';
import RootLayout from './pages/RootLayout';
import { AppContext } from './store/app-context';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/goal',
        element: <GoalPage />,
      },
      {
        path: '/measure',
        element: <MeasurePage />,
      },
      {
        path: '/destructive-behavior',
        element: <DestructiveBehaviorsPage />,
      },
      {
        path: '/physical-exercise',
        element: <PhysicalExercisePage />,
      },
    ],
  },
]);

function App() {
  return (
    <AppContext.Provider>
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}

export default App;
