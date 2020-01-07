import {BASE_URL} from "../config";
import axios from "axios";

//用户登录发送请求
// export const reqLogin = (username,password) => myAxios.post(BASE_URL+`/login`,{username,password}) 
export const reqDish = () =>axios.get(BASE_URL+'/index/music/dish') 

