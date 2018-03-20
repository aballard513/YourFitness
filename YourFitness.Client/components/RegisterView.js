
import React from 'react';
import axios from 'axios';

//import RegisterView from '../components/RegisterView';

import {connect} from 'react-redux';

var uri = 'http://localhost:57515/api/user'
export default class RegisterView extends React.Component {

  constructor(props){
    super(props);
    this.state = {user : {firstName: "", lastName: "", email: "", password: "", weight : "",
    height: "", goal: ""}, result: ""}
    this.AddUser = this.AddUser.bind(this);
    this.handleUser = this.handleUser.bind(this);
  }

AddUser(e){

  
  var user = this.state.user;
 
  axios.post(
    'http://localhost:57515/api/user',
    user
  )
  .then(response=> {
    //handle success
    console.log("success")
    //this.setState({result : "success"})
    

})
.catch(response=> {
    //handle error;
    console.log(response);
});

this.setState({user: {firstName: "", lastName: "", email: "", password: "", weight : "",
  height: "", goal: ""}})
  console.log(this.state.result)

}

handleUser(evt){
  var property = evt.target.name;
  console.log(property)
  if(property == "FirstName")
  {   console.log("first")
      this.setState({user: {firstName: evt.target.value, lastName : this.state.user.lastName, email : this.state.user.email, password: this.state.user.password, weight : this.state.user.weight,
      height: this.state.user.height, goal: this.state.user.goal}})
  }
  else if(property == "LastName")
  {
      console.log("last")
      this.setState({user: {firstName: this.state.user.firstName, lastName: evt.target.value, email : this.state.user.email, password: this.state.user.password, weight : this.state.user.weight,
        height: this.state.user.height, goal: this.state.user.goal}})
  }
  else if(property == "Email")
  {
      //console.log("email")
      this.setState({user: {firstName: this.state.user.firstName, lastName: this.state.user.lastName, email: evt.target.value, password: this.state.user.password, weight : this.state.user.weight,
        height: this.state.user.height, goal: this.state.user.goal}})
      //console.log(this.state.user)
  }
  else if(property == "Password")
  {
      //console.log("email")
      this.setState({user: {firstName: this.state.user.firstName, lastName: this.state.user.lastName, email: evt.target.value, password: evt.target.value, weight : this.state.user.weight,
        height: this.state.user.height, goal: this.state.user.goal}})
      //console.log(this.state.user)
  }
  else if(property == "Weight")
  {
      //console.log("email")
      this.setState({user: {firstName: this.state.user.firstName, lastName: this.state.user.lastName, email: this.state.user.email, password: this.state.user.password, weight : evt.target.value,
        height: this.state.user.height, goal: this.state.user.goal}})
      //console.log(this.state.user)
  }
  else if(property == "Height")
  {
      //console.log("email")
      this.setState({user: {firstName: this.state.user.firstName, lastName: this.state.user.lastName, email: this.state.user.email, password: this.state.user.password, weight : this.state.user.weight,
        height: evt.target.value, goal: this.state.user.goal}})
      //console.log(this.state.user)
  }
  else if(property == "Goal")
  {
      //console.log("email")
      this.setState({user: {firstName: this.state.user.firstName, lastName: this.state.user.lastName, email: this.state.user.email, password: this.state.user.password, weight : this.state.user.weight,
        height: this.state.user.height, goal: evt.target.value}})
      //console.log(this.state.user)
  }
  //console.log(this.state.user)
}

  
 render () {
   
   return (
     <div>
       <p>Please Register</p>
       <br/>
       <form onSubmit = {this.AddUser} >
        <label name= "FirstNameLbl">FirstName</label>
       <input type="text" name="FirstName" ref="FirstName" value={this.state.user.firstName} onChange={(e) => this.handleUser(e)}/>
       <br />
       <label name= "LastNameLbl">LastName</label>
       <input type="text" name="LastName" value={this.state.user.lastName} onChange={(e) => this.handleUser(e)}/><br/>
       <label name= "EmailLbl">Email</label>
       <input type="text" name="Email" value={this.state.user.email} onChange={(e) => this.handleUser(e)}/><br/>
       <label name= "PasswordLbl">Password</label>
       <input type="text" name="Password" value={this.state.user.password} onChange={(e) => this.handleUser(e)}/><br/>
       <label name= "WeightLbl">Weight(lbs)</label>
       <input type="text" name="Weight" value={this.state.user.weight} onChange={(e) => this.handleUser(e)}/><br/>
       <label name= "HeightLbl">Height(in)</label>
       <input type="text" name="Height" value={this.state.user.height} onChange={(e) => this.handleUser(e)}/><br/>
       <label name= "GoalLbl">Goal</label>
       <br/>
       <select type="text" name="Goal">
        <option>Select</option>
        <option value={this.state.user.goal} onChange={(e) => this.handleUser(e)}>'Gain'>Gain Weight</option>
        <option value={this.state.user.goal} onChange={(e) => this.handleUser(e)}>Maintain</option>
        <option value={this.state.user.goal} onChange={(e) => this.handleUser(e)}>Loose Weight </option>
       </select>
      <br/>
      <input type="submit" value="submit" />
      </form>
      <div>
        <p>Status</p>
        <textarea defaultValue= {this.state.result}/>
       

      </div>

     </div>

   )
  }
 }

