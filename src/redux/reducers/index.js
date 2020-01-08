import {combineReducers} from "redux";
import ForYou from "./reducer-forou.js";
import Ticket from './reducer-ticket';
import navArr from './reducer-navArr'
import Dish from "./reducer-dish";
import  Album from './reducer-album.js'

export default combineReducers({
  foryou:ForYou,
  Ticket,
  navArr,
  savedish:Dish,
  album:Album
})