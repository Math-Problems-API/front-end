import React from 'react';
import SelectOperand from '../SelectOperand/SelectOperand';

export default function SelectOperands({ available, number, operandsState }) {
  return (
    [...Array(number)].map((_, i) => {
      return <SelectOperand 
        id={i}
        key={i}
        operandsState={operandsState}
        availableOperands={available.map(o => o())}
      />
    })
  )
};
