import React from 'react';
import SelectorOperand from '../components/SelectorOperand/SelectorOperand';

const binaryOperator = symbol => {
  return ({ availableOperands, operandsState, operandsHTML }) => {
    return (
      <div
        id="addition"
        style={{
          display: "flex",
          "flexDirection": "row"
        }}
      >
        <div>
          <SelectorOperand 
            id={0}
            availableOperands={availableOperands}
            operandsState={operandsState}
          />
          <div>
            {operandsHTML[0]}
          </div>
        </div>
        <div>{symbol}</div>
        <div>
          <SelectorOperand 
            id={1}
            availableOperands={availableOperands}
            operandsState={operandsState}
          />
          <div>
            {operandsHTML[1]}
          </div>
        </div> 
      </div>
    )
  }
};

const addition = {
  id: "addition",
  value: "left, right => left + right",
  component: binaryOperator('+')
}

const subtraction = {
  id: "subtraction",
  value: "left, right => left - right",
  component: binaryOperator('-')
}

const multiplication = {
  id: "multiplication",
  value: "left, right => left * right",
  component: binaryOperator('*')
}

const ops = [
  addition,
  subtraction,
  multiplication
];

export default ops;
