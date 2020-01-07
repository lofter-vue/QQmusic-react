import React, { Component } from 'react'
import {Icon,Input} from 'antd';
import BScroll from 'better-scroll';
import './css/city&search.less';
const { Search } = Input;

let cityArr =  require ('../../static/json/ticketing.json');

class CitySearch extends Component {

  state={
    isShowCity:false,
    display:'none',
    currentCity:'全国',
    hotCity:["全国","北京","上海","广州","深圳","成都","武汉"],
    currentIndex:0
  }

  componentDidMount() {

    //如果数据请求回来，就创建scroll对象
    if(cityArr.getFirstData.data.citys.length>0){
      this.cityList = new BScroll('.wrapper',{
        clcik:true,
        probeType:1,
        scrollbar:true,
        mouseWheel:true
      })
    }
  }
  
  //控制城市框的显示隐藏
  showCity = () => {
    this.setState((prevstate)=>({
      isShowCity:!prevstate.isShowCity,
      display:prevstate.isShowCity?'none':'block'
    }))
  }

  //城市框按字母查找点击对应元素跳转到顶部
  letterFilter(index){
    let ul = this.refs.ulParent.children[index]
    this.cityList.scrollToElement(ul,300)
    this.setState({
      currentIndex:index
    })
  }

  //点击保存当前城市
  saveCurrentCity(item){
    this.setState((prevstate)=>({
      currentCity:item,
      isShowCity:!prevstate.isShowCity,
      display:prevstate.isShowCity?'none':'block'
    }))
  }

  //搜索关键词
  search(value){
    //调用父组件的搜索方法
    this.props.searchShow(value)
    
  }

  render() {
    return (
      <div className='CitySearchContainer'>
        <div>
          <div className="user_ctrl__btn">
            <div className='selector' onClick={this.showCity}> 
              <p className="user_ctrl__btn_box js_open_city_dialog" data-id="0">{this.state.currentCity}</p>
              <Icon type="down" />
            </div>
            <Search className='antDsearch' placeholder="搜索票务" size="large" onSearch={value => this.search(value)} enterButton  style={{width:489+"px",height:50+"px"}}/>
            <div className="popup_data_detail popup_detail_city js_city_dialog" style={{display:this.state.display}}>
              <div className="popup_data_detail__cont">
                <div className="popup_detail_city__grid">
                  <div className="popup_detail_city__item">
                    <label className="popup_detail_city__label">当前城市</label>
                    <ul className="city_list">
                      <li className="city_list__item">
                        <p  className="city_list__box js_choose_city js_current_city" data-id="0">{this.state.currentCity}</p>
                      </li>
                    </ul>
                  </div>
                  <div className="popup_detail_city__item">
                    <label className="popup_detail_city__label">热门城市</label>
                    <ul className="city_list">
                      {
                        this.state.hotCity.map((item,index)=>{
                          return (
                            <li className="city_list__item letter_list__item--current" key={Date.now()+index} onClick={()=>this.saveCurrentCity(item)}>
                              <p  className="city_list__box js_choose_city" data-id={index}>{item}</p>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>

                </div>

                <div className="popup_detail_city__grid">
                  <h3 className="popup_detail_city__tit">按字母查找</h3>
                  <div className="popup_detail_city__item">
                    <ul className="letter_list">
                      {
                        cityArr.getFirstData.data.citys.map((letter,index)=>{
                          return(
                            <li className={`${this.state.currentIndex === index?'letterActive':''} letter_list__item js_choose_city_letter`} data-key={letter.name} key={Date.now()+index} onClick={()=>this.letterFilter(index)}>
                              <p  className="letter_list__box " data-key={letter.name}>{letter.name}</p>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>

                  <div className="popup_detail_city__item js_letter_list wrapper" ref="wrapper">
                    <div className='content' ref='ulParent'>
                    {
                      cityArr.getFirstData.data.citys.map((letter,index)=>{
                          return(
                            <ul className="city_list js_letter_item" data-key={letter.name} key={Date.now()+index}>
                              <li className="city_list__item">{letter.name}</li>
                              {
                                letter.city_list.map((city)=>{
                                  return(
                                    <li className="city_list__item" key={city.city_id} onClick={()=>this.saveCurrentCity(city.city_name)}>
                                      <p  className="city_list__box js_choose_city" data-id={city.city_id}>{city.city_name}</p>
                                    </li>
                                  )
                                })
                              }
                            </ul>
                          )
                      })
                        
                    }
                    </div>
                    

                  </div>
                </div>


              </div>
              <i className="popup_data_detail__arrow"></i>
            </div>
            <div className='myOrder'>
              我的订单
              <Icon className='rightArrow' type="right" />
            </div>
          </div>
        </div>
        
      </div>
    )
  }

}

export default CitySearch