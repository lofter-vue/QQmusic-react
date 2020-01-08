import {SAVEALBUM} from "../action_type";

const albumList = []
export default function operaCount(preState = albumList, action) {
  let { type,data } = action
  let newState
  switch (type) {
    case SAVEALBUM:
      newState = data
      return newState
    default:
      return preState
  }
}