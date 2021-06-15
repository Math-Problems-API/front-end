import { useState, useEffect } from 'react';

import operators from './data/operators';
import operands from './data/operands';
const mathProblemsURL = 'https://math-problems-api.herokuapp.com/gql';

function App() {
  const [problems, setProblems] = useState([]);
  const [operatorName, setOperatorName] = useState('');
  const [selectedOperands, setSelectedOperands] = useState([]);

  const operator = operators.find(op => op.id === operatorName) || { html: <div></div> }
  

  const query = `query getProblems($problemInput: ProblemInput!) { problems(problemInput: $problemInput) { problem } }`;

  const number = 10;
  const int100to200 = operands.find(op => op.id === "int100to200");

  const problemInput = {
    number,
    operands: [
      int100to200.value,
      int100to200.value
    ],
    operator: operator.value
  }

  const selectOperator = ({ target }) => {
    return setOperatorName(target.value);
  }

  const generateProblems = () => {
    fetch(mathProblemsURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { problemInput },
      })
    })
      .then(r => r.json())
      .then(json => json.data.problems)
      .then(setProblems)
  }

  return (
    <div className="App">
      <div>
        <select
          value={operatorName}
          onChange={selectOperator}
        >
          {
            operators.map(op => {
              return <option
                id={op.id}
                value={op.id}
              >{op.id}</option>
            })
          }
        </select>
      </div>
      {
        operator.html
      }
      <button
        onClick={generateProblems}
      >Generate Problems!</button>
      {
        problems.map(p => {
          return <p>{p.problem}</p>
        })
      }
    </div>
  );
}

export default App;
