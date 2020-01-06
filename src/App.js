import React,{Component} from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import Index from './containers/index/index.jsx' 


export default class App extends Component{
  render(){
    return (
      <div className="app">
        <Switch>
          <Route path="/index" component={Index}/>
          <Redirect to='/index/music/home'/>
        </Switch>
      </div>
    )
  }
}