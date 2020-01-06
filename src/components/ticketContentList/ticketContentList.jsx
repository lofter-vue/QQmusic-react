import React, { Component } from 'react';
import {Icon} from 'antd'
import './css/ticketContentList.less'

class ticketContentList extends Component {
  render() {
    return (
      <div className="mod_index mod_bg">
        <div className="section_inner">
          <div className="index__hd">
            <h2 className="index__tit">热门推荐</h2>
          </div>
          <div className="mod_ticket_grid">
            <div  className="ticket_grid__side js_open_link" data-url="https://y.qq.com/yanchu/detail.html?IDS=144574,110">
              <img src="//y.gtimg.cn/music/photo_new/T017M000002xvxDP3NBlxQ.jpg?max_age=2592000" className="ticket_grid__side_img" alt=""/>
              <div className="ticket_grid__side_info">
                <h3 className="ticket_grid__side_tit">吴青峰“太空备忘记”巡回演唱会苏州站</h3>
                <p className="ticket_grid__side_price"><em>¥ 280</em> 起<span className="ticket_grid__tag"><Icon className='zuan' type="sketch" />立减</span></p>
              </div>
            </div>
            <div className="ticket_grid__cont">
              <div className="ticket_grid__item js_open_link" data-url="https://y.qq.com/yanchu/detail.html?IDS=134212,110">
                <div  className="ticket_grid__media"><img src="//y.gtimg.cn/music/photo_new/T017M000004NQ58p2MGd8K.jpg?max_age=2592000" className="ticket_grid__media_img" alt="林宥嘉idol世界巡回演唱会 无锡站"/></div>
                  <div  className="ticket_grid__bd">
                    <h3 className="ticket_grid__tit">林宥嘉idol世界巡回演唱会 无锡站</h3>
                    <p className="ticket_grid__date"></p>
                    <p className="ticket_grid__txt">2020.01.10</p>
                    <p className="ticket_grid__txt">无锡市体育中心-体育馆</p>
                    <p className="ticket_grid__price"><em>¥ 380</em> 起<span className="ticket_grid__tag"><Icon className='zuan' type="sketch" />立减</span></p>
                  </div>
                </div>
                <div className="ticket_grid__item js_open_link" data-url="https://y.qq.com/yanchu/detail.html?IDS=138436,110">
                  <div  className="ticket_grid__media"><img src="//y.gtimg.cn/music/photo_new/T017M000002Sblhc2LiStR.jpg?max_age=2592000" className="ticket_grid__media_img" alt="MY BEAUTIFUL LIVE 杨千嬅世界巡回演唱会-海口站"/></div>
                    <div  className="ticket_grid__bd">
                      <h3 className="ticket_grid__tit">MY BEAUTIFUL LIVE 杨千嬅世界巡回演唱会-海口站</h3>
                      <p className="ticket_grid__date"></p>
                      <p className="ticket_grid__txt">2020.01.11</p>
                      <p className="ticket_grid__txt"></p>
                      <p className="ticket_grid__price"><em>¥ 298</em> 起<span className="ticket_grid__tag"><Icon className='zuan' type="sketch" />立减</span></p>
                    </div>
                  </div>

                  <div className="ticket_grid__item js_open_link" data-url="https://y.qq.com/yanchu/detail.html?IDS=142382,110">
                    <div  className="ticket_grid__media"><img src="//y.gtimg.cn/music/photo_new/T017M0000018HGhw0uSbpl.jpg?max_age=2592000" className="ticket_grid__media_img" alt="青花传情-周传雄巡回演唱会成都站"/></div>
                      <div  className="ticket_grid__bd">
                        <h3 className="ticket_grid__tit">青花传情-周传雄巡回演唱会成都站</h3>
                        <p className="ticket_grid__date"></p>
                        <p className="ticket_grid__txt">2020.02.14</p>
                        <p className="ticket_grid__txt">五粮液成都金融城演艺中心</p>
                        <p className="ticket_grid__price"><em>¥ 399</em> 起<span className="ticket_grid__tag"><Icon className='zuan' type="sketch" />立减</span></p>
                      </div>
                    </div>

                    <div className="ticket_grid__item js_open_link" data-url="https://y.qq.com/yanchu/detail.html?IDS=137153,110">
                      <div  className="ticket_grid__media"><img src="//y.gtimg.cn/music/photo_new/T017M0000038lG6b4VFW5M.jpg?max_age=2592000" className="ticket_grid__media_img" alt="王力宏《龙的传人2060》世界巡回演唱会-昆明站"/></div>
                        <div  className="ticket_grid__bd">
                          <h3 className="ticket_grid__tit">王力宏《龙的传人2060》世界巡回演唱会-昆明站</h3>
                          <p className="ticket_grid__date"></p>
                          <p className="ticket_grid__txt">2020.01.11</p>
                          <p className="ticket_grid__txt"></p>
                          <p className="ticket_grid__price"><em>¥ 380</em> 起<span className="ticket_grid__tag"><Icon className='zuan' type="sketch" />立减</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              )
            }
          }
          
export default ticketContentList