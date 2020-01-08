import React,{Component} from 'react'
import {Pagination} from 'antd'
import './css/index.less'
var data = require('./json/dish.json')
export default class MyComponent extends Component{

  currentIndex = this.props.match.params.id
  handleChange(currentIndex,current){
    console.log(currentIndex,current)
    data.new_album.data[currentIndex].splice(currentIndex*current+19)
    console.log( data.new_album.data[currentIndex])
  }
  render(){
    let currentIndex = this.props.match.params.id
    return (
      <div>
        <div className="play_all">
          <ul className="play_list">
          { 
            data.new_album.data[currentIndex].map((playItem,index)=>{
                      return (
                        <li key={index} className="play_item">
                          <div className="pic">
                            <img className="album_pic" src={playItem.pic} alt=""/>
                            <i className="iconfont icon-bofang"></i>
                          </div>
                          <div className="text">
                            <h4 className="album">
                              <span>{playItem.name}</span>
                            </h4>
                            <div className="singer">
                              <span>{playItem.sing}</span>
                              <span>{playItem.singers}</span>
                            </div>
                            <span className="date">{playItem.release_time}</span>
                          </div>
                        </li>
                      )
                    })
                  }
            </ul>
        </div>
        <Pagination className="pagin" pageSize={20} onChange={this.handleChange} defaultCurrent={1} total={data.new_album.data[currentIndex].length} />
      </div>
    )
  }
}