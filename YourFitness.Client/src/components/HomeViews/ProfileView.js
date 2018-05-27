import React from 'react';
import ProgressBar from './ProgressBar';
import { userInfo } from 'os';

export default class ProfileView extends React.Component {

    constructor(props){
      super(props);
    }

   
    
    render(){
      
      //svc.GetStats(this.props.Email);
      

		  return (
            <div className="main-content">
                  <ProgressBar />
                  <div className="UserInfo">
                
                   <b>Stats</b> 
                 
                   <h2 className="left">Weight</h2>
                   <div className="Weight"><b>{this.props.Weight} lb</b></div> 
                  
                   <h2 className="left">Height</h2>
                   <div className="Height"><b>{this.props.Height} in.</b></div>
                   
                   <h2 className="left">Goal</h2>
                   <div className="Height"><b>{this.props.Goal}</b></div>

                   <h2 className="right">Gender</h2>
                   <div className="Gender"><b>{this.props.Gender}</b></div>

                   <h2 className="right">Age</h2>
                   <div className="Age"><b>{this.props.Age}</b></div>
                  </div>  

                  <div className="Goals">
                   <b>Daily Goals</b> 
                 
                   <h2>Daily Colories</h2>
                   <div className="Calories"><b>{this.props.Calories}</b></div> 
                  </div>  
            </div>
    )
  }

}  
