import React from 'react';
import ProgressBar from './ProgressBar';
import BusinessService from '../../utils/BusinessService';

const svc = new BusinessService;

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
                 
                   <h2>Weight</h2>
                   <div className="Weight"><b>{this.props.Weight} lb</b></div> 
                  
                   <h2>Height</h2>
                   <div className="Height"><b>{this.props.Height} in.</b></div>
                   
                   <h2>Goal</h2>
                   <div className="Height"><b>{this.props.Goal}</b></div>
                  </div>  
            </div>
    )
  }

}  
