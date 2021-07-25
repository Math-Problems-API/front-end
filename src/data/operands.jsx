const propertyPresets = [
  { 
    id: "0to100",
    propertyId: "range",
    description: "More than 0, less than 100, inclusive", 
    value: [0, 100]
  },
  { 
    id: "100to200",
    propertyId: "range",
    description: "More than 100, less than 200, inclusive", 
    value: [100, 200]
  }
]

// We're doing whole constraint arrays right now, but
// presumably we could do a check box system that maybe
// even checks for conflicts
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

const randomIntComponent = ({ operandIndex, operandsState }) => {
  const [operands, setOperands] = operandsState;

  const updateProperty = propertyId => ({ target }) => {
    const updatedProperty = makeNewProp(propertyPresets.find(p => p.id === target.value))
    setOperands(updateOperandProperty({ propertyId, updatedProperty, operandIndex }));
  }

  const updateConstraints = ({ target }) => {
    const selectedConstraints = constraintPresets.find(c => c.id === target.value);

    setOperands(operands => {
      const copy = [...operands];
      copy[operandIndex].value.constraints = selectedConstraints.value;
      return copy;
    })
  }

  const selectedConstraints = constraintPresets.find(c => {
    const current = operands[operandIndex].value.constraints || [];
    return arraysContainEqualElements(c.value, current);
  })

  const availablePropertyIds = operands[operandIndex].value.properties.map(p => p.id);

  return (
    <div>
      {
        availablePropertyIds.map(id => {
          const selectedPropertyValue = operands[operandIndex]
            .value
            .properties
            .find(p => p.id === id)
            .value;

          const selectedProperty = propertyPresets.find(p => {
            return arraysContainEqualElements(p.value, selectedPropertyValue);
          });

          return <select id={id} key={id} onChange={updateProperty(id)} value={selectedProperty.id}>
            {
              propertyPresets
                .filter(p => p.propertyId === id)
                .map(p => (
                  <option 
                    id={p.id} 
                    key={p.description} 
                    value={p.id}
                  >
                    {p.description}
                  </option>
                ))
            }
          </select>
          })
      }
      <select id="constraints" onChange={updateConstraints} value={selectedConstraints.id}>
        {
          constraintPresets.map(c => <option 
            key={c.id} 
            value={c.id}
          >{c.description}</option>)
        }
      </select>
    </div>
  )
}

function getRandomIntegerWithRange() {
  return {
    id: "randomIntegerWithRange",
    description: "Random Integer",
    value: {
      name: "Random Integer with Range",
      properties: [{
        id: "range", 
        description: "", 
        value: [100, 200] 
      }],
    },
    html: randomIntComponent
  }
}

const operands = [
  getRandomIntegerWithRange
]

function updateOperandProperty({ propertyId, updatedProperty, operandIndex }) {
  return function(operands) {
    const copy = [...operands];

    const propertyIndex = copy[operandIndex]
      .value
      .properties
      .findIndex(p => p.id === propertyId);

    copy[operandIndex].value.properties[propertyIndex] = { ...updatedProperty };

    return copy;
  }
}

function makeNewProp({ propertyId, ...rest }) {
  return { ...rest, id: propertyId, }
}

function arraysContainEqualElements(one, two) {
  if(one.length !== two.length) return false;
  return one.reduce((result, item, index) => {
    if(item !== two[index]) result = false;
    return result;
  }, true)
}

export default operands;
