import React,{Component} from 'react'
import './css/swiper.less'
import Swiper from 'swiper/js/swiper.js'
import 'swiper/css/swiper.min.css';

export default class Album extends Component{
  render(){
    let {banners} = this.props
    return (
      <div className="js_wrap">
        <div id="js_banner_wrap">
          <div className="swiper-container">
            <ul className="swiper-wrapper">
              {
                banners.map((banner,index)=>{
                  return(
                    <li className="swiper-slide" key={banner.id}>
                      <img src={banner.pic} alt=""/>
                    </li>
                  )
                })
              }
            </ul>
            <div className="swiper-pagination"></div>
              {/* -- 如果需要导航按钮 */}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>   
      </div>
    )
  }

  componentDidMount(){
    var mySwiper = new Swiper('.swiper-container',{
      effect : 'coverflow',
      slidesPerView: 1.5,
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