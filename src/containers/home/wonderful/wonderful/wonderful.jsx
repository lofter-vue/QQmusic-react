import React,{Component} from 'react'
import Swiper from "swiper";
import './css/wonderful.less';

export default class Wonderful extends Component{
  componentDidMount(){
    new Swiper('.swiper-container',{
      loop: true,
      pagination: {
        el: '.swiper-pagination'
      },
      navigation:{
        prevEl:'.swiper-button-prev',
        nextEl:'.swiper-button-next'
      }
    })
  }
  render(){
    return (
      <div className='wonderful swiper-container'>
        <ul className='swiper-wrapper'>
          <div className='swiper-slide'>
            <li><img src="//y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1944326.jpg?max_age=2592000" alt="bg"/></li>
            <li><img src="//y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1946158.jpg?max_age=2592000" alt="bg"/></li>
          </div>
          <div className='swiper-slide'>
            <li><img src="//y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1943151.jpg?max_age=2592000" alt="bg"/></li>
            <li><img src="//y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1947848.jpg?max_age=2592000" alt="bg"/></li>
          </div>
          <div className='swiper-slide'>
            <li><img src="//y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1944069.jpg?max_age=2592000" alt="bg"/></li>
            <li><img src="//y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1943360.jpg?max_age=2592000" alt="bg"/></li>
          </div>
          </ul>
          <div className="swiper-pagination"></div>
      </div>
    )
  }
}