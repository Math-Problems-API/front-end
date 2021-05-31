import { useState, useEffect } from 'react';

import ops from './data/operators'; 

function App() {

  const [operator, setOperator] = useState(<div></div>);

  const selectOperator = ({ target }) => {
    return setOperator(target.value);
  }

  return (
    <div className="App">
      <div>
        <select
          value={operator}
          onChange={selectOperator}
        >
          <option
            id=""
          ></option>
          <option 
            id="addition"
            value="addition"
          >addition</option>
        </select>
      </div>
      {
        ops.find(op => op.props.id === operator) || ''
      }
    </div>
  );
}

export default App;
