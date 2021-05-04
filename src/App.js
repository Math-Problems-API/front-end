import { useState, useEffect } from 'react';
import './App.css';
import PresetForm from './presentation/PresetForm/PresetForm';
import PresetList from './presentation/PresetList/PresetList';
import ProblemsDisplay from './presentation/ProblemsDisplay/ProblemsDisplay';
import mathAPIfetch from './utils/mathAPIFetch';

function App() {
  const [presets, setPresets] = useState([]);
  const [problems, setProblems] = useState([]);
  
  useEffect(() => {
    mathAPIfetch('{ presets { name } }')
      .then(res => res.json())
      .then(({ data }) => setPresets(data.presets))
  }, [presets]);

  const getProblems = ({ target }) => {
    fetch(`https://math-problems-api.herokuapp.com/presets/${target.id}`)
      .then(res => res.json())
      .then(json => json.data.binary)
      .then(setProblems)
  }

  const presetsList = presets.map(({ name, query }, i) => {
    return <li key={i}>
      <p>{name}</p>
      <p>{query}</p>
      <button
        id={name}
        onClick={getProblems}>
          Get Problems
      </button>
    </li>
  });

  const submitPreset = e => {
    e.preventDefault();

    const { name, query: rawQuery } = e.target;

    const query = rawQuery.value
      .replace(/\n/g, '')
      .replace(/"/g, '\\"')


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
  }

  const problemsList = problems.map((prob, i) => {
    return <li key={i}>
      <p>Problem: {prob.problem}</p>
      <p>Solution: {prob.solution}</p>
    </li>
  });

  const clearProblems = () => {
    setProblems([]);
  }

  return (
    <div>
      <PresetList {...{ presetsList }}/>
      <ProblemsDisplay {...{ problemsList, clearProblems }}/>
      <PresetForm {...{ submitPreset }}/>
    </div>
  );
}

export default App;
