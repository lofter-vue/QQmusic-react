import React,{Component} from 'react'
import { Icon } from "antd";
// import {Route,Switch,Redirect,NavLink} from 'react-router-dom'
import './css/home.less'

export default class MyComponent extends Component{
  render(){
    return (
      <div className='home'>
        <div className='home-music-wrapper'>
          <div className='home-music-inner'>
            <div className='home-header'>
              歌单推荐
            </div>
            <div className='home-music-nav'>
              <span className='home-music-nav-wrapper'>
              {/* to='/index/music/home/foryou' */}
                <span className='home-list' >为你推荐</span>
                <span className='home-list'>经典</span>
                <span className='home-list'>九月推荐</span>
                <span className='home-list'>网络歌曲</span>
                <span className='home-list'>官方歌曲</span>
                <span className='home-list'>情歌</span>
              </span>
            </div>
            <div className='home-music-contianer'></div>
          </div>
          <div className='home-music-left'>
            <Icon type="left" />
          </div>
          <div className='home-music-right'>
            <Icon type="right" />
          </div>
        </div>
      </div>
    )
  }
}