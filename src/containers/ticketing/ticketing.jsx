import React, { Component } from 'react';
import {Icon} from 'antd'
import Swiper from '../../components/swiper/swiper'
import CitySearch from '../../components/city&search/CS'
import TicketContentList from '../../components/ticketContentList/ticketContentList'
import TicketContentDetail from '../../components/ticketContentDetail/ticketContentDetail'
import './css/ticketing.less'

export default class Ticketing extends Component {


  render() {
    return (
      <div className='ticketingContainer'>
        <Swiper/>
        <CitySearch/>
        <div className="sort_tab js_nav_container">
          <div className="section_inner">
            <ul className="sort_tab_list">
              <li className="sort_tab_list__item">
                <Icon className='iconF' type="appstore" />
                <p className="sort_tab_list__name">全部</p>
              </li>
              <li className="sort_tab_list__item">
                <Icon className='iconF' type="android" theme="filled" />
                <p className="sort_tab_list__name">演唱会</p>
              </li>
              <li className="sort_tab_list__item">
                <Icon className='iconF' type="fire" />
                <p className="sort_tab_list__name">LiveHouse</p>
              </li>
              <li className="sort_tab_list__item">
                <Icon className='iconF' type="apple" theme="filled" />
                <p className="sort_tab_list__name">音乐会</p>
              </li>
              <li className="sort_tab_list__item">
                <Icon className='iconF' type="chrome" theme="filled" />
                <p className="sort_tab_list__name">舞蹈芭蕾</p>
              </li>
              <li className="sort_tab_list__item">
                <Icon className='iconF' type="github" theme="filled" />
                <p className="sort_tab_list__name">话剧歌剧</p>
              </li>
              <li className="sort_tab_list__item">
                <Icon className='iconF' type="weibo-square" theme="filled" />
                <p className="sort_tab_list__name">其他演出</p>
              </li>
            </ul>
          </div>
        </div>
        <TicketContentList/>
        <TicketContentDetail/>
      </div>
    )
  }
}