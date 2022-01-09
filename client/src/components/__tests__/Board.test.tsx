import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils, { act } from 'react-dom/test-utils';
import Board from '../Board/Board';

describe('the board', () => {
  // TODO: change from any type
  let container: any

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    document.body.removeChild(container)
    container = null
  })

  test('renders Info', () => {
    act(() => {
      ReactDOM.render(<Board />, container)
    })

    const board = container.querySelector('div')
    expect(board.textContent).toEqual('87654321abcdefgh');
  })
})
