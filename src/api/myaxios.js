import axios from "axios";
import qs from "querystring";
import NProgress from 'nprogress'//进度条库
import { message } from "antd";
import store from '../redux/store.js'
import {createDeleteUser} from "../redux/action_creators/login_action.js";
import 'nprogress/nprogress.css'

//装饰器语法
const instence = axios.create({
  timeout: 4000
})
//请求拦截器
instence.interceptors.request.use((config) => {
  NProgress.start()
  //从redux中获取登录用户的token
  const { token } = store.getState().userInfo
  //若取到了token，将token数据放入配置项config的头中
  if (token) config.headers.Authorization = 'atguigu_' + token
  const { method, data } = config
  //判断是否发送的是post请求，并将发送的数据转为urlencoded形式，默认为json
  if (method.toLowerCase() === 'post') {
    if (data instanceof Object) {
      config.data = qs.stringify(data)
    }
  }
  return config
})

//响应拦截器
instence.interceptors.response.use(
  //请求成功
  (response) => {
    NProgress.done()
    return response.data
  },
  //请求失败
  (error) => {
    NProgress.done()
    let { status } = error.response
    if (status === 401) {
      console.log('用户名错误')
      message.error('用户校验失败，请重新登陆')
      store.dispatch(createDeleteUser())
    } else {
      message.error(error.message)
    }
    return Promise.reject()
  }
)

export default instence;
