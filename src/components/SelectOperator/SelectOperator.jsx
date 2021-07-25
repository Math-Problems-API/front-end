import React, { useEffect, useState } from 'react';
import NullOption from '../NullOption/NullOption';

export default function SelectOperator({ operatorState }) {
  const [operator, setOperator] = operatorState;
  const [availableOperators, setAvailableOperators] = useState([])

  const updateOperatorId = ({ target }) => {
    const operator = availableOperators.find(o => o.id === target.value)
    setOperator(operator);
  }

  useEffect(() => {
    const query = `{
      availableOperators {
        name
        value
        view
      }
    }`

    fetch('http://localhost:7890/gql', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ query })
    })
      .then(res => res.json())
      .then(json => {
        return json.data.availableOperators.map(({ name, ...rest }) => {
          return { id: name, ...rest }
        })
      })
      .then(setAvailableOperators)
  }, [])

  return (
    <select 
      value={operator.id}
      onChange={updateOperatorId}
    >
      <NullOption nullSwitch={operator.id === ''}>
        Select an Operator
      </NullOption>
      {
        availableOperators.map(op => <option
          key={op.id}
          value={op.id}
        >
          {op.id}
        </option>)
      }
    </select>
  )
}
