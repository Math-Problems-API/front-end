import React from 'react'

export default function PresestForm({ submitPreset }) {
  return (
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
  )
}
