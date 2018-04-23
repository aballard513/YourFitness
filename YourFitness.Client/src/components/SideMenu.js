import React from 'react';

export default class SideMenu extends React.Component {


    constructor(props){
      super(props);
    }
    
    render(){
		  return (
            <div className="side-menu" id="menu">
                <ul>
                    <li>
                        My Profile
                    </li>
                    <li>
                        My Workouts
                    </li>
                    <li>
                        Settings
                    </li>
                </ul> 
            </div>
    )
    }
	
    
}