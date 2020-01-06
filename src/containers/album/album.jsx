import React,{Component} from 'react'
import './css/album.less'
import Swiper from 'swiper/js/swiper.js'
import 'swiper/css/swiper.min.css';

export default class Album extends Component{
  render(){
    return (
      <div className="js_wrap">
        <div id="js_banner_wrap">
          <div className="swiper-container">
            <ul className="swiper-wrapper">
              <li className="swiper-slide">
                <img src="//y.gtimg.cn/music/common//upload/t_musicmall_focus/1925354.jpg?max_age=2592000" alt=""/>
              </li>
              <li className="swiper-slide">
                <img src="//y.gtimg.cn/music/common//upload/t_musicmall_focus/1915117.jpg?max_age=2592000" alt=""/>
              </li>
              <li className="swiper-slide">
                <img src="//y.gtimg.cn/music/common//upload/t_musicmall_focus/1906502.jpg?max_age=2592000" alt=""/>
              </li>
              <li className="swiper-slide">
                <img src="//y.gtimg.cn/music/common//upload/t_musicmall_focus/1872608.jpg?max_age=2592000" alt=""/>
              </li>
              <li className="swiper-slide">
                <img src="//y.gtimg.cn/music/common//upload/t_musicmall_focus/1944071.jpg?max_age=2592000" alt=""/>
              </li>
              <li className="swiper-slide">
                <img src="//y.gtimg.cn/music/common//upload/t_musicmall_focus/1940734.jpeg" alt=""/>
              </li>
              
            </ul>
            <div className="swiper-pagination"></div>
                {/* -- 如果需要导航按钮 */}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
        <div className="main">
          <div className="main_header">
            <h1>最新上架</h1>
          </div>
          <div className="main_content">
            <ul className="main_content_list">
              <li>
                
              </li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount(){
    var mySwiper = new Swiper('.swiper-container',{
      effect : 'coverflow',
      slidesPerView: 2,
      centeredSlides: true,
      loop:true,
      autoplay:true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
      coverflowEffect: {
        rotate: 0,
        stretch: 1,
        depth: 200,
        modifier: 2,
        slideShadows : true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
      //鼠标移出隐藏按钮，移入显示按钮
      mySwiper.el.onmouseover=()=>{
        mySwiper.navigation.$nextEl.removeClass('hide');
        mySwiper.navigation.$prevEl.removeClass('hide');
      }
      mySwiper.el.onmouseout=()=>{
        mySwiper.navigation.$nextEl.addClass('hide');
        mySwiper.navigation.$prevEl.addClass('hide');
      }
  }
}