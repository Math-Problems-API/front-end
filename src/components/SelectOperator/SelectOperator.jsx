import React from 'react';
import availableOperators from '../../data/operators';

export default function SelectOperator({ operatorState, setNumberOfOperands }) {
  const [operator, setOperator] = operatorState;

  const updateOperatorId = ({ target }) => {
    const operator = availableOperators.find(o => o.id === target.value)
    setOperator(operator);
  }

  return (
    <div>
      <select 
        value={operator.id}
        onChange={updateOperatorId}
      >
        {
          availableOperators.map(op => <option
            key={op.id}
            value={op.id}
          >
            {op.id}
          </option>)
        }
      </select>
    </div>
  )
}
