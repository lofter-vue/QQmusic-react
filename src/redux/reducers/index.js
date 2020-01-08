import {combineReducers} from "redux";
import ForYou from "./reducer-forou.js";
import Dish from "./reducer-dish";
import  Album from './reducer-album.js'

export default combineReducers({
  foryou:ForYou,
  savedish:Dish,
  album:Album
})