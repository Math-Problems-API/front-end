import React from 'react';

export default function SelectorOperand({ id, availableOperands, operandsState }) {
  const [operandIds, setOperandIds] = operandsState;

  const updateOperand = ({ target }) => {
    setOperandIds(current => {
      const copy = [...current];
      copy[Number(target.id)] = target.value;
      return copy;
    })
  }

  return (
    <div>
      <select 
        id={id}
        onChange={updateOperand}
        value={operandIds[id]}
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
