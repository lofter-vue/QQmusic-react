import React, { Component } from 'react'
import { NavLink} from 'react-router-dom'
import "./css/header.less";
import Logo from "./img/logo.png";
import {Icon} from 'antd';

export default class MyComponent extends Component {
  render() {
    return (
      <div className='header-wrapper'>
        <span className='logo'>
          <img src={Logo} alt='logo'></img>
        </span>
        <ul>
          {/* <li><Link to='/music'>音乐馆</Link></li> */}
          <li><NavLink className='list' to='/index/music/home' activeClassName='listHover'>音乐馆</NavLink></li>
          <li><NavLink className='list' to='/index/mymusic' activeClassName='listHover'>我的音乐</NavLink></li>
          <li><NavLink className='list' to='/index/client' activeClassName='listHover'>客户端</NavLink></li>
          <li><NavLink className='list' to='/index/open' activeClassName='listHover'>开放平台</NavLink></li>
          <li><NavLink className='list' to='/index/vip' activeClassName='listHover'>vip</NavLink></li>
        </ul>
        <div className='search'>
          <input type="text" placeholder='搜索音乐、MV、歌单、用户'/>
          <Icon className='ico' type="search" />
        </div>
        <span className='search-btn'>登录</span>
        <div className='right'>
          <button className='btn-left'>开通绿钻豪华版</button>
          <button className='btn-right'>开通付费包</button>
        </div>
      </div>
    )
  }
}