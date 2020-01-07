import React, { Component } from 'react'
import './css/ranking.less';

export default class Ranking extends Component {
  render() {
    return (
      <div className='ranking'>
        <ul>
          <li>
            <div className='title'>巅峰榜</div>
            <div className='title-detail'>流行指数</div>
            <div className='hr'>——</div>
            <div className='r-container'>
              <div className='detail'>
                <div>1 Yummy</div>
                <div>Justin Bieber</div>
              </div>
              <div className='detail'>
                <div>2 星空下的我</div>
                <div>戴羽彤</div>
              </div>
              <div className='detail'>
                <div>3 凌晨两点的北京</div>
                <div>谢宇伦</div>
              </div>
            </div>
          </li>
          <li>
            <div className='title'>巅峰榜</div>
            <div className='title-detail'>热歌</div>
            <div className='hr'>——</div>
            <div className='r-container'>
              <div className='detail'>
                <div>1 下山</div>
                <div>要不要买菜</div>
              </div>
              <div className='detail'>
                <div>2 句号</div>
                <div>G.E.M. 邓紫棋</div>
              </div>
              <div className='detail'>
                <div>3 透明</div>
                <div>G.E.M. 邓紫棋</div>
              </div>
            </div>
          </li>
          <li>
            <div className='title'>巅峰榜</div>
            <div className='title-detail'>新歌</div>
            <div className='hr'>——</div>
            <div className='r-container'>
              <div className='detail'>
                <div>1 火红的萨日朗</div>
                <div>要不要买菜</div>
              </div>
              <div className='detail'>
                <div>2 句号</div>
                <div>G.E.M. 邓紫棋</div>
              </div>
              <div className='detail'>
                <div>3 透明</div>
                <div>G.E.M. 邓紫棋</div>
              </div>
            </div>
          </li>
          <li>
            <div className='title'>巅峰榜</div>
            <div className='title-detail'>欧美</div>
            <div className='hr'>——</div>
            <div className='r-container'>
              <div className='detail'>
                <div>1 Alone, Pt. II</div>
                <div>Alan Walker/Ava Max</div>
              </div>
              <div className='detail'>
                <div>2 就在此刻</div>
                <div>K-391/Alan Walker</div>
              </div>
              <div className='detail'>
                <div>3 2020</div>
                <div>Great Good Fine OK</div>
              </div>
            </div>
          </li>
          <li>
            <div className='title'>巅峰榜</div>
            <div className='title-detail'>韩国</div>
            <div className='hr'>——</div>
            <div className='r-container'>
              <div className='detail'>
                <div>1 Psycho</div>
                <div>Red Velvet (레드벨벳)</div>
              </div>
              <div className='detail'>
                <div>2 노을 (Sunset)</div>
                <div>Davichi (다비치)</div>
              </div>
              <div className='detail'>
                <div>3 In & Out</div>
                <div>Red Velvet (레드벨벳)</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}