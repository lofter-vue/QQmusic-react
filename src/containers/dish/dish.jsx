import React,{Component} from 'react'
import {Route,NavLink,Redirect} from "react-router-dom"
import './css/index.less'
import Content from './content'
export default class MyComponent extends Component{
  state = {
    category:['内地','港台','欧美','韩国','日本','其他'],
    currentIndex:0   //0表示内地 1表示港台 以此类推
  }
  select(index){
    this.setState({
      currentIndex:index 
    })
    console.log(index)
  }

  render(){
    return (
      <div className="dish_container">
        <div className="top"></div>
        <header className="nav">
          <ul className="tagList">
            {
              this.state.category.map((kind,index)=>{
                  return (
                      <li className={`${this.state.currentIndex === index ? 'active': ''}`} onClick={()=>this.select(index)} key={index}>
                      <NavLink className="item" to={`/index/music/dish/${index}` }>{kind}</NavLink>
                      <Redirect to="/index/music/dish/0"></Redirect>
                      </li>
                  )
              })
            }
          </ul>
        </header>
        <Route path="/index/music/dish/:id" component={Content}></Route>
      </div>
    )
  }
}