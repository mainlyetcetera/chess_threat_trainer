import React, { useState } from 'react';
import './App.css';
import { Board } from './components/Board/Board'
import chess from 'chess'

function App() {
  const [g, setG] = useState(chess.create());

  return (
    <div className="App">
      <header className="App-header">
        <>
            <Board />
        </>
      </header>
    </div>
  );
}

export default App;
