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

const operands = [
  int0to100,
  int100to200,
  multiplesOfFive
]

export default operands;
