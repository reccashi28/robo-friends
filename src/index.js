import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
// import Card from './Card.js';
import CardList from './CardList';
import ReactDOM from 'react-dom';
import { robots } from './robots';

ReactDOM.render(
    <CardList robots = { robots }/>
    ,document.getElementById('root')
);
reportWebVitals();