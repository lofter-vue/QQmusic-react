import React from "react";
import { Link  } from "react-router-dom";
import { browserHistory } from "react-router";
import "./css/singer.less";
import { Pagination } from "antd";
export default class Singer extends React.Component {
  state = {
    singerInfo: {
      code: 0,
      ts: 1578272679396,
      singerList: {
        code: 0,
        data: {
          area: -100,
          genre: -100,
          index: -100,
          sex: -100,
          singerlist: [
            {
              country: "",
              singer_id: 13948,
              singer_mid: "001fNHEf1SFEFN",
              singer_name: "G.E.M. 邓紫棋",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000001fNHEf1SFEFN.webp"
            },
            {
              country: "",
              singer_id: 4558,
              singer_mid: "0025NhlN2yWrP4",
              singer_name: "周杰伦",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M0000025NhlN2yWrP4.webp"
            },
            {
              country: "",
              singer_id: 5062,
              singer_mid: "002J4UUk29y8BY",
              singer_name: "薛之谦",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000002J4UUk29y8BY.webp"
            },
            {
              country: "",
              singer_id: 60505,
              singer_mid: "000aHmbL2aPXWH",
              singer_name: "李荣浩",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000000aHmbL2aPXWH.webp"
            },
            {
              country: "",
              singer_id: 4286,
              singer_mid: "001BLpXF2DyJe2",
              singer_name: "林俊杰",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000001BLpXF2DyJe2.webp"
            },
            {
              country: "",
              singer_id: 143,
              singer_mid: "003Nz2So3XXYek",
              singer_name: "陈奕迅",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000003Nz2So3XXYek.webp"
            },
            {
              country: "",
              singer_id: 1473880,
              singer_mid: "004V53Ga0bV65j",
              singer_name: "陈雪凝",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000004V53Ga0bV65j.webp"
            },
            {
              country: "",
              singer_id: 1288409,
              singer_mid: "002vALgR3hRRlv",
              singer_name: "音阙诗听",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000002vALgR3hRRlv.webp"
            },
            {
              country: "",
              singer_id: 944940,
              singer_mid: "0020PeOh4ZaCw1",
              singer_name: "Alan Walker (艾兰·沃克)",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M0000020PeOh4ZaCw1.webp"
            },
            {
              country: "",
              singer_id: 1507534,
              singer_mid: "001BHDR33FZVZ0",
              singer_name: "毛不易",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000001BHDR33FZVZ0.webp"
            },
            {
              country: "",
              singer_id: 7221,
              singer_mid: "000CK5xN3yZDJt",
              singer_name: "许嵩",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000000CK5xN3yZDJt.webp"
            },
            {
              country: "",
              singer_id: 265,
              singer_mid: "001JDzPT3JdvqK",
              singer_name: "王力宏",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000001JDzPT3JdvqK.webp"
            },
            {
              country: "",
              singer_id: 224,
              singer_mid: "002raUWw3PXdkT",
              singer_name: "张韶涵",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000002raUWw3PXdkT.webp"
            },
            {
              country: "",
              singer_id: 89698,
              singer_mid: "003Cn3Yh16q1MO",
              singer_name: "庄心妍",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000003Cn3Yh16q1MO.webp"
            },
            {
              country: "",
              singer_id: 22529,
              singer_mid: "001z6uGh1j5qBh",
              singer_name: "胜屿",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000001z6uGh1j5qBh.webp"
            },
            {
              country: "",
              singer_id: 112,
              singer_mid: "000hNnWC3kko2c",
              singer_name: "蔡健雅",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000000hNnWC3kko2c.webp"
            },
            {
              country: "",
              singer_id: 198135,
              singer_mid: "001IoTZp19YMDG",
              singer_name: "易烊千玺",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000001IoTZp19YMDG.webp"
            },
            {
              country: "",
              singer_id: 39657,
              singer_mid: "000LsFo136kIv4",
              singer_name: "魏新雨",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000000LsFo136kIv4.webp"
            },
            {
              country: "",
              singer_id: 3954,
              singer_mid: "001z2JmX09LLgL",
              singer_name: "汪苏泷",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000001z2JmX09LLgL.webp"
            },
            {
              country: "",
              singer_id: 171,
              singer_mid: "000xogLP35ayzS",
              singer_name: "杨千嬅",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000000xogLP35ayzS.webp"
            },
            {
              country: "",
              singer_id: 61620,
              singer_mid: "004KKLWZ4320g1",
              singer_name: "宋冬野",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000004KKLWZ4320g1.webp"
            },
            {
              country: "",
              singer_id: 74,
              singer_mid: "000Sp0Bz4JXH0o",
              singer_name: "五月天",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000000Sp0Bz4JXH0o.webp"
            },
            {
              country: "",
              singer_id: 2,
              singer_mid: "002pUZT93gF4Cu",
              singer_name: "BEYOND",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000002pUZT93gF4Cu.webp"
            },
            {
              country: "",
              singer_id: 1560445,
              singer_mid: "002btzGY28mJnT",
              singer_name: "麦小兜",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000002btzGY28mJnT.webp"
            },
            {
              country: "",
              singer_id: 4607,
              singer_mid: "000aw4WC2EQYTv",
              singer_name: "张靓颖",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000000aw4WC2EQYTv.webp"
            },
            {
              country: "",
              singer_id: 4615,
              singer_mid: "002ZOuVm3Qn20Y",
              singer_name: "李宇春",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000002ZOuVm3Qn20Y.webp"
            },
            {
              country: "",
              singer_id: 6499,
              singer_mid: "002azErJ0UcDN6",
              singer_name: "张杰",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000002azErJ0UcDN6.webp"
            },
            {
              country: "",
              singer_id: 180646,
              singer_mid: "002yeznU3VAVEV",
              singer_name: "吴亦凡",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000002yeznU3VAVEV.webp"
            },
            {
              country: "",
              singer_id: 109,
              singer_mid: "001pWERg3vFgg8",
              singer_name: "孙燕姿",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000001pWERg3vFgg8.webp"
            },
            {
              country: "",
              singer_id: 11608,
              singer_mid: "003tMm0y0TuewY",
              singer_name: "杨宗纬",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000003tMm0y0TuewY.webp"
            },
            {
              country: "",
              singer_id: 4365,
              singer_mid: "004NMZuf2BLjg8",
              singer_name: "周传雄",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000004NMZuf2BLjg8.webp"
            },
            {
              country: "",
              singer_id: 174,
              singer_mid: "004Be55m1SJaLk",
              singer_name: "张学友",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000004Be55m1SJaLk.webp"
            },
            {
              country: "",
              singer_id: 168,
              singer_mid: "0044wQXL0ElWF1",
              singer_name: "张宇",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M0000044wQXL0ElWF1.webp"
            },
            {
              country: "",
              singer_id: 40449,
              singer_mid: "001Lr98T0yEWAk",
              singer_name: "赵雷",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000001Lr98T0yEWAk.webp"
            },
            {
              country: "",
              singer_id: 1060985,
              singer_mid: "0022eAG537I1bg",
              singer_name: "肖战",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M0000022eAG537I1bg.webp"
            },
            {
              country: "",
              singer_id: 199509,
              singer_mid: "003fA5G40k6hKc",
              singer_name: "周深",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000003fA5G40k6hKc.webp"
            },
            {
              country: "",
              singer_id: 940748,
              singer_mid: "004WgCsE3KBddt",
              singer_name: "陈粒",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000004WgCsE3KBddt.webp"
            },
            {
              country: "",
              singer_id: 11733,
              singer_mid: "004AlfUb0cVkN1",
              singer_name: "BIGBANG (빅뱅)",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000004AlfUb0cVkN1.webp"
            },
            {
              country: "",
              singer_id: 69205,
              singer_mid: "003ZQQb64D5317",
              singer_name: "南征北战NZBZ",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000003ZQQb64D5317.webp"
            },
            {
              country: "",
              singer_id: 16257,
              singer_mid: "002DYpxl3hW3EP",
              singer_name: "Justin Bieber (贾斯汀·比伯)",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000002DYpxl3hW3EP.webp"
            },
            {
              country: "",
              singer_id: 67008,
              singer_mid: "000poF8D027tPr",
              singer_name: "于文文",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000000poF8D027tPr.webp"
            },
            {
              country: "",
              singer_id: 173914,
              singer_mid: "003AD17D4PYPFR",
              singer_name: "Vicetone",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000003AD17D4PYPFR.webp"
            },
            {
              country: "",
              singer_id: 1103924,
              singer_mid: "001ZVMXf3ZYVX7",
              singer_name: "曲肖冰",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000001ZVMXf3ZYVX7.webp"
            },
            {
              country: "",
              singer_id: 8061,
              singer_mid: "002DYd0J2HmOvc",
              singer_name: "儿歌",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000002DYd0J2HmOvc.webp"
            },
            {
              country: "",
              singer_id: 156095,
              singer_mid: "004ABIFV1EZUAj",
              singer_name: "The Chainsmokers",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000004ABIFV1EZUAj.webp"
            },
            {
              country: "",
              singer_id: 163,
              singer_mid: "003aQYLo2x8izP",
              singer_name: "刘德华",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000003aQYLo2x8izP.webp"
            },
            {
              country: "",
              singer_id: 1441799,
              singer_mid: "0023dQD40to8NP",
              singer_name: "永彬Ryan.B",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M0000023dQD40to8NP.webp"
            },
            {
              country: "",
              singer_id: 167,
              singer_mid: "0000mFvh1jtLcz",
              singer_name: "张信哲",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M0000000mFvh1jtLcz.webp"
            },
            {
              country: "",
              singer_id: 11606,
              singer_mid: "001f0VyZ1hmWZ1",
              singer_name: "林宥嘉",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000001f0VyZ1hmWZ1.webp"
            },
            {
              country: "",
              singer_id: 4701,
              singer_mid: "001ByAsv3XCdgm",
              singer_name: "田馥甄",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000001ByAsv3XCdgm.webp"
            },
            {
              country: "",
              singer_id: 54,
              singer_mid: "000cISVf2QqLc6",
              singer_name: "莫文蔚",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000000cISVf2QqLc6.webp"
            },
            {
              country: "",
              singer_id: 137,
              singer_mid: "003LCFXH0eodXv",
              singer_name: "那英",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000003LCFXH0eodXv.webp"
            },
            {
              country: "",
              singer_id: 44,
              singer_mid: "000GGDys0yA0Nk",
              singer_name: "梁静茹",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000000GGDys0yA0Nk.webp"
            },
            {
              country: "",
              singer_id: 1190986,
              singer_mid: "003DBAjk2MMfhR",
              singer_name: "BLACKPINK",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000003DBAjk2MMfhR.webp"
            },
            {
              country: "",
              singer_id: 7139,
              singer_mid: "002bRRFq26jMHU",
              singer_name: "马健涛",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000002bRRFq26jMHU.webp"
            },
            {
              country: "",
              singer_id: 68632,
              singer_mid: "003CNC9D00CaVx",
              singer_name: "梁博",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000003CNC9D00CaVx.webp"
            },
            {
              country: "",
              singer_id: 3376,
              singer_mid: "00235pCx2tYjlq",
              singer_name: "许巍",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M00000235pCx2tYjlq.webp"
            },
            {
              country: "",
              singer_id: 96,
              singer_mid: "003NThQh3ujqIo",
              singer_name: "周华健",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000003NThQh3ujqIo.webp"
            },
            {
              country: "",
              singer_id: 2079450,
              singer_mid: "000wHoyF0OZB6B",
              singer_name: "胡66",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000000wHoyF0OZB6B.webp"
            },
            {
              country: "",
              singer_id: 867,
              singer_mid: "001s4BJ92fSpPu",
              singer_name: "贺一航",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000001s4BJ92fSpPu.webp"
            },
            {
              country: "",
              singer_id: 14411,
              singer_mid: "004dXznj3zlHKW",
              singer_name: "孙露",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000004dXznj3zlHKW.webp"
            },
            {
              country: "",
              singer_id: 4715,
              singer_mid: "001e4pOU25pgzC",
              singer_name: "郑源",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000001e4pOU25pgzC.webp"
            },
            {
              country: "",
              singer_id: 29858,
              singer_mid: "00067r4p0wBDDN",
              singer_name: "任然",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M00000067r4p0wBDDN.webp"
            },
            {
              country: "",
              singer_id: 163550,
              singer_mid: "002Vcz8F2hpBQj",
              singer_name: "华晨宇",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000002Vcz8F2hpBQj.webp"
            },
            {
              country: "",
              singer_id: 963482,
              singer_mid: "004GZcGF2ZgJYo",
              singer_name: "白小白",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000004GZcGF2ZgJYo.webp"
            },
            {
              country: "",
              singer_id: 235,
              singer_mid: "003nS2v740Lxcw",
              singer_name: "李克勤",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000003nS2v740Lxcw.webp"
            },
            {
              country: "",
              singer_id: 219,
              singer_mid: "003AfDK34H82GU",
              singer_name: "张敬轩",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000003AfDK34H82GU.webp"
            },
            {
              country: "",
              singer_id: 24833,
              singer_mid: "002mze3U0NYXOM",
              singer_name: "胡夏",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000002mze3U0NYXOM.webp"
            },
            {
              country: "",
              singer_id: 36691,
              singer_mid: "00472DR10Ytv83",
              singer_name: "袁娅维",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M00000472DR10Ytv83.webp"
            },
            {
              country: "",
              singer_id: 264,
              singer_mid: "000GDDuQ3sGQiT",
              singer_name: "王菲",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000000GDDuQ3sGQiT.webp"
            },
            {
              country: "",
              singer_id: 51,
              singer_mid: "003jJGvv3C82KZ",
              singer_name: "刘若英",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000003jJGvv3C82KZ.webp"
            },
            {
              country: "",
              singer_id: 19329,
              singer_mid: "000Qm9wO1bcM6J",
              singer_name: "李玉刚",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000000Qm9wO1bcM6J.webp"
            },
            {
              country: "",
              singer_id: 118,
              singer_mid: "001uXFgt1kpLyI",
              singer_name: "容祖儿",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000001uXFgt1kpLyI.webp"
            },
            {
              country: "",
              singer_id: 199515,
              singer_mid: "0003ZpE43ypssl",
              singer_name: "张碧晨",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M0000003ZpE43ypssl.webp"
            },
            {
              country: "",
              singer_id: 19454,
              singer_mid: "001Ah7ZB0siso7",
              singer_name: "降央卓玛",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000001Ah7ZB0siso7.webp"
            },
            {
              country: "",
              singer_id: 91610,
              singer_mid: "001axJJM4SezGt",
              singer_name: "银临",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000001axJJM4SezGt.webp"
            },
            {
              country: "",
              singer_id: 6740,
              singer_mid: "001oEyQf4Ub6s7",
              singer_name: "李健",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000001oEyQf4Ub6s7.webp"
            },
            {
              country: "",
              singer_id: 6436,
              singer_mid: "004N2NYw49HUej",
              singer_name: "刘心",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000004N2NYw49HUej.webp"
            },
            {
              country: "",
              singer_id: 244,
              singer_mid: "000iZroE1VWLJG",
              singer_name: "刀郎",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000000iZroE1VWLJG.webp"
            },
            {
              country: "",
              singer_id: 4419,
              singer_mid: "003WlPvN2EvRaj",
              singer_name: "韩红",
              singer_pic:
                "http://y.gtimg.cn/music/photo_new/T001R150x150M000003WlPvN2EvRaj.webp"
            }
          ],
          tags: {
            area: [
              {
                id: -100,
                name: "全部"
              },
              {
                id: 200,
                name: "内地"
              },
              {
                id: 2,
                name: "港台"
              },
              {
                id: 5,
                name: "欧美"
              },
              {
                id: 4,
                name: "日本"
              },
              {
                id: 3,
                name: "韩国"
              },
              {
                id: 6,
                name: "其他"
              }
            ],
            genre: [
              {
                id: -100,
                name: "全部"
              },
              {
                id: 1,
                name: "流行"
              },
              {
                id: 6,
                name: "嘻哈"
              },
              {
                id: 2,
                name: "摇滚"
              },
              {
                id: 4,
                name: "电子"
              },
              {
                id: 3,
                name: "民谣"
              },
              {
                id: 8,
                name: "R&B"
              },
              {
                id: 10,
                name: "民歌"
              },
              {
                id: 9,
                name: "轻音乐"
              },
              {
                id: 5,
                name: "爵士"
              },
              {
                id: 14,
                name: "古典"
              },
              {
                id: 25,
                name: "乡村"
              },
              {
                id: 20,
                name: "蓝调"
              }
            ],
            index: [
              {
                id: -100,
                name: "热门"
              },
              {
                id: 1,
                name: "A"
              },
              {
                id: 2,
                name: "B"
              },
              {
                id: 3,
                name: "C"
              },
              {
                id: 4,
                name: "D"
              },
              {
                id: 5,
                name: "E"
              },
              {
                id: 6,
                name: "F"
              },
              {
                id: 7,
                name: "G"
              },
              {
                id: 8,
                name: "H"
              },
              {
                id: 9,
                name: "I"
              },
              {
                id: 10,
                name: "J"
              },
              {
                id: 11,
                name: "K"
              },
              {
                id: 12,
                name: "L"
              },
              {
                id: 13,
                name: "M"
              },
              {
                id: 14,
                name: "N"
              },
              {
                id: 15,
                name: "O"
              },
              {
                id: 16,
                name: "P"
              },
              {
                id: 17,
                name: "Q"
              },
              {
                id: 18,
                name: "R"
              },
              {
                id: 19,
                name: "S"
              },
              {
                id: 20,
                name: "T"
              },
              {
                id: 21,
                name: "U"
              },
              {
                id: 22,
                name: "V"
              },
              {
                id: 23,
                name: "W"
              },
              {
                id: 24,
                name: "X"
              },
              {
                id: 25,
                name: "Y"
              },
              {
                id: 26,
                name: "Z"
              },
              {
                id: 27,
                name: "#"
              }
            ],
            sex: [
              {
                id: -100,
                name: "全部"
              },
              {
                id: 0,
                name: "男"
              },
              {
                id: 1,
                name: "女"
              },
              {
                id: 2,
                name: "组合"
              }
            ]
          },
          total: 23861
        }
      }
    },
    indexActive: -100,
    areaActive: -100,
    sexActive: -100,
    genreActive: -100,
    currentPath:'page=1',
    indexPath:"",
    areaPath:"",
    sexPath:"",
    genrePath:""
  }
  addActive = (e, id) => {
    
    let arr = e.target.id.split("_");
    if (arr[0] === "index") {
      if (arr[1] == id) {
        this.setState({ 
          indexActive: id,
          indexPath:`&${arr[0]}=${arr[1]}`,
          currentPath:'page=1' + `&${arr[0]}=${arr[1]}` + this.state.areaPath + this.state.sexPath + this.state.genrePath,
          
          });
        // this.setState({});
      }
    }else if (arr[0] === "area") {
      if (arr[1] == id) {
        this.setState({ 
          areaActive: id,
          areaPath:`&${arr[0]}=${arr[1]}`,
          currentPath:'page=1' + this.state.indexPath +  `&${arr[0]}=${arr[1]}` + this.state.sexPath + this.state.genrePath,
          });
      }
    }else if (arr[0] === "sex") {
      if (arr[1] == id) {
        this.setState({ 
          sexActive: id,
          sexPath:`&${arr[0]}=${arr[1]}`, 
          currentPath:'page=1' + this.state.indexPath + this.state.areaPath  + `&${arr[0]}=${arr[1]}` + this.state.genrePath,
        });
      }
    }else if (arr[0] === "genre") {
      if (arr[1] == id) {
        this.setState({ 
          genreActive: id,
          genrePath:`&${arr[0]}=${arr[1]}`,
          currentPath:'page=1' + this.state.indexPath + this.state.areaPath  + this.state.sexPath + `&${arr[0]}=${arr[1]}`,
        });
      }
    }
    // setTimeout(() => {
    //   this.setState({
    //     })
    // }, 300);
  };
  
  render() {
    console.log(this.state.currentPath,'------------',this.props);
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
          <div className="classification_singerName_container">
            <div className="classification">
              {/* 字母选择区 */}
              <div className="singer_list letterContainer">
                {//
                
                this.state.singerInfo.singerList.data.tags.index.map(item => {
                  return (
                    <Link
                      to={`/index/music/singer`}
                      className={`tab ${this.state.indexActive === item.id ? "active" : ""}`}
                      id={"index_" + item.id}
                      onClick={e => this.addActive(e, item.id)}
                      key={item.id}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
              {/* 地区选择区 */}
              <div className="singer_list regionContainer">
                {this.state.singerInfo.singerList.data.tags.area.map(item => {
                  return (
                    <Link
                      to={`/index/music/singer`}
                      className={`tab ${this.state.areaActive === item.id ? "active" : ""}`}
                      id={"area_" + item.id}
                      key={item.id}
                      onClick={e => this.addActive(e, item.id)}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
              {/* 男、女、选择区 */}
              <div className="singer_list singerType">
                {this.state.singerInfo.singerList.data.tags.sex.map(item => {
                  return (
                    <Link
                      to={`/index/music/singer`}
                      className={`tab ${this.state.sexActive === item.id ? "active" : ""}`}
                      key={item.id} id={"sex_" + item.id}
                      onClick={e => this.addActive(e, item.id)}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
              {/* 音乐类型选择区 */}
              <div className="singer_list musicTypeContainer">
                {this.state.singerInfo.singerList.data.tags.genre.map(item => {
                  return (
                    <Link
                      to={`/index/music/singer`}
                      className={`tab ${this.state.genreActive === item.id ? "active" : ""}`}
                      id={"genre_" + item.id} key={item.id}
                      onClick={e => this.addActive(e, item.id)}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="singerName">
              {/* 歌手头像 */}
              <div className="singerAvatar">
                <ul>
                  {this.state.singerInfo.singerList.data.singerlist
                    .slice(0, 10)
                    .map(item => {
                      return (
                        <li key={item.singer_id} className="singerItem">
                          <div className="singerBox">
                            <Link to="">
                              <img src={item.singer_pic} alt="" />
                            </Link>
                            <span>{item.singer_name}</span>
                          </div>
                        </li>
                      );
                    })}
                </ul>
              </div>
              <ul className="singerList">
                {this.state.singerInfo.singerList.data.singerlist
                  .slice(10)
                  .map(item => {
                    return (
                      <li key={item.singer_id} className="singerItem">
                        <div className="singerBox">
                          <Link to="">
                            <span>{item.singer_name}</span>
                          </Link>
                        </div>
                      </li>
                    );
                  })}
              </ul>
              <Pagination
                defaultCurrent={1}
                total={500}
                className="pagination"
              />
            </div>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}
