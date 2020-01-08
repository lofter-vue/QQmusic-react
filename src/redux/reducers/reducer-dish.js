import {SAVEDISHINFO} from "../action_type";

const savedish = []
export default function operaCount(preState = savedish, action) {
  let { type, data } = action
  let newState
  switch (type) {
    case SAVEDISHINFO:
      newState = data
      return newState
    default:
      return preState
  }
}