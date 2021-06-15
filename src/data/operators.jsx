import React from 'react';

function additionComp({ availableOperands, setOperandNames }) {
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
      style={{
        display: "flex",
        "flexDirection": "row"
      }}
    >
      <div>
        <select 
          id="0"
          onChange={updateOperand}
        >
          {
            availableOperands.map(o => <option
              value={o.id}
            >
              {o.id}
            </option>)
          }
        </select>
      </div>
      <div>+</div>
      <div>
        <select 
          id="1"
          onChange={updateOperand}
        >
          {
            availableOperands.map(o => <option>
              {o.id}
            </option>)
          }
        </select>
      </div> 
    </div>
  )
};

const addition = {
  id: "addition",
  value: "left, right => left + right",
  component: additionComp
}

const subtraction = {
  id: "subtraction",
  value: "left, right => left - right",
  component: additionComp
}



const ops = [
  addition,
  subtraction
];

export default ops;
