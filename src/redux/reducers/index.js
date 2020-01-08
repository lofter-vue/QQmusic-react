import {combineReducers} from "redux";
import ForYou from "./reducer-forou.js";
import Ticket from './reducer-ticket';
import navArr from './reducer-navArr'

export default combineReducers({
  foryou:ForYou,
  Ticket,
  navArr
})