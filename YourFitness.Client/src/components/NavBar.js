import React from 'react';
import Menu from './Menu'

export default class NavBar extends React.Component {


    constructor(props){
      super(props);
    }
    
    render(){
		  return (
      
        
            <div className="nav-bar">
              
                 <Menu OpenMenu = {this.props.OpenMenu}/>
                 Your Fitness
            </div> 
      
    
    )
    }
	
    
}