import React from 'react';
import './PresetList.css';

export default function PresetList({ presetsList }) {
  return (
    <ul className="presets-list">
      {presetsList}
    </ul>
  )
}
