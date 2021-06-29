import { useState } from 'react';

import getProblemsFromInput from './utils/getProblemsFromInput';

import operators from './data/operators';
import availableOperands from './data/operands';

import ProblemList from './components/ProblemList/ProblemList';
import SelectOperator from './components/SelectOperator/SelectOperator';
import OperatorBox from './components/OperatorBox/OperatorBox';
import getNumberOfOperands from './utils/getNumberOfOperands';
import SelectOperands from './components/SelectOperands/SelectOperands';

function App() {
  const [problems, setProblems] = useState([]);
  const [numberOfProblems, setNumberOfProblems] = useState(10);
  const [operatorId, setOperatorId] = useState('addition');
  const [operandIds, setOperandIds] = useState([
    { id: 'randomIntegerWithRange' }, 
    { id: 'randomIntegerWithRange' }
  ]);

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
      <SelectOperands 
        available={availableOperands}
        number={numberOfOperands}
        operandsState={[operandIds, setOperandIds]}
      />
      <OperatorBox>
        <operator.component 
          operands={operands}
        />
      </OperatorBox>
      <ProblemList {...{ problems }}/>
      <button onClick={generateProblems}>Generate Problems!</button>
    </div>
  );
}

export default App;
