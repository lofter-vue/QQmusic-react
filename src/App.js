import React,{Component} from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import Login from './containers/home/home.jsx' 
import Singer from './containers/singer/singer.jsx' 


export default class App extends Component{
  render(){
    return (
      <div className="app">
        <Switch>
          <Route path="/home" component={Login}/>
          <Route path="/singer" component={Singer}/>
          <Redirect to='/home'/>
        </Switch>
      </div>
    )
  }
}