import axios from "axios";
import NProgress from "nprogress";
import 'nprogress/nprogress.css'

//装饰器语法
const instence = axios.create({
  timeout: 4000
})
//请求拦截器
instence.interceptors.request.use((config) => {
  NProgress.start()
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
      console.log('用户校验失败，请重新登陆')
    } else {
      console.log(error.message)
    }
    return Promise.reject()
  }
)

export default instence;
