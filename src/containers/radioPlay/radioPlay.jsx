import React, { Component } from 'react'
import { Icon } from 'antd'
import RadioAudio from './radioAudio/radioAudio.jsx'
import './css/radioPlay.less'
import RadioLogo from './images/player_logo.png'

export default class RadioPlay extends Component {
  state = {
    musicUrl: 'http://ws.stream.qqmusic.qq.com/C40000003P1Y09AEfm.m4a?guid=2813932877&vkey=13B26EC69536817C30BD43A69B5679B2AA9FAD41A11CC4203DDE87AA36F7CDB63F3AF63130F791FAF020B3B799239786D14351C7FA7D49F9&uin=7539&fromtag=66',
    imgUrl: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004JhhdK0SmHSM.jpg?max_age=2592000'
  }

  render() {
    const {imgUrl,musicUrl} = this.state
    return (
      <div id="radioPlay">
        <div className="radioPlayContainer">
          <div className="mask"></div>
        </div>
        <div className="radioLogo">
          <img src={RadioLogo} alt=""/>
        </div>
        <div className="mod_player">
          <div className="play_title">
            <i className="play_wave"></i>
            <span className="radio_name">个性电台</span>
            <Icon className="arrow_down" type="down"/>
          </div>
          <div className="play_content">
            <div className="audio_play">
              <p className="music_name">Bye Bye Disco</p>
              <p className="music_author">新裤子</p>
              <div className="music_play">
                <RadioAudio url={musicUrl}/>
              </div>
            </div>
            <img src={imgUrl} alt=""/>
          </div>
        </div>
      </div>
    )
  }
}
