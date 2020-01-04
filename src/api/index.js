import myAxios from "./myaxios.js";
import {BASE_URL} from "../config";

//用户登录发送请求
export const reqLogin = (username,password) => myAxios.post(BASE_URL+`/login`,{username,password}) 

