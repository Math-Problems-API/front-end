import React from 'react';
import SelectOperand from '../components/SelectOperand/SelectOperand';

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
          <SelectOperand 
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
          <SelectOperand 
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
