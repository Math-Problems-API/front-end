import React from 'react';
import './PresetForm.css';

export default function PresetForm({ submitPreset }) {
  return (
    <form onSubmit={submitPreset} className="preset-form">
      <label htmlFor="name" className="name-label">
        <p className="input-title">Preset Name:</p>
      </label>
      <input id="name" className="name-input" type="text" required/>

      <label htmlFor="query" className="query-label">
        <p className="input-title">Preset Query:</p>
      </label>
      <textarea 
        id="query" 
        type="text"
        className="query-input"
      />
      <button className="submit-button">Submit</button>
    </form>
  )
}
