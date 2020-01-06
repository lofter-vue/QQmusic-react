import React,{Component} from 'react'
import './css/index.less'
import Content from './content'
var dish = require('./json/dish.json')
export default class MyComponent extends Component{
  state = {
    category:['内地','港台','欧美','韩国','日本','其他'],
    currentIndex:0
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
              dish.category.map((kind,index)=>{
                  return (
                      <li className={`${this.state.currentIndex === index ? 'active': ''} item`} onClick={()=>this.select(index)} key={index}>{kind}</li>
                  )
              })
            }
          </ul>
        </header>
        <Content></Content>
      </div>
    )
  }
}