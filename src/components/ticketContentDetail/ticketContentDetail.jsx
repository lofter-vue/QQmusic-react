import React,{Component} from 'react'
import {Icon} from 'antd'
import './css/ticketContentDetail.less'

class ticketContentDetail extends Component {
  render(){
    return(
      <div className="mod_index js_detail_container">
        <div className="section_inner js_detail_content">
          <div className="mod_ticket_list">
            <ul className="ticket_list js_detail_list">  
              <li className="ticket_list__item js_open_link" data-url="https://y.qq.com/yanchu/detail.html?IDS=143254,110">
                <div  className="ticket_list__media "><img src="https://y.gtimg.cn/music/photo_new/T017M000002S6EuK4BP7BN.jpg" className="ticket_list__media_img" alt=""/></div>
                <div className="ticket_list__bd">
                  <h3 className="ticket_list__tit"><div >孟凡明、龚子婕领衔贺岁2020年MAO流行、民谣新年音乐会</div></h3>
                  <p className="ticket_list__txt">2019的冬天，异乡人是对2019年冬天的一个感慨，中國傳統的新年即將來臨，这个对于中国人意义非凡的节日意味着一年忙碌过后的收获和回归，，也许</p>
                  <span className="ticket_list__location"><i className="icon_location sprite_ticket"></i>MAOLivehouse</span>
                  <span className="ticket_list__date"><i className="icon_date sprite_ticket"></i>2020.01.08</span>
                  <span className="ticket_list__price"><em>¥ 80</em> 起<span className="ticket_grid__tag"><Icon className='zuan' type="sketch" />立减</span></span>
                  <div className="ticket_list__ctrl">
                      <div  className="ticket_list__btn" data-url="https://y.qq.com/yanchu/detail.html?IDS=143254,110">立即购买</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
  
}

export default ticketContentDetail