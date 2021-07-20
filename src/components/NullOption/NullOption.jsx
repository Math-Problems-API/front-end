import React from 'react';

export default function NullOption({ nullSwitch, children }) {
  // children should be a string; no extra jsx
  return (
    nullSwitch 
    ? <option value={''}>
      {children}
    </option>
    : ''
  )
}
