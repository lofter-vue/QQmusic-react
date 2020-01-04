import React,{Component} from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import Login from './containers/home/home.jsx' 


export default class App extends Component{
  render(){
    return (
      <div className="app">
        <Switch>
          <Route path="/home" component={Login}/>
          <Redirect to='/home'/>
        </Switch>
      </div>
    )
  }
}