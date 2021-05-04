import { useState, useEffect } from 'react';
import './App.css';
import PresetForm from './presentation/PresetForm/PresetForm';
import PresetItem from './presentation/PresetItem/PresetItem';
import PresetList from './presentation/PresetList/PresetList';
import ProblemItem from './presentation/ProblemItem/ProblemItem';
import ProblemsDisplay from './presentation/ProblemsDisplay/ProblemsDisplay';
import mathAPIfetch from './utils/mathAPIFetch';

function App() {
  const [presets, setPresets] = useState([]);
  const [problems, setProblems] = useState([]);
  
  useEffect(() => {
    mathAPIfetch('{ presets { name } }')
      .then(res => res.json())
      .then(({ data }) => setPresets(data.presets));
  }, [presets]);

  const getProblems = ({ target }) => {
    fetch(`https://math-problems-api.herokuapp.com/presets/${target.id}`)
      .then(res => res.json())
      .then(json => json.data.binary)
      .then(setProblems);
  };

  const presetsList = presets.map(({ name, query }, i) => {
    return <PresetItem 
      key={i} 
      {...{ name, query, getProblems }}
    />;
  });

  const problemsList = problems.map(({ problem, solution }, i) => {
    return <ProblemItem key={i} {...{ problem, solution }}/>;
  });

  const clearProblems = () => setProblems([]);

  const submitPreset = e => {
    e.preventDefault();

    const { name, query: rawQuery } = e.target;

    // Remove new line characters and escape quotes
    const query = rawQuery.value
      .replace(/\n/g, '')
      .replace(/"/g, '\\"');

    mathAPIfetch(`
      mutation {
        createPreset(presetInput: {
          name: "${name.value}"
          query: "${query}"
        }) {
          name
          query
        }
      }
    `)
      .then(() => setPresets(() => [...presets]))
  };

  return (
    <div className="App">
      <div className="presets-container">
        <PresetForm {...{ submitPreset }}/>
        <PresetList {...{ presetsList }}/>
      </div>
      <ProblemsDisplay {...{ problemsList, clearProblems }}/>
    </div>
  );
}

export default App;
