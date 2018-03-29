/*import React from 'react';
import axios from 'axios';

export default class RegisterFunctions extends React.Component {

    constructor(props){
        super(props);
        this.ValidateFields = this.ValidateFields.bind(this);
       this.AddUser = this.AddUser;
      
      }

      ValidateFields(u)
      {
        let fields = u;
        
        let errors = {};
        let formIsValid = true;
        console.log(fields["goal"]);
              if(!fields["firstName"] | fields["firstName"] ==" "){
                 formIsValid = false;
                 errors["fname"] = "Please enter you first name";
              }
              if(!fields["lastName"] | fields["lastName"] ==" "){
                formIsValid = false;
                errors["lname"] = "Please enter your last name";
              }
      
            if(!fields["email"] | fields["email"] == " " | !this.validateEmail(fields["email"])){
                formIsValid = false;
                errors["email"] = "Please enter a valid email";
             }
      
             if(!fields["password"] | fields["password"] == " "){
               formIsValid = false;
               errors["password"] = "Please enter a valid password";
             }
             if(!fields["weight"] | fields["weight"] == " "){
              formIsValid = false;
              errors["weight"] = "Please enter your weight";
            }
           if(!fields["height"] | fields["height"] == " "){
             formIsValid = false;
             errors["height"] = "Please enter your height";
           }
      
           if(!fields["goal"] | fields["goal"] == "Select"){
            formIsValid = false;
            errors["goal"] = "Please select a goal";
          }
         // console.log(this.state.user);
                        this.setState({errors: errors});
              return formIsValid;
      }


      AddUser(u){
  
        var user = u;
        if(this.ValidateFields(user)){
        
        axios.post(
          'http://localhost:57515/api/user',
          user
        )
        .then(response=> {
          //handle success
          console.log(response)
      })
      .catch(response=> {
          //handle error;
          console.log(response);
      });
      
      this.setState({user: {firstName: "", lastName: "", email: "", password: "", weight : "",
        height: "", goal: ""}})
        }
        else{
          console.log("fail");
        }
      
      }
      
      ShowPassword(evt)
      {
        console.log(this.state.password);
        
        if(this.state.password =="password")
        {
            this.setState({password: "text"});
            this.setState({icon: "fa fa fa-eye-slash"});
        }
        else{
          
          this.setState({password: "password"});
          this.setState({icon: "fa fa fa-eye"});
        }
      }

      validateEmail(email){
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

}*/