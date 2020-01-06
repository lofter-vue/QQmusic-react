import React,{Component} from 'react'
import {Route,Switch,Redirect,NavLink} from 'react-router-dom'
import './css/music.less';
import Home from "../home/home";
import Singer from "../singer/singer";
import Dish from "../dish/dish";
import Ranking from "../ranking/ranking";
import Classify from "../classify/classify";
import Radio from "../radio/radio";
import Mv from "../mv/mv";
import Album from "../album/album";
import Ticket from "../Ticketing/Ticketing";

export default class MyComponent extends Component{
  render(){
    return (
      <div className='music'>
        <div className='music-nav'>
          <ul>
            <li><NavLink to='/index/music/home' activeClassName='active' className='music-list'>首页</NavLink></li>
            <li><NavLink to='/index/music/singer' activeClassName='active' className='music-list'>歌手</NavLink></li>
            <li><NavLink to='/index/music/dish' activeClassName='active' className='music-list'>新碟</NavLink></li>
            <li><NavLink to='/index/music/ranking' activeClassName='active' className='music-list'>排行榜</NavLink></li>
            <li><NavLink to='/index/music/classify' activeClassName='active' className='music-list'>分类歌单</NavLink></li>
            <li><NavLink to='/index/music/radio' activeClassName='active' className='music-list'>电台</NavLink></li>
            <li><NavLink to='/index/music/mv' activeClassName='active' className='music-list'>MV</NavLink></li>
            <li><NavLink to='/index/music/album' activeClassName='active' className='music-list'>数字专辑</NavLink></li>
            <li><NavLink to='/index/music/ticket' activeClassName='active' className='music-list'>票务</NavLink></li>
          </ul>
        </div>
      </div>
    )
  }
}