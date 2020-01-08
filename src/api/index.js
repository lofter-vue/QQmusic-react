import {BASE_URL} from "../config";
// import axios from "axios";
import myAxios from "./myaxios";

//用户登录发送请求
// export const reqLogin = (username,password) => myAxios.post(BASE_URL+`/login`,{username,password}) 
export const reqDish = () =>myAxios.get(BASE_URL+'/index/music/dish')

//数字专辑获取数据
export const reqAlbum = () =>myAxios.get(BASE_URL+'/index/music/album')

//首页为你推荐列表请求
export const reqForyou = () =>myAxios.get(BASE_URL+'/index/music/foryou')
