import React from 'react';
import './OperatorBox.css';

import ReactHTMLParser from 'react-html-parser';
import { useState, useEffect } from 'react';

export default function OperatorBox({ operator }) {
  const [displayed, setDisplayed] = useState(<div>Loading</div>);

  const generateOperatorFromView = op => {
    const { view } = op;

    return ReactHTMLParser(view, {
      transform: node => {
        if(node.attribs?.name === 'operand') {
          return <div>Operator {node.attribs.id}</div>
        }
      }
    })
  }

  const generateOperatorFromValue = op => {
    const [operandsString, operatorString] = op.value
      .split('=>')
      .map(elem => elem.trim())

    const operands = operandsString
      .split(',')
      .map(operand => operand.trim())

    const operator = operands.reduce((view, operand, index) => {
      const operandHTML = `<div id="${index}">${operand}</div>`

      return view.replace(operand, operandHTML)
    }, operatorString)
    
    return ReactHTMLParser(operator)
  }

  useEffect(() => {
    const operatorHasView = operator.view;

    if(operatorHasView) {
      setDisplayed(generateOperatorFromView(operator))
    } else {
      setDisplayed(generateOperatorFromValue(operator))
    }
  }, [operator])

  return (
    <div className="operator-box">
      {displayed}
    </div>
  )
}
