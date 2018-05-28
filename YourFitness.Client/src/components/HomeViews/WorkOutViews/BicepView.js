import React from 'react';

export default class BicepView extends React.Component {

    constructor(props){
      super(props);
    }
    
    render(){
		  return (
            <div className="main-content">
            <a className="back-redirect" onClick={this.props.Back}>Back</a>
                <p>BicepView</p>
            </div>
    )
    }
	    
}