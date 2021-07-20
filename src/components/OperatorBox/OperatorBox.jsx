import React from 'react';
import './OperatorBox.css';

import { useState, useEffect } from 'react';

import { 
  generateOperatorDisplayFromValue, 
  generateOperatorDisplayFromView 
} from '../../utils/generateOperatorDisplay';

export default function OperatorBox({ operator, operandsState }) {
  const [display, setDisplay] = useState(<div>Loading</div>);

  useEffect(() => {
    if(operator.id === '') return setDisplay(<div>Select an operator</div>);

    const operatorHasView = operator.view;

    if(operatorHasView) {
      setDisplay(generateOperatorDisplayFromView(operator, operandsState))
    } else {
      setDisplay(generateOperatorDisplayFromValue(operator, operandsState))
    }
  }, [operator, operandsState])

  return (
    <div className="operator-box">
      {display}
    </div>
  )
}
