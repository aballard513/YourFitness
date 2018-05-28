import React from 'react';
import History from '../../utils/History';

export default class WorkOutView extends React.Component {

    constructor(props){
      super(props);
      this.RedirectToWorkOutView = this.RedirectToWorkOutView.bind(this);
    }

    RedirectToWorkOutView(location){
      var location = location.target.id;
      if(location=="chest")
      {
        History.push('/Home/Home-WorkOut/Chest');
      }else if(location=="back")
      {
        History.push('/Home/Home-WorkOut/Back');
      }else if(location=="legs")
      {
        History.push('/Home/Home-WorkOut/Legs');
      }else if(location=="bicep")
      {
        History.push('/Home/Home-WorkOut/Biceps');
      }else if(location=="tricep")
      {
        History.push('/Home/Home-WorkOut/Triceps');
      }
    }
    
    render(){
		  return (
            <div className="main-content">
            <div className="workout-selection">
                  <button className="workout-selection" id="chest" type="button" onClick={this.RedirectToWorkOutView}> Chest WorkOuts </button>
                  <br/>
                  <button className="workout-selection" id="back" type="button" onClick={this.RedirectToWorkOutView}> Back WorkOuts </button>
                  <br/>
                  <button className="workout-selection" id="legs" type="button" onClick={this.RedirectToWorkOutView}> Leg WorkOuts</button>
                  <br/>
                  <button className="workout-selection" id="bicep" type="button" onClick={this.RedirectToWorkOutView}> Bicep WorkOuts </button>
                  <br/>
                  <button className="workout-selection" id="tricep" type="button" onClick={this.RedirectToWorkOutView}> Tricep WorkOuts </button>
            </div>
            </div>
    )
    }
	    
}