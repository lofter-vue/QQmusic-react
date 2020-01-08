import {SAVETICKETALL} from '../action_type';

// const nameInitialState = {
//   banners:[],
//   all:[]
// }
export default (state = {}, action) => {

  let {type,data} = action;
  let newState
  switch (type) {
    case SAVETICKETALL:
      newState = {
        banners:data.getFirstData.data.banners,
        all:data.getFirstData.data.classes,
      }
      return newState
    default:
      return state
  }
}