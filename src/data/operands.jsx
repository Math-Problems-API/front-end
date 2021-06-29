const propertyPresets = [
  { 
    id: "0to100", 
    description: "More than 0, less than 100, inclusive", 
    value: [0, 100]
  },
  { 
    id: "100to200", 
    description: "More than 100, less than 200, inclusive", 
    value: [100, 200]
  }
]

const constraintPresets = [
  {
    id: "noConstraints",
    description: "No Constraints",
    value: []
  },
  {
    id: "multipleOf5",
    description: "Multiple of 5",
    value: [
      "num => num % 5 === 0"
    ]
  },
  {
    id: "multipleOf7",
    description: "Multiple of 7",
    value: [
      "num => num % 7 === 0"
    ]
  },
  {
    id: "squareNumber",
    description: "Square Number",
    value: [
      "num => num ** 0.5 === Math.floor(num ** 0.5)"
    ]
  }
]

const randomIntComponent = ({ id, operandsState }) => {
  const [operands, setOperands] = operandsState;

  const updateProperty = ({ target }) => {
    const property = propertyPresets.find(p => p.id === target.value);

    setOperands(operands => {
      const operandIndex = Number(id);
      const copy = [...operands];
      copy[operandIndex].value.property = property;
      return copy;
    })
  }

  return (
    <div>
      &#x2124;
      <select onChange={updateProperty}>
        {
          propertyPresets.map(p => {
            return <option key={p.id} value={p.id}>{p.description}</option>
          })
        }
      </select>
    </div>
  )
}

const randomIntegerWithRange = {
  id: "randomIntegerWithRange",
  description: "Random Integer",
  value: {
    name: "Random Integer with Range",
    properties: [
      { id: "range", description: "", value: [100, 200] }
    ],
  },
  html: randomIntComponent
}

const operands = [
  randomIntegerWithRange
]

export default operands;
