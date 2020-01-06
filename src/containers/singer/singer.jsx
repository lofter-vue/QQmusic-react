import React from "react";
import "./css/singer.less";
export default class Singer extends React.Component {
  state = {
    letterList: [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "#"
    ],
    regionList: [
      { value: "内地", id: "ND" },
      { value: "港台", id: "GT" },
      { value: "欧美", id: "OM" },
      { value: "日本", id: "RB" },
      { value: "韩国", id: "HG" },
      { value: "其他", id: "QT" }
    ],
    musicTypeList: [
      { value: "流行", id: "LX" },
      { value: "嘻哈", id: "XH" },
      { value: "摇滚", id: "YG" },
      { value: "电子", id: "DZ" },
      { value: "民谣", id: "MY" },
      { value: "R&B", id: "RHB" },
      { value: "民歌", id: "MG" },
      { value: "轻音乐", id: "QYY" },
      { value: "爵士", id: "JS" },
      { value: "古典", id: "GD" },
      { value: "乡村", id: "XC" },
      { value: "蓝调", id: "LD" }
    ]
  };
  render() {
    return (
      <div className="singerContainer">
        <div className="bgimgContainer">
          <div className="titleContainer">
            <div className="singerTitle">万千歌手 尽在眼前</div>
            <div className="loginTitle">登录查看你的关注歌手</div>
            <div className="buttonContainer">
              <button>立即登录</button>
            </div>
          </div>
        </div>
        <div className="main">
          <div className="classification">
            <div className="singer_list letterContainer">
              <span>热门</span>
              {//
              this.state.letterList.map(item => {
                return (
                  <span className="tab" key={item} value={item}>{item}</span>
                );
              })}
            </div>
            <div className="singer_list regionContainer">
              <span>全部</span>
              {this.state.regionList.map(item => {
                return <span key={item.id}>{item.value}</span>;
              })}
            </div>
            <div className="singer_list singerType">
              <span>全部</span>
              <span>男</span>
              <span>女</span>
              <span>组合</span>
            </div>
            <div className="singer_list musicTypeContainer">
              <span>全部</span>
              {this.state.musicTypeList.map(item => {
                return <span key={item.id}>{item.value}</span>;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
