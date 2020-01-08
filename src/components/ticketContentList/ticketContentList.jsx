import React, { Component } from 'react';
import {Icon} from 'antd'
import './css/ticketContentList.less'

class ticketContentList extends Component {

  render() {
    let {isShow,data} = this.props

    return (
      <div className="mod_index mod_bg" style={isShow?{display:'block'}:{display:'none'}}>
        {
          data.map((tit)=>{
            if(tit.showlist.length<=1) return
            return(
              <div className="section_inner" key={tit.id}>
                <div className="index__hd">
                  <h2 className="index__tit">{tit.name}</h2>
                </div>
                <div className="mod_ticket_grid">
                    <div  className="ticket_grid__side js_open_link" data-url="https://y.qq.com/yanchu/detail.html?IDS=144574,110">
                      <img src={tit.showlist[0].pic_url} className="ticket_grid__side_img" alt=""/>
                      <div className="ticket_grid__side_info">
                        <h3 className="ticket_grid__side_tit">{tit.showlist[0].show_name}</h3>
                        <p className="ticket_grid__side_price"><em>¥ {tit.showlist[0].min_price}</em> 起<span className="ticket_grid__tag"><Icon className='zuan' type="sketch" />立减</span></p>
                      </div>
                    </div>
                <div className="ticket_grid__cont">
              {
                tit.showlist.map((list,index)=>{
                  if(index===0){
                    return
                  }else if(index > 0 && index < 5){
                    return(
                      <a href={`https://y.qq.com/yanchu/detail.html?IDS=${list.show_id},${list.partner_id}`}>
                        <div className="ticket_grid__item js_open_link" data-url="https://y.qq.com/yanchu/detail.html?IDS=134212,110" key={list.show_id}>
                          <div  className="ticket_grid__media">
                            <img src={list.pic_url} className="ticket_grid__media_img" alt="林宥嘉idol世界巡回演唱会 无锡站"/>
                          </div>
                            <div  className="ticket_grid__bd">
                              <h3 className="ticket_grid__tit">{list.show_name}</h3>
                              <p className="ticket_grid__date"></p>
                              <p className="ticket_grid__txt">2020.01.10</p>
                              <p className="ticket_grid__txt">无锡市体育中心-体育馆</p>
                              <p className="ticket_grid__price"><em>¥ 380</em> 起<span className="ticket_grid__tag"><Icon className='zuan' type="sketch" />立减</span></p>
                            </div>
                        </div>
                      </a>
                    )
                  }
                })
              }
                  </div>
                </div>
              </div>
            )
          })
        } 
      </div>
              )
            }
          }
          
export default ticketContentList