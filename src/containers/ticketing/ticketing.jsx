import React, { Component } from 'react';
import {Icon} from 'antd'
import Swiper from '../../components/swiper/swiper'
import CitySearch from '../../components/city&search/CS'
import TicketContentList from '../../components/ticketContentList/ticketContentList'
import TicketContentDetail from '../../components/ticketContentDetail/ticketContentDetail'
import './css/ticketing.less'
let navArr = require ('../../static/json/ticketing.json')
let concert = require('../../static/json/yanchanghui.json')
let livehouse = require('../../static/json/livehouse.json')
let ticketAll = require('../../static/json/ticketAll.json')


export default class Ticketing extends Component {

  state={
    currentNavIndex:0,
    data:concert,
    all:ticketAll.getFirstData.data.classes,
    dataArr:[concert,concert,livehouse,livehouse,livehouse,concert],
    banners:ticketAll.getFirstData.data.banners,
    searchObj:{
      getCategoryData:{
        data:{
          show_list:[]
        }
      }
    },
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
    this.state.all.forEach((item)=>{
       item.showlist.forEach((list)=>{
        if(list.show_name.indexOf(value)!==-1){
          newArr.push(list)
          let searchObj = this.state.searchObj;
          searchObj.getCategoryData.data.show_list = newArr;
          let dataArr = this.state.dataArr;
          dataArr.push(searchObj)
          this.setState({
            dataArr,
          })
        }
      })
    })
    
    this.updateIndex(8)
    
  }

  render() {
    return (
      <div className='ticketingContainer'>
        <Swiper banners={this.state.banners}/>
        <CitySearch searchShow={this.searchShow}/>
        <div className="sort_tab js_nav_container">
          <div className="section_inner">
            <ul className="sort_tab_list">
              {
                navArr.getTag.data.show_type_list.map((nav,index)=>{
                  return(
                    <li className={`sort_tab_list__item ${this.state.currentNavIndex === index?'active':''}`} key={nav.id} onClick={()=>this.updateIndex(index)}>
                      <Icon className='iconF' type="appstore"/>
                      <p className="sort_tab_list__name">{nav.name}</p>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
        {
          
        }
        <TicketContentList isShow={this.state.currentNavIndex===0} data={this.state.all}/>
        <TicketContentDetail isShow={this.state.currentNavIndex!==0} data={this.state.data}/>
      </div>
    )
  }
}