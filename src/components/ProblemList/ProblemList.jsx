import React from 'react';

export default function ProblemList({ problems = [] }) {
  return (
    <ul>
      {
        problems.map(({ problem }, i) => <li key={i}>
          {problem}
        </li>)
      }
    </ul>
  )
};
