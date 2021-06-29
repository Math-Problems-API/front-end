const int100to200 = {
  id: "int100to200",
  description: "Integer; inbetween 100 and 200",
  value: {
    name: "Random Integer with Range",
    properties: [
      { value: [100, 200] }
    ],
  },
  html: <div>&#x2124;</div>
}

const int0to100 = {
  id: "int0to100",
  description: "Integer; inbetween 0 and 100",
  value: {
    name: "Random Integer with Range",
    properties: [
      { value: [0, 100] }
    ],
  },
  html: <div>&#x2124;</div>
}

const multiplesOfFive = {
  id: "multiplesOfFive",
  description: "Integer; multiple of 5",
  value: {
    name: "Random Integer with Range",
    properties: [
      { value: [0, 100] }
    ],
    constraints: [
      "num => num % 5 === 0"
    ],
  },
  html: <div>&#x2124;</div>
}

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

const operands = [
  int0to100,
  int100to200,
  multiplesOfFive
]

export default operands;
