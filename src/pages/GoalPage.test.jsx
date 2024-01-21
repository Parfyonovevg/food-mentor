import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, jest, expect } from '@jest/globals';
import '@testing-library/jest-dom/';
import { AppContext } from '../store/app-context';
import GoalPage from './GoalPage';
import { GOALS } from '../constants/constants';

describe('GoalPage', () => {
  it('renders the title and text', () => {
    render(
      <AppContext.Provider value={{ pickGoal: jest.fn() }}>
        <GoalPage />
      </AppContext.Provider>
    );

    const title = screen.getByText('The Goal');
    expect(title).toBeInTheDocument();

    const text1 = screen.getByText('Focus on the health benefits you need.');
    expect(text1).toBeInTheDocument();

    const text2 = screen.getByText(
      'Balanced nutrition will let you achieve them'
    );
    expect(text2).toBeInTheDocument();

    const question = screen.getByText('What are your goals?');
    expect(question).toBeInTheDocument();
  });

  it('renders the goals', () => {
    render(
      <AppContext.Provider value={{ pickGoal: jest.fn() }}>
        <GoalPage />
      </AppContext.Provider>
    );

    GOALS.forEach((goal) => {
      const goalElement = screen.getByText(goal.title);
      expect(goalElement).toBeInTheDocument();
    });
  });

  it('calls pickGoal when a goal is clicked', () => {
    const mockPickGoal = jest.fn();

    render(
      <AppContext.Provider value={{ pickGoal: mockPickGoal }}>
        <GoalPage />
      </AppContext.Provider>
    );

    const goal = screen.getByText(GOALS[0].title);
    fireEvent.click(goal);

    expect(mockPickGoal).toHaveBeenCalledWith(GOALS[0].title);
  });
});
