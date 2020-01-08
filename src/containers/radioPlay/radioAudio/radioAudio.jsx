import React, { Component } from 'react'
import { Icon,Button,Progress } from 'antd'
import './radioAudio.less'

export default class RadioAudio extends Component {
  // 初始状态
  state = {
    iconType: 'caret-right',
    currentTime: '00:00',
    percent: 0,
    duration: '00:00',
    speed: '1',
    length: 0
  }

  // 刚挂载时加载音乐时间长度
  componentDidMount() {
    const audio = this.refs.audio
    if (audio !== null) {
      audio.load()
      audio.oncanplay = ()=> {
        this.setState({
          duration: this.transTime(Math.floor(audio.duration)),
          currentTime: this.transTime(0),
          length: audio.duration,
        })
      }
    }
  }

  // 将要卸载 移出监听 暂停
  componentWillUnmount() {
    const audio = this.refs.audio
    audio.removeEventListener('timeupdate', this.updateProgress)
    audio.removeEventListener('ended', this.audioEnded)
    audio.pause()
  }

  // 展示时间变化
  transTime = (time) => {
    let duration = parseInt(time, 10)
    let minute = parseInt(duration / 60, 10)
    let sec = duration % 60 + ''
    let isM0 = ':'
    if (minute === 0) {
      minute = '00'
    } else if (minute < 10) {
      minute = '0' + minute
    }
    if (sec.length === 1) {
      sec = '0' + sec
    }
    return minute + isM0 + sec
  }

  // 播放音频
  playAudio = ()=> {
    const audio = this.refs.audio
    audio.addEventListener('timeupdate', this.updateProgress, false)
    audio.addEventListener('ended', this.audioEnded, false)
    if (this.state.iconType === 'caret-right') {
      audio.play()
      this.setState({
        iconType: 'pause'
      })
    } else {
      audio.pause()
      this.setState({
        iconType: 'caret-right'
      })
    }
  }

  // 进度条变化方法
  updateProgress = () => {
    const audio = this.refs.audio
    this.setState({
      percent: Math.round((Math.floor(audio.currentTime) / Math.floor(audio.duration)) * 100, 0),
      currentTime: this.transTime(Math.floor(audio.currentTime))
    });
  }


  // 结束播放
  audioEnded = () => {
    const audio = this.refs.audio
    audio.pause()
    this.setState({
      iconType: 'caret-right'
    })
  }

  // 改变速度 playbackRate
  changeSpeed = (speed) => {
    if (speed === this.state.speed) return
    const audio = this.refs.audio
    audio.playbackRate = speed - 0
    this.setState({
      speed: speed
    });
  }

  render() {
    const {url} = this.props
    const {currentTime,iconType,percent,duration,speed,length} = this.state
    return (
      <div id="radioAudioContainer">
        <audio ref="audio" src={url} style={{ visibility: 'hidden' }}></audio>
        <div className="audio_box">
          <div className="time">
            <div className="current_time">{currentTime}</div>
            <div className="play_progress">
              <Progress className="pp" percent={percent} strokeColor="#555" showInfo={false} />
            </div>
            <div className="duration_time">{duration}</div>
          </div>

          <div className="icon">
            <div className="play_audio" onClick={this.playAudio}>
              <Icon style={{ fontSize: '24px', color: '#555' }} type={iconType} />
            </div>
            <div className="play_speed">
              <Button size="small" className={speed === '1' && 'active' || ''} onClick={() => this.changeSpeed('1')}>1X</Button>
              <Button size="small" className={speed === '2' && 'active' || ''} onClick={() => this.changeSpeed('2')}>2X</Button>
              <Button size="small" className={speed === '3' && 'active' || ''} onClick={() => this.changeSpeed('3')}>3X</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
