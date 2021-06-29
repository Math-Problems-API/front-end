import React from 'react';

const binaryOperator = symbol => {
  return ({ operands }) => {
    const LeftOperand = operands[0].html;
    const RightOperand = operands[1].html;

    return (
      <div
        id="addition"
        style={{
          display: "flex",
          "flexDirection": "row"
        }}
      >
        <div><LeftOperand /></div>
        <div>{symbol}</div>
        <div><RightOperand /></div>
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

const factorIntoPrimesHTML = ({ operands }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row"
      }}
    >
      Factor {operands[0].html} into prime factors.
    </div>
  )
}

const factorIntoPrimes = {
  id: "factor into primes",
  value: "num => Factor num into prime factors",
  component: factorIntoPrimesHTML
}

const ops = [
  addition,
  subtraction,
  multiplication,
  factorIntoPrimes
];

export default ops;
