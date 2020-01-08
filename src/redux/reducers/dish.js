import {SAVEDISHINFO} from "../action_type";

const user = {}
export default function operaCount(preState = user, action) {
  let { type } = action
  let newState
  switch (type) {
    case SAVEDISHINFO:
      newState = SAVEDISHINFO
      return newState
    default:
      return preState
  }
}