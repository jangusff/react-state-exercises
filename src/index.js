import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouletteGun from './RoulletteGun';


ReactDOM.render(
    <RouletteGun bulletInChamber={4} />,  document.getElementById('root')
    //<RouletteGun />,  document.getElementById('root')
);

