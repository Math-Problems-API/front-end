const getNumberOfOperands = operatorString => {
  return operatorString.split('=>')[0].split(',').length;
}

export default getNumberOfOperands;
