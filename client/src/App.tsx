import React, { useState } from "react";
import "./App.css";
import { Board } from "./components/Board/Board";
import { Chess } from "chess.js";

function App() {
  const [g, setG] = useState(new Chess());

  console.log({ g });

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
