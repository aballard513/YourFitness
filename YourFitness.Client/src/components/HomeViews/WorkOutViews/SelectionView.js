import React from 'react';

export default class SelectionView extends React.Component {

    constructor(props){
      super(props);
      this.Exercises = this.Exercises.bind(this);
    }
    
    Exercises()
    {
        var exercises = JSON.parse(localStorage.getItem('exercises'));
        var length = Object.keys(exercises).length;
        var objects = [];
        for(var i=0;i<length;i++)
        {
            objects.push(  
            <div className="workout-select" id={i} type="button" > 
            {exercises[i].name} 
            <div className="button-select"><button className="select" type="button"> Add </button></div>
            </div>
           );
           
        }

        return objects;
    }
    
    render(){
		  return (
              
            <div className="main-content">
            <a className="back-redirect" onClick={this.props.Back}>Back</a>
           
                {
                 this.Exercises()    
                }
        
                
            </div>
    )
    }
	    
}