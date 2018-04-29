import React from 'react';
import ProgressBar from './ProgressBar';

import ProfilePicture from './ProfilePicture';

export default class Main extends React.Component {


    constructor(props){
      super(props);
    }
    
    render(){

		  return (
        <div>
            <ProfilePicture picture={this.props.picture}/>
            <div className="main-content">
                  <ProgressBar />
            </div>
        </div>  
            )
    
    }
	
    
}