import React,{Component} from 'react'
import './css/index.less';
import Header from "./header/header.jsx";
import {Route,Switch,Redirect} from 'react-router-dom'

import Music from "../music/music.jsx";
import MyMusic from "../mymusic/mymusic.jsx";
import Client from "../client/client.jsx";
import Open from "../open/open.jsx";
import Vip from "../vip/vip.jsx";



export default class Home extends Component{
  render(){
    return (
      <div className='index'>
        <div className='header'>
          <Header/>
        </div>
        <div className='container'>
          <Switch>
            <Route path="/index/music" component={Music}/>
            <Route path="/index/mymusic" component={MyMusic}/>
            <Route path="/index/client" component={Client}/>
            <Route path="/index/open" component={Open}/>
            <Route path="/index/vip" component={Vip}/>
            <Redirect to="/index/music"/>
          </Switch>
        </div>
      </div>
    )
  }
}