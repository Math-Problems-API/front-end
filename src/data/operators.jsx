import React from 'react';

const factorIntoPrimes = ({ operands }) => {
  return (
    <div>
      Factor {operands[0].html} into prime factors. 
    </div>
  )
}

const binaryOperator = symbol => {
  return ({ operands }) => {
    return (
      <div
        id="addition"
        style={{
          display: "flex",
          "flexDirection": "row"
        }}
      >
        <div>{operands[0].html}</div>
        <div>{symbol}</div>
        <div>{operands[1].html}</div>
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
