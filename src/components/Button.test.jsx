import { render, fireEvent } from '@testing-library/react';
import { describe, beforeEach, it, jest, expect } from '@jest/globals';
import Button from './Button';

describe('Button', () => {
  let mockFunc, text, component;

  beforeEach(() => {
    mockFunc = jest.fn();
    text = 'Test Button';
    component = render(<Button text={text} onClick={mockFunc} />);
  });

  it('renders a button with the provided text', () => {
    component.getByText(text);
  });

  it('calls onClick function when clicked', () => {
    fireEvent.click(component.getByText(text));
    expect(mockFunc).toHaveBeenCalled();
  });
});
