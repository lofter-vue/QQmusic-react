import React,{Component} from 'react';
import Swiper from 'swiper'
import bg1 from "./images/T011R1080x432M000001y8aM13eNKAY.jpg";
import bg2 from './images/T011R1080x432M000000jgJWN1TWxMk.jpg';
import bg3 from './images/T011M000004N43uz0fGMFU.jpg'
import 'swiper/css/swiper.min.css'

export default class SwiperComponent extends Component{

  componentDidMount() {
    //new swiper
    new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: -300,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    console.log('new swiper');
    
  }

  render(){
    return(
      <div className='shi_swiper swiper-container'>
        <ul className='swiper-wrapper'>
          <li className='swiper-slide'>
            <img src={bg1} alt=""/>
          </li>
          <li className='swiper-slide'>
            <img src={bg2} alt=""/>
          </li>
          <li className='swiper-slide'>
            <img src={bg3} alt=""/>
          </li>
          <li className='swiper-slide'>
            <img src={bg1} alt=""/>
          </li>
        </ul>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    )
  }
}