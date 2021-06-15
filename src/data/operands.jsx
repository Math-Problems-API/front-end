const int100to200 = {
  id: "int100to200",
  value: {
    name: "Random Integer with Range",
    properties: [
      { value: [100, 200] }
    ],
  },
  html: <div>

  </div>
}

const int0to100 = {
  id: "int0to100",
  value: {
    name: "Random Integer with Range",
    properties: [
      { value: [100, 200] }
    ],
  },
  html: <div>

  </div>
}

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
  html: <div>

  </div>
}

const operands = [
  int0to100,
  int100to200,
  multiplesOfFive
]

export default operands;
