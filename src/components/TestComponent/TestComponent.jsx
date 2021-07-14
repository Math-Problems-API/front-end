import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ReactHTMLParser from 'react-html-parser';

export default function TestComponent({ operandsState }) {
  const [operands] = operandsState;
  const [fetchHTML, setFetchHTML] = useState(<div>Loading</div>)

  useEffect(() => {
    fetch("http://localhost:7890/operator")
      .then(res => res.text())
      .then(html => ReactHTMLParser(html, { 
        transform: node => { 
          if(node.name === 'article') { 
            const operandIndex = Number(node.attribs.id);
            const Operand = operands[operandIndex].html;

            return <Operand 
              operandIndex={operandIndex}
              operandsState={operandsState}
            />
          } 
        } 
      }))
      .then(setFetchHTML)
  }, [operands, operandsState])

  return (
    <div>
      {fetchHTML}
    </div>
  )
}
