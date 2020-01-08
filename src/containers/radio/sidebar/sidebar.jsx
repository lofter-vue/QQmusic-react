import React, { Component } from 'react'
import './css/sidebar.less'

export default class SideBar extends Component {
  state = {
    currentIndex: 0
  }

  scrollToAnchor = (id,index)=> {
    this.setState({
      currentIndex: index
    })
    document.getElementById(id).scrollIntoView({block: 'start', behavior: 'smooth'})
  }

  render() {
    let {currentIndex} = this.state
    return (
      <div className="radio_side_bar">
        <a className={currentIndex === 0 ? "radio_side_bar_item current" : "radio_side_bar_item"} href="javascript:;" onClick={()=>this.scrollToAnchor('hot',0)}>热门</a>
        <a className={currentIndex === 1 ? "radio_side_bar_item current" : "radio_side_bar_item"} href="javascript:;" onClick={()=>this.scrollToAnchor('am',1)}>上午</a>
        <a className={currentIndex === 2 ? "radio_side_bar_item current" : "radio_side_bar_item"} href="javascript:;" onClick={()=>this.scrollToAnchor('mood',2)}>心情</a>
        <a className={currentIndex === 3 ? "radio_side_bar_item current" : "radio_side_bar_item"} href="javascript:;" onClick={()=>this.scrollToAnchor('theme',3)}>主题</a>
        <a className={currentIndex === 4 ? "radio_side_bar_item current" : "radio_side_bar_item"} href="javascript:;" onClick={()=>this.scrollToAnchor('scene',4)}>场景</a>
        <a className={currentIndex === 5 ? "radio_side_bar_item current" : "radio_side_bar_item"} href="javascript:;" onClick={()=>this.scrollToAnchor('music-style',5)}>曲风</a>
        <a className={currentIndex === 6 ? "radio_side_bar_item current" : "radio_side_bar_item"} href="javascript:;" onClick={()=>this.scrollToAnchor('language',6)}>语言</a>
        <a className={currentIndex === 7 ? "radio_side_bar_item current" : "radio_side_bar_item"} href="javascript:;" onClick={()=>this.scrollToAnchor('people',7)}>人群</a>
        <a className={currentIndex === 8 ? "radio_side_bar_item current" : "radio_side_bar_item"} href="javascript:;" onClick={()=>this.scrollToAnchor('musical',8)}>乐器</a>
      </div>
    )
  }
}
