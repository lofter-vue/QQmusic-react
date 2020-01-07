import React,{Component} from 'react'
import './css/album_details.less'
export default class AlbumDetails extends Component{
  render(){
    return (
      <div className="main_wrap">
        <div className="main_wrap_top">
          <div className="wrap_top_img">
            <img src="//y.gtimg.cn/music/photo_new/T002R300x300M0000036W7VC0zFG9K_3.jpg?max_age=2592000" alt=""/>
          </div>
          <div className="wrap_top_content">
            <div className="content_text">
              <h1>I=U=WE:序</h1>
            </div>
            <div className="content_author">
              <i className="iconfont icon-geren"></i>
              <a href="https://y.qq.com/n/yqq/singer/0034tIfc4GCK01.html#stat=y_new.album.header.singername">BOY STORY</a>
            </div>
            <ul className="content_jieshao">
              <li>流派：无流派</li>
              <li>语种：国语</li>
              <li>发行时间：2020-01-06</li>
              <li>唱片公司：北京新声娱乐有限公司</li>
            </ul>
            <div className="content_price">
              <a href="javascript:;" className="active"><i>￥10</i><span>立即购买</span></a>
              <a href="javascript:;"><i className="iconfont icon-start"></i>播放全部</a>
              <a href="javascript:;"><i className="iconfont icon-shoucang"></i>爱好</a>
              <a href="javascript:;"><i className="iconfont icon-pinglun"></i>评论(426)</a>
              <a href="javascript:;"><i className="iconfont icon-gengduo"></i>更多</a>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}