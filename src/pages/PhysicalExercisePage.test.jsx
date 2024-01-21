import { render, screen } from '@testing-library/react';
import { describe, it, jest, expect } from '@jest/globals';
import '@testing-library/jest-dom/';

import { AppContext } from '../store/app-context';
import PhysicalExercisePage from './PhysicalExercisePage';
import { PHYSICAL_EXERCISES } from '../constants/constants';

describe('PhysicalExercisePage', () => {
  it('renders the title and text', () => {
    render(
      <AppContext.Provider
        value={{ pickPhysicalExercise: jest.fn(), physicalExercises: [] }}>
        <PhysicalExercisePage />
      </AppContext.Provider>
    );

    const title = screen.getByText('Physical exercises');
    expect(title).toBeInTheDocument();

    const text = screen.getByText('How active are you during the day?');
    expect(text).toBeInTheDocument();
  });

  it('renders the physical exercises', () => {
    render(
      <AppContext.Provider
        value={{ pickPhysicalExercise: jest.fn(), physicalExercises: [] }}>
        <PhysicalExercisePage />
      </AppContext.Provider>
    );

    PHYSICAL_EXERCISES.forEach((exercise) => {
      const exerciseElement = screen.getByText(exercise);
      expect(exerciseElement).toBeInTheDocument();
    });
  });
  it('should render an image', () => {
    render(<PhysicalExercisePage />);

    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });
});
