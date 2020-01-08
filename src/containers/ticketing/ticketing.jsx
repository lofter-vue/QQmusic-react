import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Icon} from 'antd'
import Swiper from '../../components/swiper/swiper'
import CitySearch from '../../components/city&search/CS'
import TicketContentList from '../../components/ticketContentList/ticketContentList'
import TicketContentDetail from '../../components/ticketContentDetail/ticketContentDetail'
import './css/ticketing.less'
import {
  reqTicketAll,
  reqTicket,
  reqConcert,
} from '../../api'
import {
  saveTicketAll,
  saveTicket
} from '../../redux/action_creators/action-foryou'
let navArr = require ('../../static/json/ticketing.json')
let concert = require('../../static/json/yanchanghui.json')
let livehouse = require('../../static/json/livehouse.json')
let ticketAll = require('../../static/json/ticketAll.json')


@connect(
  state => ({Ticket:state.Ticket,navArr:state.navArr}),
  {
    saveTicketAll,
    saveTicket
  }
)
class Ticketing extends Component {

  componentWillMount() {
    this.getTicketAll()
    this.getTicket()
  }
  
  getTicketAll = async () => {
    let result = await reqTicketAll()
    let {status,data} = result;
    if(status === 0){
      this.props.saveTicketAll(data)
    }
  }

  getTicket = async () => {
    let result = await reqTicket()
    let {status,data} = result;
    
    if(status === 0){
      this.props.saveTicket(data)
    }
  }

  state={
    currentNavIndex:0,
    data:concert,
    dataArr:[concert,concert,livehouse,livehouse,livehouse,concert,livehouse,livehouse],
    searchObj:{
      getCategoryData:{
        data:{
          show_list:[]
        }
      }
    }
  }

  //改变当前选中导航的index
  updateIndex=(index)=>{
    let data = this.state.dataArr[index]
    this.setState({
      currentNavIndex:index,
      data,
    })
  }

  //根据搜索组件传递参数过滤数据
  searchShow=(value)=>{
    let newArr = []
    let searchObj = this.state.searchObj;
    this.props.all.forEach((item)=>{
       item.showlist.forEach((list)=>{
        if(list.show_name.indexOf(value)!==-1){
          newArr.push(list)
          searchObj.getCategoryData.data.show_list = newArr;
          let dataArr = this.state.dataArr;
          dataArr[8] = searchObj
          this.setState({
            dataArr,
            searchObj:{
              getCategoryData:{
                data:{
                  show_list:[]
                }
              }
            }
          })

        }
        
        if(searchObj.getCategoryData.data.show_list.length===0){
          let dataArr = this.state.dataArr;
          dataArr[8] = ''
          console.log(dataArr)
          this.setState({
            dataArr,
          })
        }
      })
    })
    
    this.updateIndex(8)
    
  }

  render() {
    let{Ticket,navArr}=this.props;

    if(Ticket.banners && navArr.navArr) {
    return (
      <div className='ticketingContainer'>
        <Swiper banners={Ticket.banners}/>
        <CitySearch searchShow={this.searchShow} cityArr={this.props.navArr}/>
        <div className="sort_tab js_nav_container">
          <div className="section_inner">
            <ul className="sort_tab_list">
              {
                navArr.navArr.getTag.data.show_type_list.map((nav,index)=>{
                  return(
                    <li className={`sort_tab_list__item ${this.state.currentNavIndex === index?'active':''}`} key={nav.id} onClick={()=>this.updateIndex(index)}>
                      <i className='iconF'></i>
                      <p className="sort_tab_list__name">{nav.name}</p>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
        <TicketContentList isShow={this.state.currentNavIndex===0} data={Ticket.all}/>
        <TicketContentDetail isShow={this.state.currentNavIndex!==0} data={this.state.data} isData={this.state.isData}/>
      </div>
    )
  }else{
    return null
  }
  }
}

export default Ticketing