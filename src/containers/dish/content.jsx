import React,{Component} from 'react'
import {Pagination} from 'antd'
import './css/index.less'
var data = require('./json/data.json')
var dish = require('./json/dish.json')
export default class MyComponent extends Component{
  componentDidMount(){
    console.log(1111)
  }
  render(){
    return (
      <div>
        <div className="play_all">
          <ul className="play_list">
          { 
            data.new_album.data.albums.splice(0,20).map((playItem,index)=>{
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
        <Pagination className="pagin" defaultCurrent={6} total={dish.playList.length%20} />
      </div>
    )
  }
}