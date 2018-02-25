import { SET_USER } from '../types/User';

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