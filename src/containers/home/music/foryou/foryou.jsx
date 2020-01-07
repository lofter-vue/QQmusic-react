import React,{Component} from 'react'
import Swiper from "swiper";
import './css/foryou.less';

export default class ForYou extends Component{
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
      <div className='foryou swiper-container'>
        <ul className='swiper-wrapper'>
          <div className='swiper-slide'>
            <li>
              <img src="http://qpic.y.qq.com/music_cover/JBDCVgqXWXaYUvcsElqcicaJfkcUJATQU6oO1Kkict8A5mgACWBqznVA/300?n=1" alt="bg"/>
              <span>那些年，被抖音玩坏的蒙面唱将</span>
              <span>播放量：17.9万</span>
            </li>
            <li>
              <img src="http://qpic.y.qq.com/music_cover/qHVa7C6VF9SibnYtgb2SBrZtAzpjicd6gV5beibCqM4QXzeIMrrrwNMXQ/300?n=1" alt="bg"/>
              <span>那些年，被抖音玩坏的蒙面唱将</span>
              <span>播放量：17.9万</span>
            </li>
            <li>
              <img src="http://qpic.y.qq.com/music_cover/BxQgxonwzUDWO6IdGBmJ9iczstuXR8NkLP8DxLI7kqic1wSZeVDM92Lw/300?n=1" alt="bg"/>
              <span>那些年，被抖音玩坏的蒙面唱将</span>
              <span>播放量：17.9万</span>
            </li>
            <li>
              <img src="//qpic.y.qq.com/music_cover/PiajxSqBRaELicf3GsOsslkQS0NO47ibXzia6stfzg9KnxH7qkuglNvXMw/300?n=1" alt="bg"/>
              <span>那些年，被抖音玩坏的蒙面唱将</span>
              <span>播放量：17.9万</span>
            </li>
            <li style={{marginRight:0}}>
              <img src="http://qpic.y.qq.com/music_cover/R8unPZMA4Vp5v2Ms96bst5lFxygQmZzTlVqx9NWiaapP4s2c4y2S0iag/300?n=1" alt="bg"/>
              <span>那些年，被抖音玩坏的蒙面唱将</span>
              <span>播放量：17.9万</span>
            </li>
          </div>
          <div className='swiper-slide'>
            <li>
              <img src="http://qpic.y.qq.com/music_cover/KetjXWSVppvyrVJfzfdpib7pLH5t23xvIPAwS3qrCXX2F6cvpiawWRpQ/300?n=1" alt="bg"/>
              <span>那些年，被抖音玩坏的蒙面唱将</span>
              <span>播放量：17.9万</span>
            </li>
            <li>
              <img src="//qpic.y.qq.com/music_cover/jPTPF58ZjCcjHfMBoEyaFichdqQY5ibQze6elgmV3qDJJV79IcyibbdUg/300?n=1" alt="bg"/>
              <span>那些年，被抖音玩坏的蒙面唱将</span>
              <span>播放量：17.9万</span>
            </li>
            <li>
              <img src="//qpic.y.qq.com/music_cover/mlUG84rgKKtFPWMCEuzxuwSKyEmPTKxfQvlibzJ3SU1o23TEOiaqm0zQ/300?n=1" alt="bg"/>
              <span>那些年，被抖音玩坏的蒙面唱将</span>
              <span>播放量：17.9万</span>
            </li>
            <li>
              <img src="//qpic.y.qq.com/music_cover/u1KrLCVwr775Gp3ibJSQ5QGZW7bzKib1mLa0wsLLJWjGB7jFkbN0flfg/300?n=1" alt="bg"/>
              <span>那些年，被抖音玩坏的蒙面唱将</span>
              <span>播放量：17.9万</span>
            </li>
            <li style={{marginRight:0}}>
              <img src="//qpic.y.qq.com/music_cover/JGWy4hDbeHGB4lAPwcanXGIUUwyQWUUM8WbpNRWqEpYSKwrBHJ6oiaA/300?n=1" alt="bg"/>
              <span>那些年，被抖音玩坏的蒙面唱将</span>
              <span>播放量：17.9万</span>
            </li>
          </div>
        </ul>
        <div className="swiper-pagination"></div>
      </div>
    )
  }
}