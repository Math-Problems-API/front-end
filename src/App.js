import { useState } from 'react';

import getProblemsFromInput from './utils/getProblemsFromInput';

import ProblemList from './components/ProblemList/ProblemList';
import SelectOperator from './components/SelectOperator/SelectOperator';
import OperatorBox from './components/OperatorBox/OperatorBox';

function App() {
  const [problems, setProblems] = useState([]);
  const [numberOfProblems, setNumberOfProblems] = useState(10);

  const [operator, setOperator] = useState({ id: '' });

  const operandsState = useState([]);

  const problemInput = {
    operands: operandsState[0].map(o => {
      const copy = { ...o.value };
      const fixedProperties = copy.properties.map(({ value }) => ({ value }));
      return { ...copy, properties: fixedProperties };
    }),
    operator: operator.value,
    number: numberOfProblems
  };

  const generateProblems = () => {
    getProblemsFromInput(problemInput).then(setProblems)
  };

  const updateNumberOfProblems = ({ target }) => {
    setNumberOfProblems(Number(target.value));
  };
  
  return (
    <div className="App">
      <input 
        type="number" 
        onChange={updateNumberOfProblems}
        value={numberOfProblems}
      />
      <SelectOperator 
        operatorState={[operator, setOperator]}
      />
      {
        operator.id === ''
        ? <div>Select an operator</div>
        : <OperatorBox 
            operator={operator} 
            operandsState={operandsState}
          />
      }
      <button onClick={generateProblems}>Generate Problems!</button>
      <ProblemList {...{ problems }}/>
    </div>
  );
}

export default App;
