import { useState } from 'react';

import getProblemsFromInput from './utils/getProblemsFromInput';

import ProblemList from './components/ProblemList/ProblemList';
import SelectOperator from './components/SelectOperator/SelectOperator';
import OperatorBox from './components/OperatorBox/OperatorBox';
import Header from './components/Header/Header';
import NumberOfProblems from './components/NumberOfProblems/NumberOfProblems';

function App() {
  const [problems, setProblems] = useState([]);
  const numberOfProblemsState = useState(10);

  const [operator, setOperator] = useState({ id: '' });

  const operandsState = useState([]);

  const problemInput = {
    operands: operandsState[0].map(o => {
      const copy = { ...o.value };
      const fixedProperties = copy.properties.map(({ value }) => ({ value }));
      return { ...copy, properties: fixedProperties };
    }),
    operator: operator.value,
    number: numberOfProblemsState[0]
  };

  const generateProblems = () => {
    getProblemsFromInput(problemInput).then(setProblems)
  };

  
  return (
    <div className="App">
      <Header />
      <NumberOfProblems 
        numberOfProblemsState={numberOfProblemsState}
      />
      <SelectOperator 
        operatorState={[operator, setOperator]}
      />
      <OperatorBox 
        operator={operator} 
        operandsState={operandsState}
      />
      <button onClick={generateProblems}>Generate Problems!</button>
      <ProblemList problems={problems}/>
    </div>
  );
}

export default App;
