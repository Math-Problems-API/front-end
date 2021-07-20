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
  // Use operator string to generate HTML string
  const operatorHTML = htmlFromOperatorString(operator.value)

  // Add basic styling
  const view = addStyleToHTML(operatorHTML, operatorValueStyle);

  // Parse styled html string to React and replace divs 
  // that have 'operand' name attribute with  the Operand Selector
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

// Utility for generateOperatorDisplayFromValue
function htmlFromOperatorString(operator) {
  const [operandsString, operatorString] = operator
    .split('=>')
    .map(elem => elem.trim())

  const operands = operandsString
    .split(',')
    .map(operand => operand.trim())

  // Wrap operands and other string elements in
  // divs
  const wrappedOperatorString = operands
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

  return `<div class="operator">${wrappedOperatorString}</div>`;
}

function addStyleToHTML (html, style) {
  return `
    <style>
      ${style}
    </style>
    ${html}
  `
}
