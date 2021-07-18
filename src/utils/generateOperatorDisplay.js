import ReactHTMLParser from 'react-html-parser';

export const generateOperatorDisplayFromView = operator => {
  const { view } = operator;

  return ReactHTMLParser(view, {
    transform: node => {
      if (node.attribs?.name === 'operand') {
        return <div>Operator {node.attribs.id}</div>
      }
    }
  })
}

const addStyleToHTML = (style, html) => {
  return `
  <style>
    ${style}
  </style>
  ${html}
  `
}

const operatorValueStyle = `
  .operator {
    display: flex;
    flex-direction: row;
  }
`

export const generateOperatorDisplayFromValue = op => {
  const [operandsString, operatorString] = op.value
    .split('=>')
    .map(elem => elem.trim())

  const operands = operandsString
    .split(',')
    .map(operand => operand.trim())
  
  const asd = operands.reduce((view, operand, index) => {
    
  }, [operatorString])

  const operator = operands.reduce((view, operand, index) => {
    const operandHTML = `<div id="${index}" class="operator">${operand}</div>`

    return view.replace(operand, operandHTML)
  }, operatorString)

  return ReactHTMLParser(addStyleToHTML(operatorValueStyle, operator))
}
