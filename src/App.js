import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import './App.css';

function App() {
  const [num, setNum] = useState(0);
  const [history, setHistory] = useState([]);
  const [redoHistory, setRedoHistory] = useState([]);

  const addNumber = () => {
    if (num < 150) {
      setHistory([...history, num]);
      setNum(prevNum => prevNum + 1);
      setRedoHistory([]);
    }
  };

  const subtractNumber = () => {
    if (num > 0) {
      setHistory([...history, num]);
      setNum(prevNum => prevNum - 1);
      setRedoHistory([]);
    }
  };

  const undo = () => {
    if (history.length > 0) {
      const lastNum = history[history.length - 1];
      setRedoHistory([num, ...redoHistory]);
      setHistory(history.slice(0, -1));
      setNum(lastNum);
    }
  };

  const redo = () => {
    if (redoHistory.length > 0) {
      const nextNum = redoHistory[0];
      setHistory([...history, num]);
      setRedoHistory(redoHistory.slice(1));
      setNum(nextNum);
    }
  };

  return (
    <div className="App">
      <h1 className="number-display">Number: {num}</h1>
      <div className="button-container">
        <button className="control-button" onClick={subtractNumber}>Subtract</button>
        <button className="control-button" onClick={addNumber}>Add</button>
      </div>
      <div className="undo-redo-container">
        <button className="control-button" onClick={undo}>Undo</button>
        <button className="control-button" onClick={redo}>Redo</button>
      </div>
      <ProgressBar progress={num} />
    </div>
  );
}

export default App;
