import React from 'react';

export default function NullOption({ nullSwitch, children }) {
  return (
    nullSwitch 
    ? <option value={''}>
      {children}
    </option>
    : ''
  )
}
