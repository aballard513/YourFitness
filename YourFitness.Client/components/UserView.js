import React from 'react';
import axios from 'axios';
import store from '../store'
import HomeView from './Home.js'
import Update from './Update.js'
import User from '../reducers/User';

export default class UserView extends React.Component {

    
    constructor(props){
      super(props);
      this.state = {view : "initial", objs : [], updateduser : {}, id: null}
      this.checkState = this.checkState.bind(this);
      this.ViewUsers = this.ViewUsers.bind(this);
      this.Register = this.Register.bind(this);
      this.UpdateUser = this.UpdateUser.bind(this);
    }

    ViewUsers(e){

        var bodyFormData = new FormData();
      
        axios({
          method: 'get',
          url: 'http://localhost:57515/api/user',
          config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then((response) => {
          //handle success
          this.setState( {objs : response.data});
      })
      .catch(function (response) {
          //handle error;
          console.log("failed");
      });

      this.setState({view: "users"});
      }

      checkState(){
        return this.state.view;
        }

        Register(){
            this.setState({view: "register"})
        }

        updateState(){
            if(this.checkState() == "initial")
            {
                this.setState({view : "user"})
            }
            else{
                this.setState({view : "initial"})
            }
        }

    UpdateUser(evt){
        this.setState({id: evt.target.id})
        this.setState({view : "update"})
    }

    render(){
        if(this.checkState() == "initial"){
            return <div><button onClick={this.ViewUsers}>View All Users</button></div>
        }
        else if(this.checkState() == "register")
        {
            return (
                    <div>
                        <HomeView />
                    </div>
                    )
        }
        else if(this.checkState() == "update")
        {
            var userid = this.state.id;
            var users = this.state.objs;
            var user = users[userid-1];
            let form = (
            <div>
            <h1>Update Information</h1>
            <form>
            <div>
                <label>FirstName</label>
                <input type="text" name="firstName" placeholder={user.firstName} /><br/>
                <label>Last Name</label>
                <input type="text" name="lastName" placeholder={user.lastName} /><br/>
                <label>Email</label>
                <input type="text" name="email" placeholder= {user.email} /><br/>
            </div>
            </form>
            </div>
            )
            return (
                <div>
                        {form}
                </div>

            )
        }
        else
        {
            let el = this.state.objs.map(objects =>
                <div key ={objects.id} > {objects.firstName} {objects.lastName} <button id ={objects.id} onClick={this.UpdateUser}>update</button></div>
            )
            
            return(<div>
            {el}
            <button onClick={this.Register}>Back</button>
            </div>
            )}
        }
}