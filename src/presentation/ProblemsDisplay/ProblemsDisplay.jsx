import React from 'react';
import './ProblemsDisplay.css';

export default function ProblemsDisplay({ clearProblems, problemsList }) {
  return (
    <div className="problems-display">
      <button
        className="clear-button"
        onClick={clearProblems}
      >Clear Problems</button>
      <ul className="problems-list">
        {problemsList}
      </ul>
    </div>
  )
}
