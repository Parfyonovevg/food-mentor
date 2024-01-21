import { describe, it, expect, jest } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/';
import Header from './Header';

describe('Header', () => {
  it('renders the logo', () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders the title', () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    const title = screen.getByText('Food Mentor');
    expect(title).toBeInTheDocument();
  });

  it('renders the link to home', () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    const linkElement = screen.getByRole('link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute('href')).toBe('/');
  });
  it('should call moveHome when clicked', () => {
    const mockMoveHome = jest.fn();

    const { getByRole } = render(
      <Router>
        <Header moveHome={mockMoveHome} />
      </Router>
    );

    fireEvent.click(getByRole('link'));
    expect(mockMoveHome).toHaveBeenCalled();
  });
});
