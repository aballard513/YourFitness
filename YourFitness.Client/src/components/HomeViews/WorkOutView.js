import React from 'react';
import History from '../../utils/History';
import SVC from '../../utils/BusinessService';

const svc = new SVC();
export default class WorkOutView extends React.Component {

    constructor(props){
      super(props);
      this.RedirectToWorkOutView = this.RedirectToWorkOutView.bind(this);
      this.getWorkOuts = this.getWorkOuts.bind(this);
      this.state = {exercises:{}}
    }

    getWorkOuts(id)
    {
      return svc.getWorkOuts(id);
    }

    RedirectToWorkOutView(id){
      var id = id.target.id;
      this.getWorkOuts(id).then((value) =>{
        localStorage.setItem('exercises', JSON.stringify(value));
        History.push('/Home/Home-WorkOut/SelectionView');
      }
      ).catch((err)=> {
        console.log(err)
      });
    }
    
    render(){
		  return (
            <div className="main-content">
            <div className="workout-selection">
                  <button className="workout-selection" id="0" type="button" onClick={this.RedirectToWorkOutView}> Chest WorkOuts </button>
                  <br/>
                  <button className="workout-selection" id="2" type="button" onClick={this.RedirectToWorkOutView}> Back WorkOuts </button>
                  <br/>
                  <button className="workout-selection" id="1" type="button" onClick={this.RedirectToWorkOutView}> Leg WorkOuts </button>
                  <br/>
                  <button className="workout-selection" id="4" type="button" onClick={this.RedirectToWorkOutView}> Bicep WorkOuts </button>
                  <br/>
                  <button className="workout-selection" id="3" type="button" onClick={this.RedirectToWorkOutView}> Tricep WorkOuts </button>
            </div>
            </div>
    )
    }
	    
}