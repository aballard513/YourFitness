import React from 'react';
import ReactDOM from 'react-dom';
import App from '../containers/App.js';
import store from '../store.js';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import '../assets/images/icons/favicon.ico'
import '../assets/vendor/bootstrap/css/bootstrap.min.css'
import '../assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import '../assets/fonts/Linearicons-Free-v1.0.0/icon-font.min.css'
import '../assets/vendor/animate/animate.css'
import '../assets/vendor/css-hamburgers/hamburgers.min.css'
import '../assets/vendor/animsition/css/animsition.css'
import '../assets/vendor/select2/select2.min.css'
import '../assets/vendor/daterangepicker/daterangepicker.css'
import '../assets/css/main.css'
import '../assets/css/util.css'
import '../assets/vendor/jquery/jquery-3.2.1.min.js'
import '../assets/vendor/animsition/js/animsition.min.js'
import '../assets/vendor/bootstrap/js/popper'
import '../assets/vendor/bootstrap/js/bootstrap.min.js'
import '../assets/vendor/select2/select2.min.js'
import '../assets/vendor/daterangepicker/moment.min.js'
import '../assets/vendor/daterangepicker/daterangepicker.js'
import '../assets/vendor/countdowntime/countdowntime.js'
import '../assets/js/main.js'


ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>, 


document.getElementById('app')
)