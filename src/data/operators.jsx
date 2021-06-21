import React from 'react';

const binaryOperator = symbol => {
  return ({ availableOperands, operandsState, operandsHTML }) => {
    const [operandIds, setOperandIds] = operandsState;

    const updateOperand = ({ target }) => {
      setOperandIds(current => {
        const copy = [...current];
        copy[Number(target.id)] = target.value;
        return copy;
      })
    }
    
    return (
      <div
        id="addition"
        style={{
          display: "flex",
          "flexDirection": "row"
        }}
      >
        <div>
          <select 
            id="0"
            onChange={updateOperand}
            value={operandIds[0]}
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
          <div>
            {operandsHTML[0]}
          </div>
        </div>
        <div>{symbol}</div>
        <div>
          <select 
            id="1"
            onChange={updateOperand}
            value={operandIds[1]}
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
