import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/';

import { describe, it, expect } from '@jest/globals';
import MainPage from './MainPage';

describe('MainPage', () => {
  it('renders the title', () => {
    render(<MainPage />);

    const title = screen.getByText('Home Page');
    expect(title).toBeInTheDocument();
  });
});
