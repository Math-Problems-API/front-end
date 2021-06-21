import React from 'react';
import './BinaryOperator.css';

export default function BinaryOperator({ availableOperands, setOperandNames, symbol }) {
  const updateOperand = ({ target }) => {
    setOperandNames(current => {
      const copy = [...current];
      copy[Number(target.id)] = target.value;
      return copy;
    })
  }
  
  return (
    <div
      id="addition"
      className="operator"
    >
      <div>
        <select 
          id="0"
          onChange={updateOperand}
        >
          {
            availableOperands.map((o, i) => <option
              key={i}
              value={o.id}
            >
              {o.id}
            </option>)
          }
        </select>
      </div>
      <div>{symbol}</div>
      <div>
        <select 
          id="1"
          onChange={updateOperand}
        >
          {
            availableOperands.map((o, i) => <option
              key={i}
              value={o.id}
            >
              {o.id}
            </option>)
          }
        </select>
      </div> 
    </div>
  )
}
