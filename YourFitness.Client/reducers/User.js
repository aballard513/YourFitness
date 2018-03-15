import { SET_USER } from '../types/User';
import axios from 'axios';

export const addUser = (user) => {

    return dispatch => {
  
      dispatch({
  
         type: SET_USER,
  
         payload: {
  
          user
  
         }
  
      })
  
    }
  
  }

  export const getUser = () => {

    return users => {
        axios({
          method: 'get',
          url: 'http://localhost:57515/api/user',
          //data: bodyFormData,
          config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(function (response) {
          //handle success
          response.data.forEach(response => {
              Console.log(response.FirstName)
          });
      })
      .catch(function (response) {
          //handle error;
          console.log(response);
      });
  
  }
  }

const initState = {

 user: ''

}

export default (state = initState, action) => {

switch(action.type) {

 case SET_USER :

 return {_state, user: action.payload.user}

 default :

 return state

 }

}