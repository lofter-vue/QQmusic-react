import {SAVETICKET} from '../action_type';

// const nameInitialState = {
//   navArr:{}
// }
export default (state = {}, action) => {

  let {type,data} = action;
  let newState
  switch (type) {
    case SAVETICKET:
      newState = {
        navArr:data
      }
      return newState
    default:
      return state
  }
}