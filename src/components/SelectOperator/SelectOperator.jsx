import React from 'react';
import operators from '../../data/operators';

export default function SelectOperator({ operatorState }) {
  const [operatorId, setOperatorId] = operatorState;

  const updateOperatorId = ({ target }) => {
    setOperatorId(target.value)
  }

  return (
    <div>
      <select 
        value={operatorId}
        onChange={updateOperatorId}
      >
        {
          operators.map(op => <option
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
