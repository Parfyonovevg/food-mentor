import { render, fireEvent, screen } from '@testing-library/react';
import { describe, it, expect, jest } from '@jest/globals';
import '@testing-library/jest-dom/';
import { AppContext } from '../store/app-context';
import { StyledTab } from './MeasurePage';
import MeasurePage from './MeasurePage';

describe('MeasurePage', () => {
  it('renders with correct background color when active', () => {
    const { container } = render(<StyledTab active />);
    expect(container.firstChild).toHaveStyle('background-color: #5fcb39');
  });

  it('renders with correct background color when not active', () => {
    const { container } = render(<StyledTab />);
    expect(container.firstChild).toHaveStyle('background-color: #fff');
  });
  it('should change metric selection correctly', () => {
    render(<MeasurePage />);
    const impTab = screen.getByText('IMPERIAL');
    const metrTab = screen.getByText('METRIC');
    fireEvent.click(metrTab);
    expect(impTab).not.toHaveStyle('background-color: #5fcb39');
    expect(metrTab).toHaveStyle('background-color: #5fcb39');
  });
  it('should call pickMeasures with updated weight when weight input changes', () => {
    const mockPickMeasures = jest.fn();
    const measures = { height: '', weight: '' };

    render(
      <AppContext.Provider value={{ measures, pickMeasures: mockPickMeasures }}>
        <MeasurePage />
      </AppContext.Provider>
    );

    fireEvent.change(screen.getByPlaceholderText('Current Weight (ft)'), {
      target: { value: '70' },
    });
    expect(mockPickMeasures).toHaveBeenCalledWith({
      ...measures,
      weight: '70',
    });
  });
});
