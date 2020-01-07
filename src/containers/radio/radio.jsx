import React,{Component} from 'react'
import SideBar from './sidebar/sidebar.jsx'
import RadioItem from './radioItem/radioItem.jsx'
import './css/radio.less'

export default class Radio extends Component{

  state = {
    hot: [
      {
        id: 1,
        img: 'https://y.gtimg.cn/music/common/upload/t_musichall_pic/363459.jpg?max_age=2592000',
        title: '个性电台',
        play_number: 1933.8
      },
      {
        id: 2,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_199_10_8.jpg?max_age=2592000',
        title: '热歌',
        play_number: 282
      },
      {
        id: 3,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_101_10_4.jpg?max_age=2592000',
        title: '随心听',
        play_number: 284.3
      },
      {
        id: 4,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_167_10_4.jpg?max_age=2592000',
        title: '网络流行',
        play_number: 168.7
      },
      {
        id: 5,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_307_10_4.jpg?max_age=2592000',
        title: '一人一首流行歌',
        play_number: 230.8
      },
      {
        id: 6,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_270_10_4.jpg?max_age=2592000',
        title: 'KTV必点歌',
        play_number: 246.8
      },
      {
        id: 7,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_571_10_1.jpg?max_age=2592000',
        title: 'YAMAHA',
        play_number: 1.2
      },
      {
        id: 8,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_567_10_2.jpg?max_age=2592000',
        title: '热门翻唱',
        play_number: 273.5
      },
      {
        id: 9,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_568_10_1.jpg?max_age=2592000',
        title: '综艺',
        play_number: 76.6
      },
      {
        id: 10,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_554_10_3.jpg?max_age=2592000',
        title: '影视原声',
        play_number: 23.3
      },
      {
        id: 11,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_134_10_5.jpg?max_age=2592000',
        title: '电子',
        play_number: 13.8
      },
      {
        id: 12,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_347_10_4.jpg?max_age=2592000',
        title: '车载低音炮',
        play_number: 159.5
      },
      {
        id: 13,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_136_10_5.jpg?max_age=2592000',
        title: '伤感',
        play_number: 113.6
      },
      {
        id: 14,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_368_10_7.jpg?max_age=2592000',
        title: '睡前',
        play_number: 42.6
      },
      {
        id: 15,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_141_10_8.jpg?max_age=2592000',
        title: '咖啡馆',
        play_number: 59.2
      },
      {
        id: 16,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_550_10_2.jpg?max_age=2592000',
        title: '情歌',
        play_number: 24
      },
      {
        id: 17,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_350_10_4.jpg?max_age=2592000',
        title: '经典翻唱',
        play_number: 66.2
      },
      {
        id: 18,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_119_10_6.jpg?max_age=2592000',
        title: '粤语',
        play_number: 63.2
      },
      {
        id: 19,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_215_10_4.jpg?max_age=2592000',
        title: 'DJ热碟',
        play_number: 248
      },
      {
        id: 20,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_129_10_4.jpg?max_age=2592000',
        title: '轻音乐',
        play_number: 35.5
      },
      {
        id: 21,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_126_10_4.jpg?max_age=2592000',
        title: '新歌',
        play_number: 29.6
      },
      {
        id: 22,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_348_10_5.jpg?max_age=2592000',
        title: '劲歌热舞',
        play_number: 44.3
      },
      {
        id: 23,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_360_10_5.jpg?max_age=2592000',
        title: '抒情英文歌',
        play_number: 26.7
      },
      {
        id: 24,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_127_10_4.jpg?max_age=2592000',
        title: '经典',
        play_number: 174.7
      },
      {
        id: 25,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_211_10_4.jpg?max_age=2592000',
        title: '安静',
        play_number: 64.8
      }
    ],
    am: [
      {
        id: 26,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_414_10_1.jpg?max_age=2592000',
        title: '好好工作',
        play_number: 15.5
      },
      {
        id: 27,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_415_10_1.jpg?max_age=2592000',
        title: '陪你看书',
        play_number: 9.2
      },
      {
        id: 28,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_418_10_1.jpg?max_age=2592000',
        title: '轻松一刻',
        play_number: 14.8
      },
      {
        id: 29,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_421_10_1.jpg?max_age=2592000',
        title: '满满正能量',
        play_number: 11.1
      },
      {
        id: 30,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_419_10_1.jpg?max_age=2592000',
        title: '来一杯咖啡',
        play_number: 7.2
      }
    ],
    mood: [
      {
        id: 31,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_136_10_5.jpg?max_age=2592000',
        title: '伤感',
        play_number: 113.6
      },
      {
        id: 32,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_140_10_4.jpg?max_age=2592000',
        title: '快乐',
        play_number: 37
      },
      {
        id: 33,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_211_10_4.jpg?max_age=2592000',
        title: '安静',
        play_number: 64.8
      },
      {
        id: 34,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_137_10_4.jpg?max_age=2592000',
        title: '寂寞',
        play_number: 23.9
      },
      {
        id: 35,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_217_10_4.jpg?max_age=2592000',
        title: '疗伤',
        play_number: 27.4
      }
    ],
    theme: [
      {
        id: 36,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_199_10_8.jpg?max_age=2592000',
        title: '热歌',
        play_number: 282
      },
      {
        id: 37,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_126_10_4.jpg?max_age=2592000',
        title: '新歌',
        play_number: 29.6
      },
      {
        id: 38,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_550_10_2.jpg?max_age=2592000',
        title: '情歌',
        play_number: 24
      },
      {
        id: 39,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_554_10_3.jpg?max_age=2592000',
        title: '电影原声',
        play_number: 23.3
      },
      {
        id: 40,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_347_10_4.jpg?max_age=2592000',
        title: '车载低音炮',
        play_number: 159.5
      },
      {
        id: 41,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_127_10_4.jpg?max_age=2592000',
        title: '经典',
        play_number: 174.7
      },
      {
        id: 42,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_567_10_2.jpg?max_age=2592000',
        title: '热门翻唱',
        play_number: 273.5
      },
      {
        id: 43,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_552_10_1.jpg?max_age=2592000',
        title: '游戏',
        play_number: 5.7
      },
      {
        id: 44,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_215_10_4.jpg?max_age=2592000',
        title: 'DJ热碟',
        play_number: 248
      },
      {
        id: 45,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_570_10_1.jpg?max_age=2592000',
        title: '华研音乐',
        play_number: 1.8
      },
      {
        id: 46,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_568_10_1.jpg?max_age=2592000',
        title: '综艺',
        play_number: 76.6
      },
      {
        id: 47,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_569_10_1.jpg?max_age=2592000',
        title: 'LIVE现场',
        play_number: 1
      },
      {
        id: 48,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_144_10_4.jpg?max_age=2592000',
        title: 'ACG',
        play_number: 5.1
      },
      {
        id: 49,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_167_10_4.jpg?max_age=2592000',
        title: '网络流行',
        play_number: 168.7
      },
      {
        id: 50,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_270_10_4.jpg?max_age=2592000',
        title: 'KTV必点歌',
        play_number: 246.8
      },
      {
        id: 51,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_307_10_4.jpg?max_age=2592000',
        title: '一人一首招牌歌',
        play_number: 230.8
      },
    ],
    scene: [
      {
        id: 52,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_368_10_7.jpg?max_age=2592000',
        title: '睡前',
        play_number: 42.6
      },
      {
        id: 53,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_322_10_6.jpg?max_age=2592000',
        title: '起床',
        play_number: 28
      },
      {
        id: 54,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_269_10_6.jpg?max_age=2592000',
        title: '运动',
        play_number: 41.1
      },
      {
        id: 55,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_314_10_8.jpg?max_age=2592000',
        title: '店铺',
        play_number: 56
      },
      {
        id: 56,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_192_10_7.jpg?max_age=2592000',
        title: '旅行',
        play_number: 13.5
      },
      {
        id: 57,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_335_10_7.jpg?max_age=2592000',
        title: '夜店',
        play_number: 25.7
      },
      {
        id: 58,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_146_10_6.jpg?max_age=2592000',
        title: '胎教',
        play_number: 10
      },
      {
        id: 59,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_325_10_6.jpg?max_age=2592000',
        title: '雨天',
        play_number: 7.6
      },
      {
        id: 60,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_141_10_8.jpg?max_age=2592000',
        title: '咖啡馆',
        play_number: 59.2
      },
      {
        id: 61,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_317_10_6.jpg?max_age=2592000',
        title: '学习',
        play_number: 66.6
      },
      {
        id: 62,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_318_10_6.jpg?max_age=2592000',
        title: '工作',
        play_number: 38.3
      }
    ],
    musicStyle: [
      {
        id: 63,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_134_10_5.jpg?max_age=2592000',
        title: '电子',
        play_number: 13.8
      },
      {
        id: 64,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_345_10_4.jpg?max_age=2592000',
        title: '流行',
        play_number: 42.8
      },
      {
        id: 65,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_365_10_4.jpg?max_age=2592000',
        title: '古风',
        play_number: 20
      },
      {
        id: 66,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_346_10_4.jpg?max_age=2592000',
        title: '民谣',
        play_number: 18.5
      },
      {
        id: 67,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_129_10_4.jpg?max_age=2592000',
        title: '轻音乐',
        play_number: 35.5
      },
      {
        id: 68,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_223_10_4.jpg?max_age=2592000',
        title: 'Hip-Hop',
        play_number: 8.2
      },
      {
        id: 69,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_190_10_4.jpg?max_age=2592000',
        title: '中国风',
        play_number: 9.5
      },
      {
        id: 70,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_173_10_5.jpg?max_age=2592000',
        title: 'R&B',
        play_number: 9.5
      },
      {
        id: 71,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_364_10_4.jpg?max_age=2592000',
        title: '民歌',
        play_number: 5.4
      },
      {
        id: 72,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_130_10_4.jpg?max_age=2592000',
        title: '摇滚',
        play_number: 27.2
      },
      {
        id: 73,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_133_10_4.jpg?max_age=2592000',
        title: '乡村',
        play_number: 4.8
      },
      {
        id: 74,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_523_10_2.jpg?max_age=2592000',
        title: '华语嘻哈',
        play_number: 2
      },
      {
        id: 75,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_195_10_4.jpg?max_age=2592000',
        title: '舞曲',
        play_number: 8.7
      },
      {
        id: 76,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_132_10_4.jpg?max_age=2592000',
        title: '爵士',
        play_number: 2.7
      },
      {
        id: 77,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_131_10_4.jpg?max_age=2592000',
        title: '古典',
        play_number: 4
      }
    ],
    language: [
      {
        id: 78,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_120_10_6.jpg?max_age=2592000',
        title: '英语',
        play_number: 62.6
      },
      {
        id: 79,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_118_10_7.jpg?max_age=2592000',
        title: '华语',
        play_number: 13.4
      },
      {
        id: 80,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_119_10_6.jpg?max_age=2592000',
        title: '粤语',
        play_number: 63.2
      },
      {
        id: 81,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_150_10_7.jpg?max_age=2592000',
        title: '韩语',
        play_number: 12.3
      },
      {
        id: 82,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_149_10_7.jpg?max_age=2592000',
        title: '日语',
        play_number: 5.2
      }
    ],
    people: [
      {
        id: 83,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_123_10_4.jpg?max_age=2592000',
        title: '80后',
        play_number: 36.3
      },
      {
        id: 84,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_124_10_4.jpg?max_age=2592000',
        title: '90后',
        play_number: 23.3
      },
      {
        id: 85,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_341_10_5.jpg?max_age=2592000',
        title: '儿童',
        play_number: 23.1
      },
      {
        id: 86,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_298_10_4.jpg?max_age=2592000',
        title: '00后',
        play_number: 8
      },
      {
        id: 87,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_122_10_5.jpg?max_age=2592000',
        title: '70后',
        play_number: 18.7
      }
    ],
    musical: [
      {
        id: 88,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_174_10_7.jpg?max_age=2592000',
        title: '钢琴',
        play_number: 16.5
      },
      {
        id: 89,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_175_10_8.jpg?max_age=2592000',
        title: '吉他',
        play_number: 4.9
      },
      {
        id: 90,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_176_10_7.jpg?max_age=2592000',
        title: '小提琴',
        play_number: 3.1
      },
      {
        id: 91,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_207_10_10.jpg?max_age=2592000',
        title: '古筝',
        play_number: 11.8
      },
      {
        id: 92,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_225_10_7.jpg?max_age=2592000',
        title: '笛子',
        play_number: 4.3
      },
      {
        id: 93,
        img: 'https://y.gtimg.cn/music/photo/radio/track_radio_181_10_7.jpg?max_age=2592000',
        title: '萨克斯',
        play_number: 7.4
      },
    ]
  }

  render(){
    const {hot,am,mood,theme,scene,musicStyle,language,people,musical} = this.state

    return (
      <div className="radioContainer">
        {/* 导航 */}
          <SideBar/>

        {/* 所有电台 */}
        <div className="mod_radio">

          <div className="radio_item">
            <p id="hot" className="radio_title">热门</p>
            {/* 每一块 */}
            <ul className="mod_radio_list"> 
            {/* 每一项 */}
              {
                hot.map((item)=>{
                  return <RadioItem key={item.id} {...item}/>
                })
              }
            </ul>
          </div>

          <div className="radio_item">
            <p id="am" className="radio_title">上午</p>
            <ul className="mod_radio_list">
              {
                am.map((item)=>{
                  return <RadioItem key={item.id} {...item}/>
                })
              }
            </ul>
          </div>

          <div className="radio_item">
            <p id="mood" className="radio_title">心情</p>
            <ul className="mod_radio_list">
              {
                mood.map((item)=>{
                  return <RadioItem key={item.id} {...item}/>
                })
              }
            </ul>
          </div>

          <div className="radio_item">
            <p id="theme" className="radio_title">主题</p>
            <ul className="mod_radio_list">
              {
                theme.map((item)=>{
                  return <RadioItem key={item.id} {...item}/>
                })
              }
            </ul>
          </div>

          <div className="radio_item">
            <p id="scene" className="radio_title">场景</p>
            <ul className="mod_radio_list">              
              {
                scene.map((item)=>{
                  return <RadioItem key={item.id} {...item}/>
                })
              }
            </ul>
          </div>

          <div className="radio_item">
            <p id="music-style" className="radio_title">曲风</p>
            <ul className="mod_radio_list">
              {
                musicStyle.map((item)=>{
                  return <RadioItem key={item.id} {...item}/>
                })
              }
            </ul>
          </div>

          <div className="radio_item">
            <p id="language" className="radio_title">语言</p>
            <ul className="mod_radio_list">
              {
                language.map((item)=>{
                  return <RadioItem key={item.id} {...item}/>
                })
              }
            </ul>
          </div>

          <div className="radio_item">
            <p id="people" className="radio_title">人群</p>
            <ul className="mod_radio_list">
              {
                people.map((item)=>{
                  return <RadioItem key={item.id} {...item}/>
                })
              }
            </ul>
          </div>

          <div className="radio_item">
            <p id="musical" className="radio_title">乐器</p>
            <ul className="mod_radio_list">
              {
                musical.map((item)=>{
                  return <RadioItem key={item.id} {...item}/>
                })
              }
            </ul>
          </div>

        </div>
      </div>
    )
  }
}