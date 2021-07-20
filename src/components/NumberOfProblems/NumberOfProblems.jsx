import React, { useState } from 'react'

export default function NumberOfProblems({ numberOfProblemsState }) {
  const [numberOfProblems, setNumberOfProblems] = useState(10);

  const updateNumberOfProblems = ({ target }) => {
    setNumberOfProblems(Number(target.value));
  };

  return (
    <div>
      <input 
        type="number" 
        onChange={updateNumberOfProblems}
        value={numberOfProblems}
      />
    </div>
  )
}
