
import React from 'react';
//import RegisterView from '../components/RegisterView';

import {connect} from 'react-redux';

export default class RegisterView extends React.Component {


  
 render () {

   return (
    

     <div>
       <p>Please Register</p>
       <br/>
       <form onsubmit = {this.handleSubmit}>
        <label name= "FirstNameLbl">FirstName</label>
       <input type="text" name="FirstName"/>
       <br />
       <label name= "LastNameLbl">LastName</label>
       <input type="text" name="LastName"/><br/>
       <label name= "EmailLbl">Email</label>
       <input type="text" name="Email"/><br/>
       <label name= "PasswordLbl">Password</label>
       <input type="text" name="Password"/><br/>
       <label name= "WeightLbl">Weight(lbs)</label>
       <input type="text" name="Weight"/><br/>
       <label name= "HeightLbl">Height(in)</label>
       <input type="text" name="Height"/><br/>
       <label name= "GoalLbl">Goal</label>
       <select type="text" name="Goal"><br/>
        <option>Gain Weight</option>
        <option>Maintain</option>
        <option>Loose Weight</option>
       </select>
      <br/>
      <input type="submit" value="submit" />
      </form>
      <div>
        <p>Status</p>
        <textarea />
       

      </div>

     </div>

   )

 }

}