import { useState, useEffect } from 'react';
import './App.css';
import mathAPIfetch from './utils/mathAPIFetch';

function App() {
  const [currentPresets, setCurrentPresets] = useState([]);
  const [problems, setProblems] = useState([]);
  
  useEffect(() => {
    mathAPIfetch('{ presets { name } }')
      .then(res => res.json())
      .then(({ data }) => setCurrentPresets(data.presets))
  }, []);

  const getProblems = ({ target }) => {
    fetch(`http://localhost:7890/presets/${target.id}`)
      .then(res => res.json())
      .then(json => json.data.binary)
      .then(setProblems)
  }

  const presetsList = currentPresets.map(({ name, query }, i) => {
    return <li key={i}>
      <p>{name}</p>
      <p>{query}</p>
      <button
        id={name}
        onClick={getProblems}
      >Get Problems</button>
    </li>
  });

  const submitPreset = e => {
    e.preventDefault();

    const { name, query: rawQuery } = e.target;

    const query = rawQuery.value
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
    `);
  }

  const problemsList = problems.map((prob, i) => {
    return <li key={i}>
      <p>Problem: {prob.problem}</p>
      <p>Solution: {prob.solution}</p>
    </li>
  });

  return (
    <div>

      <ul>
        {presetsList}
      </ul>

      <ul>
        {problemsList}
      </ul>

      <form onSubmit={submitPreset}>
        <label htmlFor="name">Preset Name: </label>
        <input id="name" type="text"/>
        <label htmlFor="query">Preset Query: </label>
        <textarea 
          id="query" 
          type="text"
          style={{ 
            height: '10rem', 
            width: '20rem'
          }}
        />
        <button>Submit</button>
      </form>

    </div>
  );
}

export default App;
