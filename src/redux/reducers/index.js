import {combineReducers} from "redux";
import ForYou from "./reducer-forou.js";
import Dish from "./reducer-dish";

export default combineReducers({
  foryou:ForYou,
  savedish:Dish
})