import React from 'react'

export default function NumberOfProblems({ numberOfProblemsState }) {
  const [numberOfProblems, setNumberOfProblems] = numberOfProblemsState;

  const updateNumberOfProblems = ({ target }) => {
    setNumberOfProblems(Number(target.value));
  };

  return (
    <div>
      <label htmlFor="number-of-problems">Number of problems: </label>
      <input 
        id="number-of-problems"
        type="number" 
        onChange={updateNumberOfProblems}
        value={numberOfProblems}
      />
    </div>
  )
}
