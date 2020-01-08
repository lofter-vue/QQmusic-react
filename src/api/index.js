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

//获取票务总数据
export const reqTicketAll = () => myAxios.get(BASE_URL+'/index/music/ticketAll')

//获取地理信息
export const reqTicket = () => myAxios.get(BASE_URL+'/index/music/ticketing')

//获取livehouse数据
export const reqLivehouse = () => myAxios.get(BASE_URL+'/index/music/livehouse')

//获取演唱会数据
export const reqConcert  = () => myAxios.get(BASE_URL+'/index/music/yanchanghui')
