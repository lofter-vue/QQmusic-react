import React, { Component } from 'react'
import './css/radioItem.less'

export default class RadioItem extends Component {
  render() {
    const {img,title,play_number} = this.props

    return (
      <div>
        <li className="mod_radio_item">
          <div className="item_content">
            <div className="fade">
              <div className="item_img">
                <img src={img} alt="pic"/>
                <i className="mask"></i>
                <i className="play"></i>
              </div>
            </div>
            <span className="item_title">{title}</span>
            <div className="item_play_number">播放量：{play_number}万</div>
          </div>
        </li>
      </div>
    )
  }
}
