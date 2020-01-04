import {SAVEUSERINFO} from "../action_type";

const user = {}
export default function operaCount(preState = user, action) {
  let { type, data } = action
  let newState
  switch (type) {
    case SAVEUSERINFO:
      newState = SAVEUSERINFO
      return newState
    default:
      return preState
  }
}