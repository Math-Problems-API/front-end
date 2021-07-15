import React, { useEffect, useState } from 'react';

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
    <div>
      <select 
        value={operator.id}
        onChange={updateOperatorId}
      >
        {
          operator.id === ''
          ? <option
            key="null-option"
            value=""
          >Select an Operator</option>
          : null
        }
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
