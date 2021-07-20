import React, { useState, useEffect } from 'react';
import hardCodedOperands from '../../data/operands';
import NullOption from '../NullOption/NullOption';

export default function SelectOperand({ id, operandsState }) {
  const [operands, setOperands] = operandsState;

  const [availableOperands, setAvailableOperands] = useState([]);

  const OperandComponent = operands[id] ? operands[id].html : <div></div>

  // Make fetch to backend later
  const getAvailableOperands = () => setAvailableOperands(hardCodedOperands.map(i => i()));

  useEffect(getAvailableOperands, [])

  const updateOperand = ({ target }) => {
    setOperands(current => {
      const copy = [...current];
      const operand = availableOperands.find(o => o.id === target.value)
      copy[Number(id)] = operand;
      return copy;
    })
  }

  return (
    <div id={`operand-${id}`} className="operand">
      <select 
        id={id}
        onChange={updateOperand}
        value={operands[id]?.id ?? ''}
      >
        <NullOption nullSwitch={operands[id]?.id === undefined}>
          Select an operand
        </NullOption>
        {
          availableOperands.map((o, i) => <option
            key={i}
            value={o.id}
          >
            {o.description}
          </option>)
        }
      </select>
      {
        operands[id]
        ? <OperandComponent operandIndex={id} operandsState={operandsState}/>
        : ''
      }
    </div>
  )
}
