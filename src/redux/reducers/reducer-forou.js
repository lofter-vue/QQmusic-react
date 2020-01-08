import {SAVEFORYOULIST} from "../action_type";

const foryouList = []
export default function operaCount(preState = foryouList, action) {
  let { type,data } = action
  let newState
  switch (type) {
    case SAVEFORYOULIST:
      newState = data
      return newState
    default:
      return preState
  }
}