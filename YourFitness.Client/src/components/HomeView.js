import React from 'react';
import { isLoggedIn } from '../utils/AuthService';
import Auth from '../utils/AuthService';
import NavBar from './NavBar';
import Login from './Login';
import ProfilePicture from './ProfilePicture';
const auth = new Auth();

export default class HomeView extends React.Component {


    constructor(props){
      super(props);
      this.Logout = this.Logout.bind(this);
      this.OpenMenu = this.OpenMenu.bind(this);
      this.state = {toggle: false};
    }

    Logout()
    {
      auth.logout();
    }

    OpenMenu()
    {
      console.log("fired");
      if(!this.state.toggle)
      {
        document.getElementById("menu").style.left = "0px";
        this.setState({toggle: true});
      }else{
        document.getElementById("menu").style.left = "-100px";
        this.setState({toggle: false});
      }
    }
    
    render(){
    if(auth.isAuthenticated())
    {
		  return (
     <div>   
     <div className="content">
       <NavBar OpenMenu = {this.OpenMenu}/>
       <ProfilePicture />
       <div className="side-menu" id="menu">
        <ul>
          <li>
            My Profile
          </li>
          <li>
            My Workouts
          </li>
          <li>
            Settings
          </li>
        </ul> 
       </div>
            <div className="main-content">
              <div className="logout">
              <button className="login100-form-btn" type="button" onClick={this.Logout}>
                Logout
               </button>
              </div> 
            </div>
        
    </div>
    <div className="footer"> </div>
    </div>   
        
      
    
    )
    }
    else{
      return <Login/>
   }
	}
    
}