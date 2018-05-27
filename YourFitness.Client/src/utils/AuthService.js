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
    this.calculateCalories = this.calculateCalories.bind(this);
    this.calculateBMI = this.calculateBMI.bind(this)
  }


  auth0 = new auth0.WebAuth({
    domain: '',
    clientID: '',
    redirectUri: 'https://yourfitness.azurewebsites.net/callback',
    audience: 'https://your-fitness.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid profile user_metadata'
  });

  calculateBMI(weight,height, age, gender){
    return 655 + (4.35 * weight) + (4.7 * height * age)
  }

  calculateCalories(weight, goal, height){
    if(goal=="Gain Weight")
    {
      return weight * 20;
    }
    if(goal=="Loose Weight")
    {
      this.calculateBMI(weight,height)
    }
  }

  getAccessToken() {
    const accessToken = localStorage.getItem('access_token');
   // console.log("access token from ",localStorage.getItem('access_token'))
   // console.log("acces token is ",accessToken)
    if (!accessToken) {
      history.replace('/Login');
      //throw new Error('No access token found');
      
    }

    else{
        return accessToken;
    }

  }
  
  getInformation(setState){
    let accessToken = this.getAccessToken();
    if(!accessToken)
    {
      //console.log("User is not authenticated!");
      //throw new Error('No access token found');
    }else{
      this.auth0.client.userInfo(accessToken, (err, profile) => {
        if (profile) {
          
          
          var data = profile['https://your-fitness:auth0:com:user_metadata'];
          //console.log(name);
          var calories = this.calculateCalories(data.weight, data.goal);
          setState(data.firstName, profile.picture, data.weight, data.height, data.goal, data.gender,data.age,calories);
        }});
  }
}

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
        //console.log(err);
        alert(`Invalid username or password`);
        return;
      }else{history.replace('/Login');}
});

  }
  

  create(user){
    return new Promise(function(resolve, reject){
    var options = { method: 'POST',
    url: 'https://your-fitness.auth0.com/dbconnections/signup',
    headers: { 'content-type': 'application/json' },
    body: 
    { client_id: 'eYsWmOA8NiLIAn38JMUkAFFlCcOF5JVQ',
     connection: 'YourFitness-Auth',
     email: user.email,
     password: user.password,
     user_metadata: { firstName: user.firstName, lastName: user.lastName, weight: user.weight, height: user.height, goal: user.goal, gender: user.gender, age: user.age } },
    json: true };

    request(options, function (error, response, body) {
      if (error) {throw new Error(error);}
        else{
              var exists;
                if(body.code === "user_exists")
                {
                  resolve("user_exists");
                }else
                if(body.code == "invalid_password")
                {
                  resolve("invalid_password");
                }
                else{
                  history.replace("/Login");
                }
            }
    });
});
 

  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace('/Home');
      } else if (err) {
        history.replace('/Login');
        //console.log(err);
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