const int100to200String = "100 < x < 200"

const int100to200 = {
  id: "int100to200",
  value: {
    name: "Random Integer with Range",
    properties: [
      { value: [100, 200] }
    ],
  },
  html: <div>{int100to200String}</div>
}

const int0to100String = "0 < x < 100"

const int0to100 = {
  id: "int0to100",
  value: {
    name: "Random Integer with Range",
    properties: [
      { value: [0, 100] }
    ],
  },
  html: <div>{int0to100String}</div>
}

const multiplesOfFiveString = "5x"

const multiplesOfFive = {
  id: "multiplesOfFive",
  value: {
    name: "Random Integer with Range",
    properties: [
      { value: [0, 100] }
    ],
    constraints: [
      "num => num % 5 === 0"
    ],
  },
  html: <div>{multiplesOfFiveString}</div>
}

const operands = [
  int0to100,
  int100to200,
  multiplesOfFive
]

export default operands;
