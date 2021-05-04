import React from 'react';
import './ProblemItem.css';

export default function ProblemItem({ problem, solution }) {
  return (
    <li className="problem-item">
      <p>{problem}</p>
      <p>{solution}</p>
    </li>
  )
}
