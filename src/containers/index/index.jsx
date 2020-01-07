import React,{Component} from 'react'
import './css/index.less';
import Header from "./header/header.jsx";
import {Route,Switch,Redirect} from 'react-router-dom'

import Music from "../music/music.jsx";
import MyMusic from "../mymusic/mymusic.jsx";
import Client from "../client/client.jsx";
import Open from "../open/open.jsx";
import Vip from "../vip/vip.jsx";

import Home from "../home/home";
import Singer from "../singer/singer";
import Dish from "../dish/dish";
import Ranking from "../ranking/ranking";
import Classify from "../classify/classify";
import Rdio from "../radio/radio";
import Mv from "../mv/mv";
import Album from "../album/album";
import Ticketing from "../ticketing/ticketing";



export default class Index extends Component{
  render(){
    return (
      <div className='index'>
        <div className='header'>
          <Header/>
        </div>
        <div className='container-nav'>
          <Switch>
            <Route path="/index/music" component={Music}/>
            <Route path="/index/mymusic" component={MyMusic}/>
            <Route path="/index/client" component={Client}/>
            <Route path="/index/open" component={Open}/>
            <Route path="/index/vip" component={Vip}/>
            <Redirect to="/index/music/home"/>
          </Switch>
        </div>
        <div className='container'>
          <Switch>
            <Route path="/index/music/home/" component={Home}/>
            <Route path="/index/music/singer" component={Singer}/>
            <Route path="/index/music/dish" component={Dish}/>
            <Route path="/index/music/ranking" component={Ranking}/>
            <Route path="/index/music/classify" component={Classify}/>
            <Route path="/index/music/radio" component={Rdio}/>
            <Route path="/index/music/mv" component={Mv}/>
            <Route path="/index/music/album" component={Album}/>
            <Route path="/index/music/ticketing" component={Ticketing}/>
            {/* <Redirect to="/index/music/"/> */}
          </Switch>
        </div>
        <div className="footer">
          <div className="footer_main">
            <div className="footer_main_left">
              <div className="left_one">
                <h3>下载QQ音乐客户端</h3>
              </div>
              <ul className="left_two">
                <li>
                  <a href="//y.qq.com/download/">
                    <i className="iconfont icon-weiruan"></i>
                    <p>PC版</p>
                  </a>  
                </li>
                <li>
                  <a href="//y.qq.com/download/">
                    <i className="iconfont icon-mac"></i>
                    <p>Mac版</p>
                  </a>  
                </li>
                <li>
                  <a href="//y.qq.com/download/">
                    <i className="iconfont icon-anzhuo-copy"></i>
                    <p>Android版</p>
                  </a>  
                </li>
                <li>
                  <a href="//y.qq.com/download/">
                    <i className="iconfont icon-pingguo"></i>
                    <p>iphone版</p>
                  </a>  
                </li>
                
              </ul>
              <div className="left_three">开放平台</div>
              <div className="left_four">
                <a href="//y.qq.com/artists">QQ音乐开放平台</a>
                <a href="http://y.tencentmusic.com/">腾讯音乐人</a>
              </div>
            </div>
            <div className="footer_main_left footer_main_mid">
              <div className="left_one">
                <h3>特色产品</h3>
              </div>
              <ul className="left_two">
                <li>
                  <a href="//y.qq.com/download/">
                    <i className="iconfont icon-quanminKge"></i>
                    <p>全名K歌</p>
                  </a>  
                </li>
                <li>
                  <a href="//y.qq.com/download/">
                    <i className="iconfont icon-QMshense"></i>
                    <p>Supper Sound</p>
                  </a>  
                </li>
                <li>
                  <a href="//y.qq.com/download/">
                    <i className="iconfont icon-qp"></i>
                    <p>QPlay</p>
                  </a>  
                </li> 
              </ul>
              <div className="left_teshu">
                <a href="http://y.qq.com/y/static/down/car_introduce.html">
                  <p>车载互联</p>
                </a>
                <a href="http://y.qq.com/y/static/down/car_introduce.html">
                  <p>QQ演出</p>
                </a>
          
              </div>
              <div className="left_three">TME集团官网</div>
              <div className="left_four">
                <a href="//y.qq.com/artists">腾讯音乐</a>
              </div>
            </div>
            <div className="footer_main_right">
              <div className="right_one">
                <h3>合作链接</h3>
              </div>
              <ul className="right_two">
                <li>CJ ENm</li>
                <li>腾讯视频</li>
                <li>手机QQ空间</li>
                <li>最新版QQ</li>
                <li>腾旭社交广告</li>
                <li>电脑管家</li>
                <li>QQ浏览器</li>
                <li>腾讯微云</li>
                <li>腾讯云</li>
                <li>企鹅FM</li>
                <li>智能电视网</li>
                <li>当贝市场</li>
              </ul>
            </div>
          </div>
          <div className="footer_bottom">
            <div className="bottom_top">
              <a href="http://www.tencent.com/">关于腾讯</a>|
              <a href="http://www.tencent.com/">About Tenent</a>|
              <a href="http://www.tencent.com/">服务条款</a>|
              <a href="http://www.tencent.com/">用户服务协议</a>|
              <a href="http://www.tencent.com/">隐私政策</a>|
              <a href="http://www.tencent.com/">权力声明</a>|
              <a href="http://www.tencent.com/">广告服务</a>|
              <a href="http://www.tencent.com/">腾讯招聘</a>|
              <a href="http://www.tencent.com/">客服中心</a>|
              <a href="http://www.tencent.com/">网站导航</a>
            </div>
            <div className="bottom_mid">
              Copyright @ 1998 - 2000 Tencent.All Right Reserved
            </div>
            <div className="bottom_footer">
            <a href="http://www.tencent.com/">腾讯公司</a>
            <a href="http://www.tencent.com/">版权所有</a>
            <a href="http://www.tencent.com/">腾讯网络文化经营许可证</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}