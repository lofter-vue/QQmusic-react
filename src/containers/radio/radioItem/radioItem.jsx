import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './css/radioItem.less'
import Lazyload from '../../../components/Lazyload/Lazyload'

export default class RadioItem extends Component {
  render() {
    const {img,title,play_number} = this.props

    return (
      <div>
        <li className="mod_radio_item">
          <div className="item_content">
            <Link to="/index/music/radio_play">
              <div className="fade">
                <div className="item_img">
                  {/* <img src={img} alt="pic"/> */}
                  <Lazyload className="pic" src={img} />
                  <i className="mask"></i>
                  <i className="play"></i>
                </div>
              </div>
            </Link>
            <span className="item_title">{title}</span>
            <div className="item_play_number">播放量：{play_number}万</div>
          </div>
        </li>
      </div>
    )
  }
}
