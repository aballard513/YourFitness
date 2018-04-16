import React from 'react';
import { isLoggedIn } from '../utils/AuthService';
import Auth from '../utils/AuthService';
import NavBar from './NavBar';
import Login from './Login';
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
    //if(auth.isAuthenticated())
    //{
		  return (
        
     <div class="content">
       <NavBar />
            <br/>
            <br/>
            <button className="login100-form-btn" type="button" onClick={this.Logout}>
              Logout
            </button>
    </div>
       
        
      
    
    )
    //}
    //else{
     // return <Login/>
   // }
	}
    
}