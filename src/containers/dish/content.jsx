import React,{Component} from 'react'
import {Pagination} from 'antd'
import {reqDish} from '../../api/index'
import './css/index.less'
var data = require('./json/data.json')
export default class MyComponent extends Component{
  state={
    data : []
  } 

  currentIndex = this.props.match.params.id
  // onChange(currentIndex,current){
  //   console.log(currentIndex,current)
  //   data.new_album.data[currentIndex].slice(currentIndex*current,currentIndex*current+20)
  // }
  getDish= async ()=>{
    let result = await reqDish()
    this.setState({
      data:result.data.new_album.data
    })
  }
  componentDidMount(){
    this.getDish()
  }
  render(){
    let currentIndex = this.props.match.params.id
    // if(this.state.data[0]) {
    console.log(currentIndex)
    console.log( this.state.data[0])
      return (
        <div>
          <div className="play_all">
            <ul className="play_list">
            { 
              this.state.data.map((playItem,index)=>{
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
          <Pagination className="pagin" onClick={this.onChange} defaultCurrent={6} total={data.new_album.data[currentIndex].length} />
        </div>
      )
    }
  // } 
}