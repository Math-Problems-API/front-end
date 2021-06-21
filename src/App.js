import { useState, useEffect } from 'react';

import getProblemsFromInput from './utils/getProblemsFromInput';

import operators from './data/operators';
import availableOperands from './data/operands';

import ProblemList from './components/ProblemList/ProblemList';
import SelectOperator from './components/SelectOperator/SelectOperator';
import OperatorBox from './components/OperatorBox/OperatorBox';

function App() {
  const [problems, setProblems] = useState([]);
  const [operatorId, setOperatorId] = useState('');
  const [operandIds, setOperandIds] = useState([]);

  const operator = operators.find(o => o.id === operatorId) || { component: () => <div>Select an Operator</div>};
  const operands = operandIds.map(opId => availableOperands.find(o => o.id === opId));

  const problemInput = {
    operands: operands.map(o => o.value),
    operator: operator.value,
    number: 10
  }

  const generateProblems = () => {
    getProblemsFromInput(problemInput).then(setProblems)
  };
  
  return (
    <div className="App">
      <SelectOperator operatorState={[operatorId, setOperatorId]}/>
      <OperatorBox>
        <operator.component 
          availableOperands={availableOperands}
          operandsState={[operandIds, setOperandIds]}
          operandsHTML={operands.map(o => o.html)}
        />
      </OperatorBox>
      <ProblemList {...{ problems }}/>
      <button onClick={generateProblems}>Generate Problems!</button>
    </div>
  );
}

export default App;
