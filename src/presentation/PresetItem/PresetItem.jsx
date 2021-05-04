import React from 'react';
import './PresetItem.css';

export default function PresetItem({ name, query, getProblems }) {
  return (
    <li className="preset-item">
      <p>{name}</p>
      <p>{query}</p>
      <button
        id={name}
        onClick={getProblems}>
          Get Problems
      </button>
    </li>
  )
}
