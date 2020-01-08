import React,{Component} from 'react'
import Swiper from "swiper";
import { connect } from "react-redux";
import {saveForyou} from "../../../../redux/action_creators/action-foryou";

import './css/foryou.less';
import { reqForyou } from "../../../../api";


@connect( (state) => ({foryouList : state.foryou}),
  {save:saveForyou}
)
class ForYou extends Component{
  
  async componentDidMount(){
    //轮播图
    new Swiper('.swiper-container',{
      loop: true,
      pagination: {
        el: '.swiper-pagination'
      },
      navigation:{
        prevEl:'.swiper-button-prev',
        nextEl:'.swiper-button-next'
      }
    })

    //请求数据存入redux
    //请求数据存入redux
    let result = await reqForyou()
    const {status,data} = result
    if(status === 0){
      this.props.save(data)
    }
  }
  render(){
    const {foryouList} = this.props
    return (
      <div className='foryou swiper-container'>
        <ul className='swiper-wrapper'>
          {
            foryouList.map((item,index) => {
              return (
                <div className='swiper-slide' key={index}>
                  {item.map((item2,index2)=>{
                    return(
                      <li key={index2}>
                        <img src={item2.img} alt="bg"/>
                        <span>{item2.title}</span>
                        <span>播放量：{item2.num}</span>
                      </li>
                    )
                  })}
                </div>
              )
            })
          }
        </ul>
        <div className="swiper-pagination"></div>
      </div>
    )
  }
}

export default ForYou