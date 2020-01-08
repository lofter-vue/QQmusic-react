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
  state = {
    list:[
      [
        {
          img:'http://qpic.y.qq.com/music_cover/JBDCVgqXWXaYUvcsElqcicaJfkcUJATQU6oO1Kkict8A5mgACWBqznVA/300?n=1',
          title:'那些年，被抖音玩坏的蒙面唱将',
          num:'17.9万'
        },
        {
          img:'//qpic.y.qq.com/music_cover/INS3Wn20gAtrNdUzZ5YA2gxR3TvkhAv0j4KdF4892K2wvtaA3JqdKA/300?n=1',
          title:'心碎,情意绵绵总与见异思迁为难',
          num:'23.2万'
        },
        {
          img:'//qpic.y.qq.com/music_cover/Fe6emiag6IuVbMib3oN6yctfRw8hc0VN3tRzvefpPfs0FjGChqPhGsFQ/300?n=1',
          title:'华语舒缓 · 为疲惫寒冬加温',
          num:'6.5万'
        },
        {
          img:'//qpic.y.qq.com/music_cover/JwclnudaObJXGgJOkTPBGXxFswjnfjicicInn6IuicJlDic0FAiarR1whUQ/300?n=1',
          title:'轻拨四方琴｜流火乐团古风作品集',
          num:'2.6万'
        },
        {
          img:'//qpic.y.qq.com/music_cover/PiajxSqBRaELicf3GsOsslkQS0NO47ibXzia6stfzg9KnxH7qkuglNvXMw/300?n=1',
          title:'悲伤藏在无言的纯音里',
          num:'52.5万'
        }
      ],
      [
        {
          img:'//qpic.y.qq.com/music_cover/8eiaDBJ27yYicpMibYZmmEdNK2fqaSPicMUdtApSIHibwec2u9MQPT2j8xQ/300?n=1',
          title:'甜蜜情书：喜欢你没道理',
          num:'4.9万'
        },
        {
          img:'//qpic.y.qq.com/music_cover/qHVa7C6VF9SibnYtgb2SBrZtAzpjicd6gV5beibCqM4QXzeIMrrrwNMXQ/300?n=1',
          title:'嘘~ 温柔些，让这世界静下来',
          num:'10.7万'
        },
        {
          img:'//qpic.y.qq.com/music_cover/BxQgxonwzUDWO6IdGBmJ9iczstuXR8NkLP8DxLI7kqic1wSZeVDM92Lw/300?n=1',
          title:'深夜泪崩 · 晚睡者的不眠心事',
          num:'18.5万'
        },
        {
          img:'//qpic.y.qq.com/music_cover/R8unPZMA4Vp5v2Ms96bst5lFxygQmZzTlVqx9NWiaapP4s2c4y2S0iag/300?n=1',
          title:'民谣抒情丨给你37.2℃的甜蜜',
          num:'113.4万'
        },
        {
          img:'//qpic.y.qq.com/music_cover/NaaNddICOAialKmzOAdMOkaYDXticeUPovfWuPZicia5TGh20PlQHHiayww/300?n=1',
          title:'快乐源泉｜用DJ忘掉所有不开心',
          num:'2.2万'
        }
      ]
    ]
  }
  async componentDidMount(){
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