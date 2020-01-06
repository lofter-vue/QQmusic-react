import React,{Component} from 'react';
import Swiper from '../../components/swiper/swiper'
import CitySearch from '../../components/city&search/CS'
import './css/ticketing.less'

export default class Ticketing extends Component{

  
  render(){
    return (
      <div className='ticketingContainer'>
        <Swiper></Swiper>
        <CitySearch></CitySearch>
      </div>
    )
  }
}