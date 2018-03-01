
import React from 'react';
//import RegisterView from '../components/RegisterView';

import {connect} from 'react-redux';

export default class RegisterView extends React.Component {

  AddUser(data){
    
    console.log(data)
    //fetch('http://localhost:57515/Register/Add')
//.then((result) => {
  // Get the result
  // If we want text, call result.text()
 // return result.json();
//}).then((jsonResult) => {
  // Do something with the result
  //console.log(jsonResult);
//})

}
  
 render () {

   return (
    

     <div>
       <p>Please Register</p>
       <br/>
       <form onSubmit = {this.AddUser}>
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
       <br/>
       <select type="text" name="Goal">
        <option>Select</option>
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