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
            <Redirect to="/index/music"/>
          </Switch>
        </div>
        <div className='container'>
          <Switch>
            <Route path="/index/music/home" component={Home}/>
            <Route path="/index/music/singer" component={Singer}/>
            <Route path="/index/music/dish" component={Dish}/>
            <Route path="/index/music/ranking" component={Ranking}/>
            <Route path="/index/music/classify" component={Classify}/>
            <Route path="/index/music/radio" component={Rdio}/>
            <Route path="/index/music/mv" component={Mv}/>
            <Route path="/index/music/album" component={Album}/>
            <Route path="/index/music/ticketing" component={Ticketing}/>
          </Switch>
        </div>
      </div>
    )
  }
}