import React from 'react';
import ProgressBar from './ProgressBar';

export default class ProfileView extends React.Component {

    constructor(props){
      super(props);
    }
    
    render(){
		  return (
            <div className="main-content">
                  <ProgressBar />
                  <div className="UserInfo">
                   <b>Stats</b> 
                   <br/>
                   <h2>Weight</h2>
                   <div className="Weight"><b>145</b></div> 
                  </div>
            </div>
    )
    }
	    
}