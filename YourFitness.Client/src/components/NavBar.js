import React from 'react';
import Menu from './Menu'

export default class NavBar extends React.Component {


    constructor(props){
      super(props);
      this.Logout = this.Logout.bind(this);
    }

    Logout(){
      this.props.Logout();
    }
    
    render(){
		  return (
      
        
            <div className="nav-bar">
              
                 <Menu OpenMenu = {this.props.OpenMenu}/>
                  <div class="nav-center">Your Fitness
                  
                  </div>
                  <div className="logout-link" onClick={this.Logout}> <a>Logout</a></div>
                
            </div> 
      
    
    )
    }
	
    
}