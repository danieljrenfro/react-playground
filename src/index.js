import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouletteGun from './state-drills/RouletteGun';

ReactDOM.render(
  <RouletteGun bulletInChamber={5} />,
  document.getElementById('root')
);
