import React from 'react'

export default function ProblemsDisplay({ clearProblems, problemsList }) {
  return (
    <>
      <button
        onClick={clearProblems}
      >Clear Problems</button>
      <ul>
        {problemsList}
      </ul>
    </>
  )
}
