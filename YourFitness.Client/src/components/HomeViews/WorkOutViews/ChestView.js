import React from 'react';

export default class ChestView extends React.Component {

    constructor(props){
      super(props);
    }
    
    render(){
		  return (
            <div className="main-content">
            <a className="back-redirect" onClick={this.props.Back}>Back</a>
                <p>ChestView</p>
            </div>
    )
    }
	    
}