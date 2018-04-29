import React from 'react';

export default class SideMenu extends React.Component {


    constructor(props){
      super(props);
      this.SendView = this.SendView.bind(this);
    }

    SendView(e)
    {
        this.props.Click(e);
    }
    
    
    render(){
		  return (
            <div className="side-menu" id="menu">
                <ul>
                    <li id="Home" onClick={this.SendView}>
                        Home
                    </li>
                    <li id="Profile" onClick={this.SendView}>
                        My Profile
                    </li>
                    <li id="Calorie" onClick={this.SendView}>
                        Colorie Tracker
                    </li>
                    <li id="Management" onClick={this.SendView}>
                        Manage WorkOuts
                    </li>
                    <li id="Workouts" onClick={this.SendView}>
                        My Workouts
                    </li>
                    <li id="Settings" onClick={this.SendView}>
                        Settings
                    </li>
                </ul> 
            </div>
    )
    }
	
    
}