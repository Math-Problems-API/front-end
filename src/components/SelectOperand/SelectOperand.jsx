import React, { useState, useEffect } from 'react';
import hardCodedOperands from '../../data/operands';

export default function SelectOperand({ id, operandsState }) {
  const [operands, setOperands] = operandsState;

  const [availableOperands, setAvailableOperands] = useState([])

  // Make fetch to backend later
  const getAvailableOperands = () => setAvailableOperands(hardCodedOperands.map(i => i()));

  useEffect(getAvailableOperands, [])

  const updateOperand = ({ target }) => {
    setOperands(current => {
      const copy = [...current];
      const operand = availableOperands.find(o => o.id === target.value)
      copy[Number(target.id)] = operand;
      return copy;
    })
  }

  return (
    <div>
      <select 
        id={id}
        onChange={updateOperand}
        value={operands[id] || ''}
      >
        <option value={''}>
          Select an operand
        </option>
        {
          availableOperands.map((o, i) => <option
            key={i}
            value={o.id}
          >
            {o.description}
          </option>)
        }
      </select>
    </div>
  )
}
