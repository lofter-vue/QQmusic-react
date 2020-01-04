import {combineReducers} from "redux";
import LoginReducer from "./reducer-login.js";

export default combineReducers({
  login:LoginReducer
})