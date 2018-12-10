import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Router
import {BrowserRouter} from 'react-router-dom';

// MDL Lite
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
