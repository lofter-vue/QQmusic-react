import React, { Component } from 'react'
import './css/sidebar.less'

export default class SideBar extends Component {

  scrollToAnchor (id){
    document.getElementById(id).scrollIntoView({block: 'start', behavior: 'smooth'});
  }

  render() {
    return (
      <div className="radio_side_bar">
        <a className="radio_side_bar_item current" href="javascript:;" onClick={()=>this.scrollToAnchor('hot')}>热门</a>
        <a className="radio_side_bar_item" href="javascript:;" onClick={()=>this.scrollToAnchor('am')}>上午</a>
        <a className="radio_side_bar_item" href="javascript:;" onClick={()=>this.scrollToAnchor('mood')}>心情</a>
        <a className="radio_side_bar_item" href="javascript:;" onClick={()=>this.scrollToAnchor('theme')}>主题</a>
        <a className="radio_side_bar_item" href="javascript:;" onClick={()=>this.scrollToAnchor('scene')}>场景</a>
        <a className="radio_side_bar_item" href="javascript:;" onClick={()=>this.scrollToAnchor('music-style')}>曲风</a>
        <a className="radio_side_bar_item" href="javascript:;" onClick={()=>this.scrollToAnchor('language')}>语言</a>
        <a className="radio_side_bar_item" href="javascript:;" onClick={()=>this.scrollToAnchor('people')}>人群</a>
        <a className="radio_side_bar_item" href="javascript:;" onClick={()=>this.scrollToAnchor('musical')}>乐器</a>
      </div>
    )
  }
}
