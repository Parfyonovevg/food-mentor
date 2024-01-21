import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/';
import { describe, it, jest, expect } from '@jest/globals';
import { AppContext } from '../store/app-context';
import DestructiveBehaviorsPage from './DestructiveBehaviorsPage';
import { DESTRUCTIVE_BEHAVIORS } from '../constants/constants';

describe('DestructiveBehaviorsPage', () => {
  it('renders the title and text', () => {
    render(
      <AppContext.Provider
        value={{
          pickDestructiveBehaviors: jest.fn(),
          destructiveBehaviors: [],
        }}>
        <DestructiveBehaviorsPage />
      </AppContext.Provider>
    );

    const title = screen.getByText('Destructive behaviors');
    expect(title).toBeInTheDocument();

    const text = screen.getByText('We all have them! Which are yours?');
    expect(text).toBeInTheDocument();
  });

  it('renders the destructive behaviors', () => {
    render(
      <AppContext.Provider
        value={{
          pickDestructiveBehaviors: jest.fn(),
          destructiveBehaviors: [],
        }}>
        <DestructiveBehaviorsPage />
      </AppContext.Provider>
    );

    DESTRUCTIVE_BEHAVIORS.forEach((destructiveBehavior) => {
      const behavior = screen.getByText(destructiveBehavior.title);
      expect(behavior).toBeInTheDocument();
    });
  });

  it('calls pickDestructiveBehaviors when a behavior is clicked', () => {
    const mockPickDestructiveBehaviors = jest.fn();

    render(
      <AppContext.Provider
        value={{
          pickDestructiveBehaviors: mockPickDestructiveBehaviors,
          destructiveBehaviors: [],
        }}>
        <DestructiveBehaviorsPage />
      </AppContext.Provider>
    );

    const behavior = screen.getByText(DESTRUCTIVE_BEHAVIORS[0].title);
    fireEvent.click(behavior);

    expect(mockPickDestructiveBehaviors).toHaveBeenCalledWith(
      DESTRUCTIVE_BEHAVIORS[0].title
    );
  });
});
