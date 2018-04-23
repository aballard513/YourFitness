import React from 'react';

export default class ProfilePicture extends React.Component {


    constructor(props){
      super(props);
    }
    
    render(){
		  return (
      
        
            <div className="profile">
                <div className="profile-picture"> <img src={this.props.picture} /></div>
            </div> 
      
    
    )
    }
	
    
}