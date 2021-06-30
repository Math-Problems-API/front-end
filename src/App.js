import { useEffect, useState } from 'react';

import getProblemsFromInput from './utils/getProblemsFromInput';

import availableOperators from './data/operators';
import availableOperands from './data/operands';

import ProblemList from './components/ProblemList/ProblemList';
import SelectOperator from './components/SelectOperator/SelectOperator';
import OperatorBox from './components/OperatorBox/OperatorBox';
import SelectOperands from './components/SelectOperands/SelectOperands';
import getNumberOfOperands from './utils/getNumberOfOperands';

function App() {
  const [problems, setProblems] = useState([]);
  const [numberOfProblems, setNumberOfProblems] = useState(10);

  const [operator, setOperator] = useState(availableOperators[0]);

  const numberOfOperands = getNumberOfOperands(operator.value);

  const [operands, setOperands] = useState([...Array(numberOfOperands)].map(() => ({ ...availableOperands[0]() })));

  console.log('OPERANDS', operands);

  useEffect(() => {
    setOperands([...Array(numberOfOperands)].map(() => ({ ...availableOperands[0]() })))
  }, [numberOfOperands])

  const problemInput = {
    operands: operands.map(o => {
      const copy = { ...o.value };
      const fixedProperties = copy.properties.map(({ value, ...rest }) => ({ value }));
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
      <SelectOperands 
        available={availableOperands}
        number={numberOfOperands}
        operandsState={[operands, setOperands]}
      />
      <OperatorBox>
        <operator.component 
          operandsState={[operands, setOperands]}
        />
      </OperatorBox>
      <ProblemList {...{ problems }}/>
      <button onClick={generateProblems}>Generate Problems!</button>
    </div>
  );
}

export default App;
