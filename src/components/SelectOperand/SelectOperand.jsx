import React from 'react';

export default function SelectOperand({ id, operandsState, availableOperands }) {
  const [operands, setOperands] = operandsState;

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
        value={operands[id]}
      >
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
