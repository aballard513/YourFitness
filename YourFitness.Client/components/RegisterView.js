
import React from 'react';
import axios from 'axios';

//import RegisterView from '../components/RegisterView';

import {connect} from 'react-redux';

var uri = 'http://localhost:57515/api/user'
export default class RegisterView extends React.Component {

AddUser(e){

  var bodyFormData = new FormData();
  bodyFormData.set('FirstName', this.state.FirstName);
  bodyFormData.set('LastName', this.state.LastName);
  bodyFormData.set('Weight', this.state.Weight);
  bodyFormData.set('Height', this.state.Height);

  axios({
    method: 'post',
    url: 'http://localhost:57515/api/user',
    data: bodyFormData,
    config: { headers: {'Content-Type': 'multipart/form-data' }}
  })
  .then(function (response) {
    //handle success
    console.log("success");
})
.catch(function (response) {
    //handle error;
    console.log(response);
});

}





  
 render () {

   return (
    

     <div>
       <p>Please Register</p>
       <br/>
       <form onSubmit = {this.AddUser} >
        <label name= "FirstNameLbl">FirstName</label>
       <input type="text" ref="FirstName"/>
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
        <option>'Gain'>Gain Weight</option>
        <option >Maintain</option>
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