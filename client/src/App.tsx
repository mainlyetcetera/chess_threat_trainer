import React, { useEffect } from "react";
import "./App.css";
import { Board } from "./components/Board/Board";

function App() {
  useEffect(() => {
	  const m = async () => {
		  const d = await fetch('http://localhost:6942/map');
		  const r = await d.json();
		  console.log({ r });
		  return r;
	  }
	  m();
  }, []);

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
