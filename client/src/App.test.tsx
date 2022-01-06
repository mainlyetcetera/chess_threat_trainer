import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Board from './components/Board';

describe('can use describe (duh...)', () => {
  test('renders a board', () => {
    render(<App />);
    const board = screen.getByText(/reached board/i);
    expect(board).toBeInTheDocument();
  });
});
