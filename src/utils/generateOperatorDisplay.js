import ReactHTMLParser from 'react-html-parser';
import SelectOperand from '../components/SelectOperand/SelectOperand';

export const generateOperatorDisplayFromView = (operator, operandsState) => {
  const { view } = operator;

  return ReactHTMLParser(view, {
    transform: node => {
      if (node.attribs?.name === 'operand') {
        return <SelectOperand 
          id={node.attribs.id} 
          operandsState={operandsState}
        />
        // return <div>Operator {node.attribs.id}</div>
      }
    }
  })
}

const addStyleToHTML = (html, style) => {
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

    width: 100%;

    justify-content: space-around;
    align-items: center;
  }
`

export const generateOperatorDisplayFromValue = (operator, operandsState) => {
  const [operandsString, operatorString] = operator.value
    .split('=>')
    .map(elem => elem.trim())

  const operands = operandsString
    .split(',')
    .map(operand => operand.trim())

  const wrappedOperands = operands
    .reduce((view, operand) => {
      return view.replace(operand, `__${operand}__`)
    }, operatorString)
    .split('__')
    .filter(item => item !== '')
    .map(item => {
      if(operands.includes(item)) {
        const index = operands.indexOf(item);
        return `<div id=${index} name="operand">${item}</div>`
      }

      return `<div>${item}</div>`;
    })
    .join('')

  const operatorHTML = `<div class="operator">${wrappedOperands}</div>`

  return ReactHTMLParser(addStyleToHTML(operatorHTML, operatorValueStyle), {
    transform: node => {
      if (node.attribs?.name === 'operand') {
        return <SelectOperand 
          id={node.attribs.id} 
          operandsState={operandsState}
        />
        // return <div>Operator {node.attribs.id}</div>
      }
    }
  })
}
