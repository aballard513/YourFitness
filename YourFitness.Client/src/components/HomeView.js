import React from 'react';
import { isLoggedIn } from '../utils/AuthService';
import Auth from '../utils/AuthService';
import Home from './Home'
const auth = new Auth();

export default class HomeView extends React.Component {


    constructor(props){
      super(props);
      this.Logout = this.Logout.bind(this);
    }

    Logout()
    {
      auth.logout();
    }

    render(){
    if(auth.isAuthenticated())
    {
		  return (
      
      <div>
        <p>Welcome Home!</p>
      <div>
      <button className="login100-form-btn" type="button" onClick={this.Logout}>
          Logout
      </button>
      </div>
      </div>
      
    
    )
    }
    else{
      return <Home/>
    }
	}
    
}