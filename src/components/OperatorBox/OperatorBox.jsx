import React from 'react';
import './OperatorBox.css';

import { useState, useEffect } from 'react';
import { 
  generateOperatorDisplayFromValue, 
  generateOperatorDisplayFromView 
} from '../../utils/generateOperatorDisplay';

export default function OperatorBox({ operator }) {
  const [display, setDisplay] = useState(<div>Loading</div>);

  useEffect(() => {
    const operatorHasView = operator.view;

    if(operatorHasView) {
      setDisplay(generateOperatorDisplayFromView(operator))
    } else {
      setDisplay(generateOperatorDisplayFromValue(operator))
    }
  }, [operator])

  return (
    <div className="operator-box">
      {display}
    </div>
  )
}
