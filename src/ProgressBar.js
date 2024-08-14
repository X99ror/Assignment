import React from 'react';
import './ProgressBar.css';

function ProgressBar({ progress }) {
  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{ width: `${(progress / 150) * 100}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
