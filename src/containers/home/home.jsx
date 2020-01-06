import React,{Component} from 'react'
import {Route,Switch,NavLink,Link} from 'react-router-dom'
import { Icon } from "antd";
import './css/home.less'
import Foryou from "./music/foryou/foryou";
import Classic from "./music/classic/classic";
import Recommend from "./music/recommend/recommend";

import New from "./new/new/new";
import Inland from "./new/inland/inland";
import Ht from "./new/ht/ht";

import Wonderful from "./wonderful/wonderful/wonderful.jsx";
import GiveYou from "./wonderful/giveyou/giveyou.jsx";
import Ranking from "./wonderful/ranking/ranking.jsx";
import Hmv from "./wonderful/hmv/hmv.jsx";

export default class Home extends Component{
  state = {
    index : 0
  }

  chooes = (e,index) => {
    this.setState({index})
    var arr = Array.from(this.refs.list1.children)
    arr.forEach(item =>{
      item.classList.remove('hActive')
    })
    e.target.classList.add('hActive')
  }

  render(){
    const {index} = this.state
    return (
      <div className='home'>
        <div className='home-music-wrapper'>
          <div className='home-music-inner'>
            <div className='home-header'>
              歌单推荐
            </div>
            <div className='home-music-nav'>
              <span className='home-music-nav-wrapper'>
                <NavLink className='home-list' activeClassName='homeAcitve' to='/index/music/home/foryou'>为你推荐</NavLink>
                <NavLink className='home-list' activeClassName='homeAcitve' to='/index/music/home/classic'>经典</NavLink>
                <NavLink className='home-list' activeClassName='homeAcitve' to='/index/music/home/recommend'>九月推荐</NavLink>
                <span className='home-list'>网络歌曲</span>
                <span className='home-list'>官方歌曲</span>
                <span className='home-list'>情歌</span>
              </span>
            </div>
            <div className='home-music-contianer'>
              <Switch>
                <Route path="/index/music/home/foryou" component={Foryou}/>
                <Route path="/index/music/home/classic" component={Classic}/>
                <Route path="/index/music/home/recommend" component={Recommend}/>
              </Switch>
            </div>
          </div>
          <div className='swiper-button-prev'></div>
          <div className='swiper-button-next'></div>
        </div>
        <div className='home-music-wrapper'>
          <div className='home-music-inner'>
            <div className='home-header'>
              新歌首发
            </div>
            <div className='home-music-nav'>
              <span className='playAll'>
                <Icon type="play-circle" />
                播放全部
              </span>
              <span className='home-music-nav-wrapper' ref='list1'>
                <span className='home-list hActive' onClick={(e)=>{this.chooes(e,0)}}>最新</span>
                <span className='home-list' onClick={(e)=>{this.chooes(e,1)}}>内地</span>
                <span className='home-list' onClick={(e)=>{this.chooes(e,2)}}>港台</span>
                <span className='home-list' onClick={(e)=>{this.chooes(e,3)}}>欧美</span>
                <span className='home-list' onClick={(e)=>{this.chooes(e,4)}}>韩国</span>
                <span className='home-list' onClick={(e)=>{this.chooes(e,5)}}>日本</span>
              </span>
            </div>
            <div className='home-music-contianer'>
              <div className={`${index===0 ? '' : 'hide'}`}><New/></div>
              <div className={`${index===1 ? '' : 'hide'}`}><Inland/></div>
              <div className={`${index===2 ? '' : 'hide'}`}><Ht/></div>
            </div>
          </div>
        </div>      
        <div className='home-music-wrapper' style={{height:'380px'}}>
          <div className='home-music-inner'>
            <div className='home-header'>
              精彩推荐
            </div>
            <div className='home-music-contianer'>
              <Wonderful/>
            </div>
          </div>
          <div className='swiper-button-prev'></div>
          <div className='swiper-button-next'></div>
        </div> 
        <div className='home-music-wrapper'>
          <div className='home-music-inner'>
            <div className='home-header'>
              新碟首发
            </div>
            <div className='home-music-nav'>
              <span className='home-music-nav-wrapper'>
                <span className='home-list homeAcitve'>为你推荐</span>
                <span className='home-list'>经典</span>
                <span className='home-list'>九月推荐</span>
                <span className='home-list'>网络歌曲</span>
                <span className='home-list'>官方歌曲</span>
                <span className='home-list'>情歌</span>
              </span>
              <span className='more'>更多 ></span>
            </div>
            <div className='home-music-contianer'>
              <GiveYou/>
            </div>
          </div>
        </div>
        <div className='home-music-wrapper'>
          <div className='home-music-inner'>
            <div className='home-header'>
              排行榜
              <span className='more'>更多 ></span>
            </div>
            <div className='home-music-contianer'>
              <Ranking/>
            </div>
          </div>
        </div>
        <div className='home-music-wrapper'>
          <div className='home-music-inner'>
            <div className='home-header'>
              M V
            </div>
            <div className='home-music-nav'>
              <span className='home-music-nav-wrapper'>
                <span className='home-list homeAcitve'>精选</span>
                <span className='home-list'>内地</span>
                <span className='home-list'>韩国</span>
                <span className='home-list'>港台</span>
                <span className='home-list'>欧美</span>
                <span className='home-list'>日本</span>
              </span>
              <span className='more'>更多 ></span>
            </div>
            <div className='home-music-contianer'>
              <Hmv/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}