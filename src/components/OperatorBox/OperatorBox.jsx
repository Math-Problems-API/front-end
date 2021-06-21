import React from 'react';
import './OperatorBox.css';

export default function OperatorBox({ children }) {
  return (
    <div className="operator-box">
      {children}
    </div>
  )
}
