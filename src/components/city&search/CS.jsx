import React, { Component } from 'react'
import {Icon,Input} from 'antd';
import './css/city&search.less'
const { Search } = Input;

class CitySearch extends Component {

  state={
    isShowCity:false,
    display:'none'
  }

  showCity = () => {
    this.setState((prevstate)=>({
      isShowCity:!prevstate.isShowCity,
      display:prevstate.isShowCity?'none':'block'
    }))
  }

  render() {
    return (
      <div className='CitySearchContainer'>
        <div>
          <div className="user_ctrl__btn">
            <div className='selector' onClick={this.showCity}> 
              <p className="user_ctrl__btn_box js_open_city_dialog" data-id="0">全国</p>
              <Icon type="down" />
            </div>
            <Search className='antDsearch' placeholder="搜索票务" size="large" onSearch={value => console.log(value)} enterButton  style={{width:489+"px",height:50+"px"}}/>
            <div className="popup_data_detail popup_detail_city js_city_dialog" style={{display:this.state.display}}>
              <div className="popup_data_detail__cont">
                <div className="popup_detail_city__grid">
                  <div className="popup_detail_city__item">
                    <label className="popup_detail_city__label">当前城市</label>
                    <ul className="city_list">
                      <li className="city_list__item">
                        <p  className="city_list__box js_choose_city js_current_city" data-id="0">全国</p>
                      </li>
                    </ul>
                  </div>
                  <div className="popup_detail_city__item">
                    <label className="popup_detail_city__label">热门城市</label>
                    <ul className="city_list">
                      <li className="city_list__item letter_list__item--current">
                        <p  className="city_list__box js_choose_city" data-id="0">全国</p>
                      </li>
                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="10">北京</p>
                      </li>
                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="82">上海</p>
                      </li>
                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="210">广州</p>
                      </li>
                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="221">深圳</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="267">成都</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="179">武汉</p>
                      </li>

                    </ul>
                  </div>

                </div>

                <div className="popup_detail_city__grid">
                  <h3 className="popup_detail_city__tit">按字母查找</h3>
                  <div className="popup_detail_city__item">
                    <ul className="letter_list">

                      <li className="letter_list__item js_choose_city_letter" data-key="A">
                        <p  className="letter_list__box " data-key="A">A</p>
                      </li>

                      <li className="letter_list__item js_choose_city_letter" data-key="B">
                        <p  className="letter_list__box " data-key="B">B</p>
                      </li>

                      <li className="letter_list__item js_choose_city_letter" data-key="C">
                        <p  className="letter_list__box " data-key="C">C</p>
                      </li>

                      <li className="letter_list__item js_choose_city_letter" data-key="D">
                        <p  className="letter_list__box " data-key="D">D</p>
                      </li>

                      <li className="letter_list__item js_choose_city_letter" data-key="F">
                        <p  className="letter_list__box " data-key="F">F</p>
                      </li>

                      <li className="letter_list__item js_choose_city_letter" data-key="G">
                        <p  className="letter_list__box " data-key="G">G</p>
                      </li>

                      <li className="letter_list__item js_choose_city_letter" data-key="H">
                        <p  className="letter_list__box " data-key="H">H</p>
                      </li>

                      <li className="letter_list__item js_choose_city_letter" data-key="J">
                        <p  className="letter_list__box " data-key="J">J</p>
                      </li>

                      <li className="letter_list__item js_choose_city_letter" data-key="K">
                        <p  className="letter_list__box " data-key="K">K</p>
                      </li>

                      <li className="letter_list__item js_choose_city_letter" data-key="L">
                        <p  className="letter_list__box " data-key="L">L</p>
                      </li>

                      <li className="letter_list__item js_choose_city_letter" data-key="M">
                        <p  className="letter_list__box " data-key="M">M</p>
                      </li>

                      <li className="letter_list__item js_choose_city_letter" data-key="N">
                        <p  className="letter_list__box " data-key="N">N</p>
                      </li>

                      <li className="letter_list__item js_choose_city_letter" data-key="Q">
                        <p  className="letter_list__box " data-key="Q">Q</p>
                      </li>

                      <li className="letter_list__item js_choose_city_letter" data-key="S">
                        <p  className="letter_list__box " data-key="S">S</p>
                      </li>

                      <li className="letter_list__item js_choose_city_letter" data-key="T">
                        <p  className="letter_list__box " data-key="T">T</p>
                      </li>

                      <li className="letter_list__item js_choose_city_letter" data-key="W">
                        <p  className="letter_list__box " data-key="W">W</p>
                      </li>

                      <li className="letter_list__item js_choose_city_letter" data-key="X">
                        <p  className="letter_list__box " data-key="X">X</p>
                      </li>

                      <li className="letter_list__item js_choose_city_letter" data-key="Y">
                        <p  className="letter_list__box " data-key="Y">Y</p>
                      </li>

                      <li className="letter_list__item js_choose_city_letter" data-key="Z">
                        <p  className="letter_list__box " data-key="Z">Z</p>
                      </li>

                    </ul>
                  </div>

                  <div className="popup_detail_city__item js_letter_list">

                    <ul className="city_list js_letter_item" data-key="A">
                      <li className="city_list__item">A</li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="399">澳门</p>
                      </li>

                    </ul>

                    <ul className="city_list js_letter_item" data-key="B">
                      <li className="city_list__item">B</li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="10">北京</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="19">保定</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="151">滨州</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="232">百色</p>
                      </li>

                    </ul>

                    <ul className="city_list js_letter_item" data-key="C">
                      <li className="city_list__item">C</li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="21">承德</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="60">长春</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="90">常州</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="196">长沙</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="236">崇左</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="266">重庆</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="267">成都</p>
                      </li>

                    </ul>

                    <ul className="city_list js_letter_item" data-key="D">
                      <li className="city_list__item">D</li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="26">大同</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="52">大连</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="78">大庆</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="149">德州</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="218">东莞</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="302">大理</p>
                      </li>

                    </ul>

                    <ul className="city_list js_letter_item" data-key="F">
                      <li className="city_list__item">F</li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="124">福州</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="227">佛山</p>
                      </li>

                    </ul>

                    <ul className="city_list js_letter_item" data-key="G">
                      <li className="city_list__item">G</li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="210">广州</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="238">桂林</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="288">贵阳</p>
                      </li>

                    </ul>

                    <ul className="city_list js_letter_item" data-key="H">
                      <li className="city_list__item">H</li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="14">衡水</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="34">呼和浩特</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="69">哈尔滨</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="96">杭州</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="107">合肥</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="181">黄冈</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="212">惠州</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="245">海口</p>
                      </li>

                    </ul>

                    <ul className="city_list js_letter_item" data-key="J">
                      <li className="city_list__item">J</li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="61">吉林</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="101">嘉兴</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="104">金华</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="142">吉安</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="144">济南</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="159">济宁</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="180">荆州</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="228">江门</p>
                      </li>

                    </ul>

                    <ul className="city_list js_letter_item" data-key="K">
                      <li className="city_list__item">K</li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="297">昆明</p>
                      </li>

                    </ul>

                    <ul className="city_list js_letter_item" data-key="L">
                      <li className="city_list__item">L</li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="13">廊坊</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="24">临汾</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="64">辽源</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="150">聊城</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="237">柳州</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="310">丽江</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="330">兰州</p>
                      </li>

                    </ul>

                    <ul className="city_list js_letter_item" data-key="M">
                      <li className="city_list__item">M</li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="120">马鞍山</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="230">茂名</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="285">绵阳</p>
                      </li>

                    </ul>

                    <ul className="city_list js_letter_item" data-key="N">
                      <li className="city_list__item">N</li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="83">南京</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="92">南通</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="99">宁波</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="133">南昌</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="231">南宁</p>
                      </li>

                    </ul>

                    <ul className="city_list js_letter_item" data-key="Q">
                      <li className="city_list__item">Q</li>

                      <li className="city_list__item letter_list__item--current">
                        <p  className="city_list__box js_choose_city" data-id="0">全国</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="16">秦皇岛</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="128">泉州</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="153">青岛</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="242">钦州</p>
                      </li>

                    </ul>

                    <ul className="city_list js_letter_item" data-key="S">
                      <li className="city_list__item">S</li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="12">石家庄</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="46">沈阳</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="82">上海</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="87">宿迁</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="91">苏州</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="103">绍兴</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="221">深圳</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="246">三亚</p>
                      </li>

                    </ul>

                    <ul className="city_list js_letter_item" data-key="T">
                      <li className="city_list__item">T</li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="11">天津</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="15">唐山</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="23">太原</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="49">铁岭</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="86">泰州</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="97">台州</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="160">泰安</p>
                      </li>

                    </ul>

                    <ul className="city_list js_letter_item" data-key="W">
                      <li className="city_list__item">W</li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="88">无锡</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="100">温州</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="117">芜湖</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="158">潍坊</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="179">武汉</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="239">梧州</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="357">乌鲁木齐</p>
                      </li>

                    </ul>

                    <ul className="city_list js_letter_item" data-key="X">
                      <li className="city_list__item">X</li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="89">徐州</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="125">厦门</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="182">咸宁</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="301">西双版纳</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="320">西安</p>
                      </li>

                    </ul>

                    <ul className="city_list js_letter_item" data-key="Y">
                      <li className="city_list__item">Y</li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="58">营口</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="157">烟台</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="187">宜昌</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="216">阳江</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="352">银川</p>
                      </li>

                    </ul>

                    <ul className="city_list js_letter_item" data-key="Z">
                      <li className="city_list__item">Z</li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="20">张家口</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="106">舟山</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="154">淄博</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="161">郑州</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="201">株洲</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="208">张家界</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="222">珠海</p>
                      </li>

                      <li className="city_list__item ">
                        <p  className="city_list__box js_choose_city" data-id="229">湛江</p>
                      </li>

                    </ul>

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