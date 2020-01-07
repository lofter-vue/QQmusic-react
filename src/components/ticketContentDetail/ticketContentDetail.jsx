import React,{Component} from 'react'
import {Icon} from 'antd'
import './css/ticketContentDetail.less'




class ticketContentDetail extends Component {

  componentWillMount(){
    console.log(this.props);
    
  }

  render(){
    let {isShow,data,isData} = this.props
    console.log(data);
    if(data){
      return(
        <div className="mod_index js_detail_container"  style={isShow?{display:'block'}:{display:'none'}}>
          <div className="section_inner js_detail_content">
            <div className="mod_ticket_list">
              <ul className="ticket_list js_detail_list">{
                data.getCategoryData.data.show_list.map((list,index)=>{
                  return(
                    <li className="ticket_list__item js_open_link" data-url="https://y.qq.com/yanchu/detail.html?IDS=143254,110" key={Date.now()+index}>
                      <div  className="ticket_list__media "><img src={list.star_logo || list.pic_url} className="ticket_list__media_img" alt=""/></div>
                      <div className="ticket_list__bd">
                        <h3 className="ticket_list__tit"><div >{list.show_name}</div></h3>
                        <p className="ticket_list__txt">{list.show_info}</p>
                        <span className="ticket_list__location"><i className="icon_location sprite_ticket"></i>{list.city}</span>
                        <span className="ticket_list__date"><i className="icon_date sprite_ticket"></i>{list.show_time}</span>
                        <span className="ticket_list__price"><em>¥ {list.min_price}</em> 起<span className="ticket_grid__tag"><Icon className='zuan' type="sketch" />立减</span></span>
                        <div className="ticket_list__ctrl">
                            <div  className="ticket_list__btn" data-url="https://y.qq.com/yanchu/detail.html?IDS=143254,110">立即购买</div>
                        </div>
                      </div>
                    </li>
                  )
                })
              }  
                
              </ul>
            </div>
          </div>
        </div>
      )
            }else{
              return(
                <h1>
                  暂无数据
                </h1>
              )
            }
  }
  
}

export default ticketContentDetail