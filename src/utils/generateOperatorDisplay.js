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

  // Wrap operands and other string elements in
  // divs
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

  // Put everything in a container
  const operatorHTML = `<div class="operator">${wrappedOperands}</div>`

  // Parse html string to React and replace divs 
  // that have 'operand' name attribute with 
  // the Operand Selector
  return ReactHTMLParser(addStyleToHTML(operatorHTML, operatorValueStyle), {
    transform: node => {
      if (node.attribs?.name === 'operand') {
        return <SelectOperand 
          id={node.attribs.id} 
          operandsState={operandsState}
        />
      }
    }
  })
}
