import React,{Component} from 'react'
import './css/music.less';

export default class MyComponent extends Component{
  render(){
    return (
      <div className='music'>
        <div className='music-nav'>
          <ul>
            <li>首页</li>
            <li>歌手</li>
            <li>新碟</li>
            <li>排行榜</li>
            <li>分类歌单</li>
            <li>电台</li>
            <li>MV</li>
            <li>数字专辑</li>
            <li>票务</li>
          </ul>
        </div>
      </div>
    )
  }
}