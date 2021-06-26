import { useState } from 'react';

import getProblemsFromInput from './utils/getProblemsFromInput';

import operators from './data/operators';
import availableOperands from './data/operands';

import ProblemList from './components/ProblemList/ProblemList';
import SelectOperator from './components/SelectOperator/SelectOperator';
import OperatorBox from './components/OperatorBox/OperatorBox';
import getNumberOfOperands from './utils/getNumberOfOperands';

function App() {
  const [problems, setProblems] = useState([]);
  const [numberOfProblems, setNumberOfProblems] = useState(10);
  const [operatorId, setOperatorId] = useState('addition');
  const [operandIds, setOperandIds] = useState(['int0to100', 'int0to100']);

  const operator = operators.find(o => o.id === operatorId) || { component: () => <div>Select an Operator</div>};
  const numberOfOperands = getNumberOfOperands(operator.value);

  const operands = operandIds.map(opId => availableOperands.find(o => o.id === opId));

  const problemInput = {
    operands: operands.map(o => o.value),
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
