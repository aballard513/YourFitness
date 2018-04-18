import React from 'react';


export default class Menu extends React.Component {


    constructor(props){
      super(props);
      this.state = {toggle: false}
    }

   
    
    render(){

		  return (
            <div className="hamburger-menu" onClick={this.props.OpenMenu}>
                 <div className="bar"></div>
                 <div className="bar"></div>
                 <div className="bar"></div>
            </div> 
            )
    
    }
	
    
}