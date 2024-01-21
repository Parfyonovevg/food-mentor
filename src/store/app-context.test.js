import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/';
import { describe, it, jest, expect } from '@jest/globals';
import { AppContext } from './app-context';

// Mock component to simulate context usage
const MockComponent = () => {
  return (
    <AppContext.Consumer>
      {(context) => (
        <div>
          <span data-testid='goal'>{context.goal}</span>
          <button
            data-testid='pickGoal'
            onClick={() => context.pickGoal('New Goal')}>
            Pick Goal
          </button>
        </div>
      )}
    </AppContext.Consumer>
  );
};

describe('AppContext', () => {
  it('should update goal when pickGoal is called', () => {
    const mockPickGoal = jest.fn();
    const { getByTestId } = render(
      <AppContext.Provider value={{ goal: 'Old Goal', pickGoal: mockPickGoal }}>
        <MockComponent />
      </AppContext.Provider>
    );

    fireEvent.click(getByTestId('pickGoal'));
    expect(mockPickGoal).toHaveBeenCalledWith('New Goal');
  });

  it('should display the correct goal', () => {
    const { getByTestId } = render(
      <AppContext.Provider value={{ goal: 'Test Goal', pickGoal: () => {} }}>
        <MockComponent />
      </AppContext.Provider>
    );

    expect(getByTestId('goal').textContent).toBe('Test Goal');
  });
  it('should update the goal when pickGoal is called', () => {
    const mockContext = { goal: 'Old Goal' };
    mockContext.pickGoal = function (newGoal) {
      this.goal = newGoal;
    };

    const { getByTestId, rerender } = render(
      <AppContext.Provider value={mockContext}>
        <MockComponent />
      </AppContext.Provider>
    );

    fireEvent.click(getByTestId('pickGoal'));
    rerender(
      <AppContext.Provider value={mockContext}>
        <MockComponent />
      </AppContext.Provider>
    );

    expect(getByTestId('goal').textContent).toBe('New Goal');
  });
});

describe('AppContext', () => {
  const MockComponent = () => {
    return (
      <AppContext.Consumer>
        {(context) => (
          <div>
            <button
              data-testid='pickGoal'
              onClick={() => context.pickGoal('New Goal')}>
              Pick Goal
            </button>
            <button
              data-testid='pickMeasures'
              onClick={() => context.pickMeasures('New Measures')}>
              Pick Measures
            </button>
          </div>
        )}
      </AppContext.Consumer>
    );
  };
  it('should call pickGoal when button is clicked', () => {
    const mockPickGoal = jest.fn();
    const { getByTestId } = render(
      <AppContext.Provider value={{ pickGoal: mockPickGoal }}>
        <MockComponent />
      </AppContext.Provider>
    );

    fireEvent.click(getByTestId('pickGoal'));
    expect(mockPickGoal).toHaveBeenCalledWith('New Goal');
  });

  it('should call pickMeasures when button is clicked', () => {
    const mockPickMeasures = jest.fn();
    const { getByTestId } = render(
      <AppContext.Provider value={{ pickMeasures: mockPickMeasures }}>
        <MockComponent />
      </AppContext.Provider>
    );

    fireEvent.click(getByTestId('pickMeasures'));
    expect(mockPickMeasures).toHaveBeenCalledWith('New Measures');
  });
});
