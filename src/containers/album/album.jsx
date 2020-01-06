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
        <div className="main main-one">
          <div className="main_header">
            <h2>最新上架</h2>
          </div>
          <div className="main_content">
            <ul className="main_content_list">
              <li className="list_item">
                <div className="list_item_img">
                  <a href="javascript:;">
                    <img src="//y.gtimg.cn/music/photo_new/T002R300x300M0000036W7VC0zFG9K.jpg?max_age=2592000" alt=""/>
                  </a>
                </div>
                <h4 className="list_item_text">
                  <a href="javascript:;">
                    <span>I=U=WE:序</span>
                  </a>
                </h4>
                <div className="list_item_author">
                  <a href="javascript:;">
                    <span>BOY STORY</span>
                  </a>
                </div>
                <div className="list_item_price">
                  <span>￥10</span>
                  <div className="list_item_button">
                    <a href="javascript:;">
                      <span>立即购买</span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list_item">
                <div className="list_item_img">
                  <a href="javascript:;">
                    <img src="//y.gtimg.cn/music/photo_new/T002R300x300M000004fGBhL2Jr0qt.jpg?max_age=2592000" alt=""/>
                  </a>
                </div>
                <h4 className="list_item_text">
                  <a href="javascript:;">
                    <span>What If</span>
                  </a>
                </h4>
                <div className="list_item_author">
                  <a href="javascript:;">
                    <span>谭晶</span>
                  </a>
                </div>
                <div className="list_item_price">
                  <span>￥3</span>
                  <div className="list_item_button">
                    <a href="javascript:;">
                      <span>立即购买</span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list_item">
                <div className="list_item_img">
                  <a href="javascript:;">
                    <img src="//y.gtimg.cn/music/photo_new/T002R300x300M000001sWLyI25K8lv.jpg?max_age=2592000" alt=""/>
                  </a>
                </div>
                <h4 className="list_item_text">
                  <a href="javascript:;">
                    <span>当你和心跳一起出现</span>
                  </a>
                </h4>
                <div className="list_item_author">
                  <a href="javascript:;">
                    <span>萧亚轩</span>
                  </a>
                </div>
                <div className="list_item_price">
                  <span>￥3</span>
                  <div className="list_item_button">
                    <a href="javascript:;">
                      <span>立即购买</span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list_item">
                <div className="list_item_img">
                  <a href="javascript:;">
                    <img src="//y.gtimg.cn/music/photo_new/T002R300x300M000003zG2jn46gPpO.jpg?max_age=2592000" alt=""/>
                  </a>
                </div>
                <h4 className="list_item_text">
                  <a href="javascript:;">
                    <span>过海</span>
                  </a>
                </h4>
                <div className="list_item_author">
                  <a href="javascript:;">
                    <span>痛仰乐队</span>
                  </a>
                </div>
                <div className="list_item_price">
                  <span>￥10</span>
                  <div className="list_item_button">
                    <a href="javascript:;">
                      <span>立即购买</span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list_item">
                <div className="list_item_img">
                  <a href="javascript:;">
                    <img src="//y.gtimg.cn/music/photo_new/T002R300x300M000003wcPYx2oSX5Y.jpg?max_age=2592000" alt=""/>
                  </a>
                </div>
                <h4 className="list_item_text">
                  <a href="javascript:;">
                    <span>Starry Night - The 2nd Mini Album</span>
                  </a>
                </h4>
                <div className="list_item_author">
                  <a href="javascript:;">
                    <span>BoA(宝儿)</span>
                  </a>
                </div>
                <div className="list_item_price">
                  <span>￥15</span>
                  <div className="list_item_button">
                    <a href="javascript:;">
                      <span>立即购买</span>
                    </a>
                  </div>
                </div>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="main">
          <div className="main_header">
            <h2>本周热销</h2>
          </div>
          <div className="main_content">
            <ul className="main_content_list">
              <li className="list_item">
                <div className="list_item_img">
                  <a href="javascript:;">
                    <img src="//y.gtimg.cn/music/photo_new/T002R300x300M000000d4ZXm4JElgo.jpg?max_age=2592000" alt=""/>
                  </a>
                </div>
                <h4 className="list_item_text">
                  <a href="javascript:;">
                    <span>哇</span>
                  </a>
                </h4>
                <div className="list_item_author">
                  <a href="javascript:;">
                    <span>李宇春</span>
                  </a>
                </div>
                <div className="list_item_price">
                  <span>￥20</span>
                  <div className="list_item_button">
                    <a href="javascript:;">
                      <span>立即购买</span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list_item">
                <div className="list_item_img">
                  <a href="javascript:;">
                    <img src="//y.gtimg.cn/music/photo_new/T002R300x300M000002Tryw33HIGNP.jpg?max_age=2592000" alt=""/>
                  </a>
                </div>
                <h4 className="list_item_text">
                  <a href="javascript:;">
                    <span>陈情令 国风音乐专辑</span>
                  </a>
                </h4>
                <div className="list_item_author">
                  <a href="javascript:;">
                    <span>华语群星</span>
                  </a>
                </div>
                <div className="list_item_price">
                  <span>￥20</span>
                  <div className="list_item_button">
                    <a href="javascript:;">
                      <span>立即购买</span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list_item">
                <div className="list_item_img">
                  <a href="javascript:;">
                    <img src="//y.gtimg.cn/music/photo_new/T002R300x300M000003aHMFV1IqSWE.jpg?max_age=2592000" alt=""/>
                  </a>
                </div>
                <h4 className="list_item_text">
                  <a href="javascript:;">
                    <span>伍六七 原生大碟</span>
                  </a>
                </h4>
                <div className="list_item_author">
                  <a href="javascript:;">
                    <span>华语群星</span>
                  </a>
                </div>
                <div className="list_item_price">
                  <span>￥15</span>
                  <div className="list_item_button">
                    <a href="javascript:;">
                      <span>立即购买</span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list_item">
                <div className="list_item_img">
                  <a href="javascript:;">
                    <img src="//y.gtimg.cn/music/photo_new/T002R300x300M0000019Oi682i0RfX.jpg?max_age=2592000" alt=""/>
                  </a>
                </div>
                <h4 className="list_item_text">
                  <a href="javascript:;">
                    <span>YOUNG</span>
                  </a>
                </h4>
                <div className="list_item_author">
                  <a href="javascript:;">
                    <span>蔡徐坤</span>
                  </a>
                </div>
                <div className="list_item_price">
                  <span>￥5</span>
                  <div className="list_item_button">
                    <a href="javascript:;">
                      <span>立即购买</span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list_item">
                <div className="list_item_img">
                  <a href="javascript:;">
                    <img src="//y.gtimg.cn/music/photo_new/T002R300x300M000002CFj0T2id2cJ.jpg?max_age=2592000" alt=""/>
                  </a>
                </div>
                <h4 className="list_item_text">
                  <a href="javascript:;">
                    <span>reality in BLACK</span>
                  </a>
                </h4>
                <div className="list_item_author">
                  <a href="javascript:;">
                    <span>MAMAMOO</span>
                  </a>
                </div>
                <div className="list_item_price">
                  <span>￥20</span>
                  <div className="list_item_button">
                    <a href="javascript:;">
                      <span>立即购买</span>
                    </a>
                  </div>
                </div>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="main">
          <div className="main_header">
            <h2>音乐人专区</h2>
          </div>
          <div className="main_content">
            <ul className="main_content_list">
              <li className="list_item">
                <div className="list_item_img">
                  <a href="javascript:;">
                    <img src="//y.gtimg.cn/music/photo_new/T002R300x300M000003EHTi528PvZt.jpg?max_age=2592000" alt=""/>
                  </a>
                </div>
                <h4 className="list_item_text">
                  <a href="javascript:;">
                    <span>玩</span>
                  </a>
                </h4>
                <div className="list_item_author">
                  <a href="javascript:;">
                    <span>陈粒</span>
                  </a>
                </div>
                <div className="list_item_price">
                  <span>￥25</span>
                  <div className="list_item_button">
                    <a href="javascript:;">
                      <span>立即购买</span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list_item">
                <div className="list_item_img">
                  <a href="javascript:;">
                    <img src="//y.gtimg.cn/music/photo_new/T002R300x300M000003iPptk0JI1D5.jpg?max_age=2592000" alt=""/>
                  </a>
                </div>
                <h4 className="list_item_text">
                  <a href="javascript:;">
                    <span>十年之前和三个爱情故事</span>
                  </a>
                </h4>
                <div className="list_item_author">
                  <a href="javascript:;">
                    <span>嘿！！！</span>
                  </a>
                </div>
                <div className="list_item_price">
                  <span>￥23</span>
                  <div className="list_item_button">
                    <a href="javascript:;">
                      <span>立即购买</span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list_item">
                <div className="list_item_img">
                  <a href="javascript:;">
                    <img src="//y.gtimg.cn/music/photo_new/T002R300x300M000004HxZdX4d8v9J.jpg?max_age=2592000" alt=""/>
                  </a>
                </div>
                <h4 className="list_item_text">
                  <a href="javascript:;">
                    <span>感+</span>
                  </a>
                </h4>
                <div className="list_item_author">
                  <a href="javascript:;">
                    <span>旅行团乐队</span>
                  </a>
                </div>
                <div className="list_item_price">
                  <span>￥12</span>
                  <div className="list_item_button">
                    <a href="javascript:;">
                      <span>立即购买</span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list_item">
                <div className="list_item_img">
                  <a href="javascript:;">
                    <img src="//y.gtimg.cn/music/photo_new/T002R300x300M000000BQx3u1M0SVw.jpg?max_age=2592000" alt=""/>
                  </a>
                </div>
                <h4 className="list_item_text">
                  <a href="javascript:;">
                    <span>敦煌定若远</span>
                  </a>
                </h4>
                <div className="list_item_author">
                  <a href="javascript:;">
                    <span>汐音社</span>
                  </a>
                </div>
                <div className="list_item_price">
                  <span>￥20</span>
                  <div className="list_item_button">
                    <a href="javascript:;">
                      <span>立即购买</span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list_item">
                <div className="list_item_img">
                  <a href="javascript:;">
                    <img src="//y.gtimg.cn/music/photo_new/T002R300x300M000004TSoOf1Ehr9l.jpg?max_age=2592000" alt=""/>
                  </a>
                </div>
                <h4 className="list_item_text">
                  <a href="javascript:;">
                    <span>大自在</span>
                  </a>
                </h4>
                <div className="list_item_author">
                  <a href="javascript:;">
                    <span>粒粒</span>
                  </a>
                </div>
                <div className="list_item_price">
                  <span>￥1</span>
                  <div className="list_item_button">
                    <a href="javascript:;">
                      <span>立即购买</span>
                    </a>
                  </div>
                </div>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="main">
          <div className="main_header">
            <h2>2019新生力量绽放</h2>
          </div>
          <div className="main_content">
            <ul className="main_content_list">
              <li className="list_item">
                <div className="list_item_img">
                  <a href="javascript:;">
                    <img src="//y.gtimg.cn/music/photo_new/T002R300x300M0000019Oi682i0RfX.jpg?max_age=2592000" alt=""/>
                  </a>
                </div>
                <h4 className="list_item_text">
                  <a href="javascript:;">
                    <span>YOUNG</span>
                  </a>
                </h4>
                <div className="list_item_author">
                  <a href="javascript:;">
                    <span>蔡徐坤</span>
                  </a>
                </div>
                <div className="list_item_price">
                  <span>￥5</span>
                  <div className="list_item_button">
                    <a href="javascript:;">
                      <span>立即购买</span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list_item">
                <div className="list_item_img">
                  <a href="javascript:;">
                    <img src="//y.gtimg.cn/music/photo_new/T002R300x300M000002WAzsK3zOPmi.jpg?max_age=2592000" alt=""/>
                  </a>
                </div>
                <h4 className="list_item_text">
                  <a href="javascript:;">
                    <span>就要掷地有声的炸裂</span>
                  </a>
                </h4>
                <div className="list_item_author">
                  <a href="javascript:;">
                    <span>RISE</span>
                  </a>
                </div>
                <div className="list_item_price">
                  <span>￥12</span>
                  <div className="list_item_button">
                    <a href="javascript:;">
                      <span>立即购买</span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list_item">
                <div className="list_item_img">
                  <a href="javascript:;">
                    <img src="//y.gtimg.cn/music/photo_new/T002R300x300M0000018oANt3Hd7ZE.jpg?max_age=2592000" alt=""/>
                  </a>
                </div>
                <h4 className="list_item_text">
                  <a href="javascript:;">
                    <span>立风</span>
                  </a>
                </h4>
                <div className="list_item_author">
                  <a href="javascript:;">
                    <span>火箭少女101</span>
                  </a>
                </div>
                <div className="list_item_price">
                  <span>￥27</span>
                  <div className="list_item_button">
                    <a href="javascript:;">
                      <span>立即购买</span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list_item">
                <div className="list_item_img">
                  <a href="javascript:;">
                    <img src="//y.gtimg.cn/music/photo_new/T002R300x300M0000040MnqD3iJQUW.jpg?max_age=2592000" alt=""/>
                  </a>
                </div>
                <h4 className="list_item_text">
                  <a href="javascript:;">
                    <span>UNLOCK</span>
                  </a>
                </h4>
                <div className="list_item_author">
                  <a href="javascript:;">
                    <span>UNINE</span>
                  </a>
                </div>
                <div className="list_item_price">
                  <span>￥9</span>
                  <div className="list_item_button">
                    <a href="javascript:;">
                      <span>立即购买</span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list_item">
                <div className="list_item_img">
                  <a href="javascript:;">
                    <img src="//y.gtimg.cn/music/photo_new/T002R300x300M000000SVLvW0snMWF.jpg?max_age=2592000" alt=""/>
                  </a>
                </div>
                <h4 className="list_item_text">
                  <a href="javascript:;">
                    <span>ESCAPE.</span>
                  </a>
                </h4>
                <div className="list_item_author">
                  <a href="javascript:;">
                    <span>林彦俊</span>
                  </a>
                </div>
                <div className="list_item_price">
                  <span>￥4</span>
                  <div className="list_item_button">
                    <a href="javascript:;">
                      <span>立即购买</span>
                    </a>
                  </div>
                </div>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="main">
          <div className="main_header">
            <h2>2019内地专辑推荐</h2>
          </div>
          <div className="main_content">
            <ul className="main_content_list">
              <li className="list_item">
                <div className="list_item_img">
                  <a href="javascript:;">
                    <img src="//y.gtimg.cn/music/photo_new/T002R300x300M000004M8HLn4QOyyn.jpg?max_age=2592000" alt=""/>
                  </a>
                </div>
                <h4 className="list_item_text">
                  <a href="javascript:;">
                    <span>HONEY</span>
                  </a>
                </h4>
                <div className="list_item_author">
                  <a href="javascript:;">
                    <span>张艺兴</span>
                  </a>
                </div>
                <div className="list_item_price">
                  <span>￥8</span>
                  <div className="list_item_button">
                    <a href="javascript:;">
                      <span>立即购买</span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list_item">
                <div className="list_item_img">
                  <a href="javascript:;">
                    <img src="//y.gtimg.cn/music/photo_new/T002R300x300M000000d4ZXm4JElgo.jpg?max_age=2592000" alt=""/>
                  </a>
                </div>
                <h4 className="list_item_text">
                  <a href="javascript:;">
                    <span>哇</span>
                  </a>
                </h4>
                <div className="list_item_author">
                  <a href="javascript:;">
                    <span>李宇春</span>
                  </a>
                </div>
                <div className="list_item_price">
                  <span>￥20</span>
                  <div className="list_item_button">
                    <a href="javascript:;">
                      <span>立即购买</span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list_item">
                <div className="list_item_img">
                  <a href="javascript:;">
                    <img src="//y.gtimg.cn/music/photo_new/T002R300x300M000002tGMcj2ScmPy.jpg?max_age=2592000" alt=""/>
                  </a>
                </div>
                <h4 className="list_item_text">
                  <a href="javascript:;">l
                    <span>Π-volume.l</span>
                  </a>
                </h4>
                <div className="list_item_author">
                  <a href="javascript:;">
                    <span>鹿晗</span>
                  </a>
                </div>
                <div className="list_item_price">
                  <span>￥3</span>
                  <div className="list_item_button">
                    <a href="javascript:;">
                      <span>立即购买</span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list_item">
                <div className="list_item_img">
                  <a href="javascript:;">
                    <img src="//y.gtimg.cn/music/photo_new/T002R300x300M000004COjBT25RdIp.jpg?max_age=2592000" alt=""/>
                  </a>
                </div>
                <h4 className="list_item_text">
                  <a href="javascript:;">
                    <span>破晓</span>
                  </a>
                </h4>
                <div className="list_item_author">
                  <a href="javascript:;">
                    <span>吴亦凡</span>
                  </a>
                </div>
                <div className="list_item_price">
                  <span>￥3</span>
                  <div className="list_item_button">
                    <a href="javascript:;">
                      <span>立即购买</span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list_item">
                <div className="list_item_img">
                  <a href="javascript:;">
                    <img src="//y.gtimg.cn/music/photo_new/T002R300x300M000001xUYaL2nggfC.jpg?max_age=2592000" alt=""/>
                  </a>
                </div>
                <h4 className="list_item_text">
                  <a href="javascript:;">
                    <span>LUNAR</span>
                  </a>
                </h4>
                <div className="list_item_author">
                  <a href="javascript:;">
                    <span>周笔畅</span>
                  </a>
                </div>
                <div className="list_item_price">
                  <span>￥20</span>
                  <div className="list_item_button">
                    <a href="javascript:;">
                      <span>立即购买</span>
                    </a>
                  </div>
                </div>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="main">
          <div className="main_header">
            <h2>2019韩国专辑推荐</h2>
          </div>
          <div className="main_content">
            <ul className="main_content_list">
              <li className="list_item">
                <div className="list_item_img">
                  <a href="javascript:;">
                    <img src="//y.gtimg.cn/music/photo_new/T002R300x300M000004VaOJ60Mpgnw.jpg?max_age=2592000" alt=""/>
                  </a>
                </div>
                <h4 className="list_item_text">
                  <a href="javascript:;">
                    <span>What a life-The Mini Al...</span>
                  </a>
                </h4>
                <div className="list_item_author">
                  <a href="javascript:;">
                    <span>EXO-SC</span>
                  </a>
                </div>
                <div className="list_item_price">
                  <span>￥18</span>
                  <div className="list_item_button">
                    <a href="javascript:;">
                      <span>立即购买</span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list_item">
                <div className="list_item_img">
                  <a href="javascript:;">
                    <img src="//y.gtimg.cn/music/photo_new/T002R300x300M000002ci94M4fMYjm.jpg?max_age=2592000" alt=""/>
                  </a>
                </div>
                <h4 className="list_item_text">
                  <a href="javascript:;">
                    <span>City Lights</span>
                  </a>
                </h4>
                <div className="list_item_author">
                  <a href="javascript:;">
                    <span>伯贤</span>
                  </a>
                </div>
                <div className="list_item_price">
                  <span>￥18</span>
                  <div className="list_item_button">
                    <a href="javascript:;">
                      <span>立即购买</span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list_item">
                <div className="list_item_img">
                  <a href="javascript:;">
                    <img src="//y.gtimg.cn/music/photo_new/T002R300x300M0000032AHUJ2rqJdf.jpg?max_age=2592000" alt=""/>
                  </a>
                </div>
                <h4 className="list_item_text">
                  <a href="javascript:;">
                    <span>True Colors</span>
                  </a>
                </h4>
                <div className="list_item_author">
                  <a href="javascript:;">
                    <span>U-KNOW</span>
                  </a>
                </div>
                <div className="list_item_price">
                  <span>￥15</span>
                  <div className="list_item_button">
                    <a href="javascript:;">
                      <span>立即购买</span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list_item">
                <div className="list_item_img">
                  <a href="javascript:;">
                    <img src="//y.gtimg.cn/music/photo_new/T002R300x300M000002Ao9Zw1xJu7O.jpg?max_age=2592000" alt=""/>
                  </a>
                </div>
                <h4 className="list_item_text">
                  <a href="javascript:;">
                    <span>WE</span>
                  </a>
                </h4>
                <div className="list_item_author">
                  <a href="javascript:;">
                    <span>WINNER</span>
                  </a>
                </div>
                <div className="list_item_price">
                  <span>￥15</span>
                  <div className="list_item_button">
                    <a href="javascript:;">
                      <span>立即购买</span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list_item">
                <div className="list_item_img">
                  <a href="javascript:;">
                    <img src="//y.gtimg.cn/music/photo_new/T002R300x300M000003wwnm94gdbv4.jpg?max_age=2592000" alt=""/>
                  </a>
                </div>
                <h4 className="list_item_text">
                  <a href="javascript:;">
                    <span>A Walk to Remember</span>
                  </a>
                </h4>
                <div className="list_item_author">
                  <a href="javascript:;">
                    <span>允儿</span>
                  </a>
                </div>
                <div className="list_item_price">
                  <span>￥8</span>
                  <div className="list_item_button">
                    <a href="javascript:;">
                      <span>立即购买</span>
                    </a>
                  </div>
                </div>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="main">
          <div className="main_header">
            <h2>2019影视剧OSt推荐</h2>
          </div>
          <div className="main_content">
            <ul className="main_content_list">
              <li className="list_item">
                <div className="list_item_img">
                  <a href="javascript:;">
                    <img src="//y.gtimg.cn/music/photo_new/T002R300x300M000002Tryw33HIGNP.jpg?max_age=2592000" alt=""/>
                  </a>
                </div>
                <h4 className="list_item_text">
                  <a href="javascript:;">
                    <span>陈情令 国风音乐专辑</span>
                  </a>
                </h4>
                <div className="list_item_author">
                  <a href="javascript:;">
                    <span>华语群星</span>
                  </a>
                </div>
                <div className="list_item_price">
                  <span>￥20</span>
                  <div className="list_item_button">
                    <a href="javascript:;">
                      <span>立即购买</span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list_item">
                <div className="list_item_img">
                  <a href="javascript:;">
                    <img src="//y.gtimg.cn/music/photo_new/T002R300x300M000000xbVpz2d56fc.jpg?max_age=2592000" alt=""/>
                  </a>
                </div>
                <h4 className="list_item_text">
                  <a href="javascript:;">
                    <span>《时间都知道》电视剧原生</span>
                  </a>
                </h4>
                <div className="list_item_author">
                  <a href="javascript:;">
                    <span>华语群星</span>
                  </a>
                </div>
                <div className="list_item_price">
                  <span>￥12</span>
                  <div className="list_item_button">
                    <a href="javascript:;">
                      <span>立即购买</span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list_item">
                <div className="list_item_img">
                  <a href="javascript:;">
                    <img src="//y.gtimg.cn/music/photo_new/T002R300x300M000003Klw1L2vgE4L.jpg?max_age=2592000" alt=""/>
                  </a>
                </div>
                <h4 className="list_item_text">
                  <a href="javascript:;">
                    <span>《灵宠》第一季原生大碟</span>
                  </a>
                </h4>
                <div className="list_item_author">
                  <a href="javascript:;">
                    <span>张靓颖/刘牧/杨秉音</span>
                  </a>
                </div>
                <div className="list_item_price">
                  <span>￥15</span>
                  <div className="list_item_button">
                    <a href="javascript:;">
                      <span>立即购买</span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list_item">
                <div className="list_item_img">
                  <a href="javascript:;">
                    <img src="//y.gtimg.cn/music/photo_new/T002R300x300M0000010AYuF3nqxhw.jpg?max_age=2592000" alt=""/>
                  </a>
                </div>
                <h4 className="list_item_text">
                  <a href="javascript:;">
                    <span>我们很好</span>
                  </a>
                </h4>
                <div className="list_item_author">
                  <a href="javascript:;">
                    <span>林俊杰</span>
                  </a>
                </div>
                <div className="list_item_price">
                  <span>￥3</span>
                  <div className="list_item_button">
                    <a href="javascript:;">
                      <span>立即购买</span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="list_item">
                <div className="list_item_img">
                  <a href="javascript:;">
                    <img src="//y.gtimg.cn/music/photo_new/T002R300x300M000003UP2BH2e4cXO.jpg?max_age=2592000" alt=""/>
                  </a>
                </div>
                <h4 className="list_item_text">
                  <a href="javascript:;">
                    <span>迟爱</span>
                  </a>
                </h4>
                <div className="list_item_author">
                  <a href="javascript:;">
                    <span>郁可唯</span>
                  </a>
                </div>
                <div className="list_item_price">
                  <span>￥3</span>
                  <div className="list_item_button">
                    <a href="javascript:;">
                      <span>立即购买</span>
                    </a>
                  </div>
                </div>
              </li>
              
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