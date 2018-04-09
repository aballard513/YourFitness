import decode from 'jwt-decode';
import { BrowserRouter } from 'react-router-dom';
import auth0 from 'auth0-js';
import history from './History';

var request = require('request');


export default class Auth {
  constructor(props)
  {
    this.RedirectToLogin = this.RedirectToLogin.bind(this);
    this.RedirectToRegister = this.RedirectToRegister.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }


  auth0 = new auth0.WebAuth({
    domain: 'your-fitness.auth0.com',
    clientID: 'eYsWmOA8NiLIAn38JMUkAFFlCcOF5JVQ',
    redirectUri: 'http://localhost:8080/callback',
    audience: 'https://your-fitness.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  

  RedirectToLogin() {
    history.replace('/Login');
  }

  RedirectToRegister() {
    history.replace('/');
  }

  Login(email, password)
  {
    this.auth0.login({
      email: email,
      password: password,
      realm: "YourFitness-Auth"
    }, err => {
      if (err) {
        console.log(err);
        alert(`Error: ${err.description}. Check the console for further details.`);
        return;
      }else{history.replace('/Login');}
});

  }

  create(user){
    
  var options = { method: 'POST',
  url: 'https://your-fitness.auth0.com/dbconnections/signup',
  headers: { 'content-type': 'application/json' },
  body: 
   { client_id: 'eYsWmOA8NiLIAn38JMUkAFFlCcOF5JVQ',
     connection: 'YourFitness-Auth',
     email: user.email,
     password: user.password,
     user_metadata: { firstName: user.firstName, lastName: user.lastName, weight: user.weight, height: user.height, goal: user.goal } },
  json: true };

request(options, function (error, response, body) {
  if (error) {throw new Error(error);}else{history.replace('/Login');}

  console.log(body);
});
    
   /* 
    this.auth0.signup({
      firstName : user.firstName,
      lastName : user.lastName,
      email: user.email,
      password: user.password,
      weight : user.weight,
      height: user.height,
      goal : user.goal,
      connection: "YourFitness-Auth"
    }, err => {
      if (err) {
        console.log(err);
        alert(`Error: ${err.description}. Check the console for further details.`);
        return;
      }else{history.replace('/Login');}
});*/

  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace('/Home');
      } else if (err) {
        history.replace('/Login');
        console.log(err);
      }
    });
  }

  setSession(authResult) {
    // Set the time that the Access Token will expire at
  
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // navigate to the Login route
    history.replace('/Login');
  }

  logout() {
    // Clear Access Token and ID Token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // navigate to the Login route
    history.replace('/Login');
  }

  isAuthenticated() {
    // Check whether the current time is past the 
    // Access Token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

}