import React from 'react';
import ReactDOM from 'react-dom';
import App from '../containers/App.js';
import Home from '../components/Home';
import { BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom/Route';
import '../assets/vendor/bootstrap/css/bootstrap.min.css'
import '../assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import '../assets/css/main.css'
import '../assets/css/util.css'
import '../assets/vendor/jquery/jquery-3.2.1.min.js'
import '../assets/vendor/bootstrap/js/bootstrap.min.js'
import '../assets/js/main.js'
import '../assets/custom/Home.css';

import '../assets/custom/ProgressBar.less';


ReactDOM.render(
<BrowserRouter>
      <App />
</BrowserRouter>, 


document.getElementById('app')
)

