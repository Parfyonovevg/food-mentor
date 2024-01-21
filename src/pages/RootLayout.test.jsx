import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/';
import { BrowserRouter as Router } from 'react-router-dom';

import { describe, it, expect } from '@jest/globals';
import RootLayout from './RootLayout';

describe('RootLayout', () => {
  // Renders Header, Outlet, Button and Info components
  it('should render all components', async () => {
    render(
      <Router>
        <RootLayout />
      </Router>
    );

    let element = await screen.findByText(/food mentor/i);
    expect(element).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /Continue/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Info/i })).toBeInTheDocument();
  });

  it('should navigate to the next path when Continue button is clicked', () => {
    const { getByText } = render(
      <Router>
        <RootLayout />
      </Router>
    );

    const continueButton = getByText('Continue');
    fireEvent.click(continueButton);

    // Replace '/next-path' with the expected path after clicking the Continue button
    expect(window.location.pathname).toBe('/goal');
  });
});
