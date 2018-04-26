import React from 'react';
import { isLoggedIn } from '../utils/AuthService';
import Auth from '../utils/AuthService';
import NavBar from './NavBar';
import Login from './Login';
import SideMenu from './SideMenu';
import ProgressBar from './ProgressBar';
import ProfilePicture from './ProfilePicture';
const auth = new Auth();

export default class HomeView extends React.Component {


    constructor(props){
      super(props);
      this.Logout = this.Logout.bind(this);
      this.OpenMenu = this.OpenMenu.bind(this);
      this.setUser = this.setUser.bind(this);
      this.state = {toggle: false, name:"", picture:"",loading:""};
      
    }

    
    Logout()
    {
      auth.logout();
    }

    getStatus()
    {
        return this.state.loading;
    }

    componentDidMount()
    {
      auth.getInformation(this.setUser);
    }

    OpenMenu()
    {
      console.log("fired");
      if(!this.state.toggle)
      {
        document.getElementById("menu").style.left = "0px";
        this.setState({toggle: true});
      }else{
        document.getElementById("menu").style.left = "-106px";
        this.setState({toggle: false});
      }
    }
    
    setUser(name, picture)
    {
      this.setState({
        name: "Hi "+name+"!",
        picture: picture,
        loading: "loaded"
      });
    }


    render(){
    if(auth.isAuthenticated())
    {
      console.log("loaded: "+this.getStatus());
      if(this.getStatus() == "loaded")
      {
        return (   
          <div>
          <div className="content">
           <NavBar OpenMenu = {this.OpenMenu}/>
           <div className="user-greeting"> {this.state.name}</div>
           <ProfilePicture picture={this.state.picture}/>
           <SideMenu/>
                <div className="main-content">
                  <ProgressBar />
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
        return <div> gathering your info.. </div>
      }
    }
    else{
      return <Login/>
   }
	}
    
}