import React,{Component} from 'react'
import {connect} from "react-redux" 
import {reqDish} from "../../api/index"
import {Pagination} from 'antd'
import './css/index.less'
var data = require('./json/dish.json')
@connect((state)=>state.arr)
export default class MyComponent extends Component{
  state = {
    arr : [],//所有数组的包裹容器
    showArr:[],//页面显示的数据
    clickpage:false
  }
  componentDidMount=async ()=>{
    let result = await reqDish()
    if(result.code == 0){
      let data = result.new_album.data
    }
  }
  componentWillMount=()=>{
    this.setState({
      arr: data.new_album.data,
      showArr:data.new_album.data
    })
  }
  currentIndex = this.props.match.params.id
  handleChange = (currentIndex) => {
    this.setState({
      clickpage:true
    })
    if(this.state.clickpage){
      this.setState({
        showArr:this.state.arr[currentIndex]
      })
    }else{
      this.setState({
        arr: data.new_album.data,
        showArr:data.new_album.data
      })
    }
  }
  render(){
    let currentIndex = this.props.match.params.id
    return (
      <div>
        <div className="play_all">
          <ul className="play_list">
          { 
            this.state.showArr[currentIndex].map((playItem,index)=>{
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
        <Pagination className="pagin" pageSize={20}  onChange={this.handleChange} defaultCurrent={1} total={data.new_album.data[currentIndex].length} />
      </div>
    )
  }
}