import React from 'react';
import ReactDOM from 'react-dom';
import App from '../containers/App.js';
import Home from '../components/Home';
import { BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom/Route';
require('../assets/css/main.css');
require('../assets/custom/Home.css');
require('../assets/custom/ProgressBar.less');


ReactDOM.render(
<BrowserRouter>
      <App />
</BrowserRouter>, 


document.getElementById('app')
)
