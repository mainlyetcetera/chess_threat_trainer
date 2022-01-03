import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('can use describe (duh...)', () => {
  test('renders first test element', () => {
    render(<App />);
    const testElement = screen.getByText(/find this/i);
    expect(testElement).toBeInTheDocument();
  });
});
