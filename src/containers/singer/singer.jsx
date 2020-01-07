import React from "react";
import { Link } from "react-router-dom";
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
    singerArr: {
      singerlist1: [
        {
          country: "",
          singer_id: 348625,
          singer_mid: "001kZXmE3o8iAs",
          singer_name: "Aron's Crusade",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000001kZXmE3o8iAs.webp"
        },
        {
          country: "",
          singer_id: 356241,
          singer_mid: "001oluiD1QQkR1",
          singer_name: "Abimaro and the Free",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000001oluiD1QQkR1.webp"
        },
        {
          country: "",
          singer_id: 1061611,
          singer_mid: "003Z1Nk80g7hlk",
          singer_name: "A Contrablues",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000003Z1Nk80g7hlk.webp"
        },
        {
          country: "",
          singer_id: 1094383,
          singer_mid: "004TztBu0HETdT",
          singer_name: "Anthony Proveaux",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000004TztBu0HETdT.webp"
        },
        {
          country: "",
          singer_id: 1092394,
          singer_mid: "000Mmr6r05BBFi",
          singer_name: "Alvin & The Chipmunks",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000000Mmr6r05BBFi.webp"
        },
        {
          country: "",
          singer_id: 351441,
          singer_mid: "0021fWZQ2fKvy6",
          singer_name: "Alasdair Bouch",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M0000021fWZQ2fKvy6.webp"
        },
        {
          country: "",
          singer_id: 1066232,
          singer_mid: "001Zq9cQ1lwWbN",
          singer_name: "Angela Easson",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000001Zq9cQ1lwWbN.webp"
        },
        {
          country: "",
          singer_id: 355003,
          singer_mid: "0005ndaC0UVlFQ",
          singer_name: "Angelas LeJeune",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M0000005ndaC0UVlFQ.webp"
        },
        {
          country: "",
          singer_id: 350231,
          singer_mid: "001Dq0ak2RoYY3",
          singer_name: "Avtar singh",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000001Dq0ak2RoYY3.webp"
        },
        {
          country: "",
          singer_id: 350328,
          singer_mid: "003PkNg44KjVjq",
          singer_name: "Arno Adams",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000003PkNg44KjVjq.webp"
        },
        {
          country: "",
          singer_id: 357849,
          singer_mid: "001KylCI1aCv0k",
          singer_name: "Al Hughes",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000001KylCI1aCv0k.webp"
        },
        {
          country: "",
          singer_id: 953625,
          singer_mid: "000XtdXG3UYQx8",
          singer_name: "Appalachian Barn Orchestra",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000000XtdXG3UYQx8.webp"
        },
        {
          country: "",
          singer_id: 356143,
          singer_mid: "002TSCUd3CvK7v",
          singer_name: "AVT",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000002TSCUd3CvK7v.webp"
        },
        {
          country: "",
          singer_id: 356262,
          singer_mid: "002PlUCo3Y6uMT",
          singer_name: "Adrian Dickey",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000002PlUCo3Y6uMT.webp"
        },
        {
          country: "",
          singer_id: 356308,
          singer_mid: "000chWiq1a0J3M",
          singer_name: "Amber Road",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000000chWiq1a0J3M.webp"
        },
        {
          country: "",
          singer_id: 350175,
          singer_mid: "003d8pEl2nLekG",
          singer_name: "Académie d'Accordéon de Haguenau",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000003d8pEl2nLekG.webp"
        },
        {
          country: "",
          singer_id: 1952,
          singer_mid: "004BXxRU0tIeMA",
          singer_name: "A",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000004BXxRU0tIeMA.webp"
        },
        {
          country: "",
          singer_id: 262490,
          singer_mid: "003G7UZp1kTxAq",
          singer_name: "A 100 Tagú Cigányzenekar szólistái",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000003G7UZp1kTxAq.webp"
        },
        {
          country: "",
          singer_id: 17796,
          singer_mid: "000LrfLq0zaDLB",
          singer_name: "阿炳",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000000LrfLq0zaDLB.webp"
        },
        {
          country: "",
          singer_id: 1381,
          singer_mid: "003yLXOk3jCucW",
          singer_name: "A Christmas Tradtion",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000003yLXOk3jCucW.webp"
        },
        {
          country: "",
          singer_id: 1153,
          singer_mid: "003vnU2X1KA7jX",
          singer_name: "A Cor Do Som",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000003vnU2X1KA7jX.webp"
        },
        {
          country: "",
          singer_id: 14642,
          singer_mid: "0004VI4B1UMSD5",
          singer_name: "A Cuckoo",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M0000004VI4B1UMSD5.webp"
        },
        {
          country: "",
          singer_id: 12811,
          singer_mid: "001YiAbT4GHzM4",
          singer_name: "A Day Away",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000001YiAbT4GHzM4.webp"
        },
        {
          country: "",
          singer_id: 55010,
          singer_mid: "0043l4Cw3zoygR",
          singer_name: "A Few Good Men",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M0000043l4Cw3zoygR.webp"
        },
        {
          country: "",
          singer_id: 11789,
          singer_mid: "001UEXwy2uuG17",
          singer_name: "A Fine Frenzy",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000001UEXwy2uuG17.webp"
        },
        {
          country: "",
          singer_id: 246087,
          singer_mid: "000JdZSa2PLqXV",
          singer_name: "A Fine Pair Of Misfits",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000000JdZSa2PLqXV.webp"
        },
        {
          country: "",
          singer_id: 157563,
          singer_mid: "004MJJQ13Q0DID",
          singer_name: "A Great Big World",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000004MJJQ13Q0DID.webp"
        },
        {
          country: "",
          singer_id: 110137,
          singer_mid: "000Mj7b84IqGyE",
          singer_name: "A Hairiharan",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000000Mj7b84IqGyE.webp"
        },
        {
          country: "",
          singer_id: 118962,
          singer_mid: "0031nGFK0QVcsy",
          singer_name: "A Is For Algorithm",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M0000031nGFK0QVcsy.webp"
        },
        {
          country: "",
          singer_id: 94508,
          singer_mid: "004SqQpt33j5A3",
          singer_name: "A Man Called Adam",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000004SqQpt33j5A3.webp"
        },
        {
          country: "",
          singer_id: 110782,
          singer_mid: "001RhcQl1uDjY3",
          singer_name: "A MODO MIO",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000001RhcQl1uDjY3.webp"
        },
        {
          country: "",
          singer_id: 3113,
          singer_mid: "001nekUZ28vsND",
          singer_name: "A Palo Seko",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000001nekUZ28vsND.webp"
        },
        {
          country: "",
          singer_id: 27902,
          singer_mid: "000SEEfZ16pzul",
          singer_name: "A Place For Angles",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000000SEEfZ16pzul.webp"
        },
        {
          country: "",
          singer_id: 110057,
          singer_mid: "003gxeN007ozXN",
          singer_name: "A S Chamkila",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000003gxeN007ozXN.webp"
        },
        {
          country: "",
          singer_id: 27661,
          singer_mid: "002ea25422Te4l",
          singer_name: "A Sequence of Ghosts",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000002ea25422Te4l.webp"
        },
        {
          country: "",
          singer_id: 33757,
          singer_mid: "002QR5uB2pKoXm",
          singer_name: "A Tribe Called Quest",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000002QR5uB2pKoXm.webp"
        },
        {
          country: "",
          singer_id: 45751,
          singer_mid: "0036HnCv4ATJtJ",
          singer_name: "A Vida Azul",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M0000036HnCv4ATJtJ.webp"
        },
        {
          country: "",
          singer_id: 940912,
          singer_mid: "001ZdSd92d4Xn2",
          singer_name: "A'N'D",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000001ZdSd92d4Xn2.webp"
        },
        {
          country: "",
          singer_id: 98264,
          singer_mid: "00073cOD2Q38HD",
          singer_name: "A** trio",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M00000073cOD2Q38HD.webp"
        },
        {
          country: "",
          singer_id: 6919,
          singer_mid: "000RAB672j9Pls",
          singer_name: "A*Teens",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000000RAB672j9Pls.webp"
        },
        {
          country: "",
          singer_id: 97513,
          singer_mid: "001Saip8373TN6",
          singer_name: "A-Haco Productions",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000001Saip8373TN6.webp"
        },
        {
          country: "",
          singer_id: 6028,
          singer_mid: "003ArN8Z0WpjTz",
          singer_name: "A-Lin",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000003ArN8Z0WpjTz.webp"
        },
        {
          country: "",
          singer_id: 1053386,
          singer_mid: "003wzppL4WcAkh",
          singer_name: "A-Phonics",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000003wzppL4WcAkh.webp"
        },
        {
          country: "",
          singer_id: 30280,
          singer_mid: "0005b7jB34LeXJ",
          singer_name: "A-Plus",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M0000005b7jB34LeXJ.webp"
        },
        {
          country: "",
          singer_id: 7020,
          singer_mid: "002u2vG124zFYh",
          singer_name: "A-SHOW",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000002u2vG124zFYh.webp"
        },
        {
          country: "",
          singer_id: 35898,
          singer_mid: "002ytSea1a8Ruz",
          singer_name: "A-TIVE",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000002ytSea1a8Ruz.webp"
        },
        {
          country: "",
          singer_id: 110153,
          singer_mid: "000wTOZx2CBra2",
          singer_name: "A. E. Manoharan",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000000wTOZx2CBra2.webp"
        },
        {
          country: "",
          singer_id: 110276,
          singer_mid: "001WftN134x5Wf",
          singer_name: "A. Gheltrito",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000001WftN134x5Wf.webp"
        },
        {
          country: "",
          singer_id: 276282,
          singer_mid: "002fgEuc2nRC9J",
          singer_name: "A. L. Lloyd",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000002fgEuc2nRC9J.webp"
        },
        {
          country: "",
          singer_id: 107883,
          singer_mid: "001CcJzk1Xysrh",
          singer_name: "A. M. Raja",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000001CcJzk1Xysrh.webp"
        },
        {
          country: "",
          singer_id: 110084,
          singer_mid: "000775Xa46VRC7",
          singer_name: "A. Nageswara Rao",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000000775Xa46VRC7.webp"
        },
        {
          country: "",
          singer_id: 5458,
          singer_mid: "001Oy3tk0QHhX4",
          singer_name: "A. One",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000001Oy3tk0QHhX4.webp"
        },
        {
          country: "",
          singer_id: 107811,
          singer_mid: "000TID6H129c1z",
          singer_name: "A. P. Komala",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000000TID6H129c1z.webp"
        },
        {
          country: "",
          singer_id: 99559,
          singer_mid: "001Mp17z1WBoe8",
          singer_name: "A. Paul",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000001Mp17z1WBoe8.webp"
        },
        {
          country: "",
          singer_id: 257343,
          singer_mid: "002HBbId1qfgas",
          singer_name: "A. Virgilio Savona",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000002HBbId1qfgas.webp"
        },
        {
          country: "",
          singer_id: 653979,
          singer_mid: "002Cg8O40SBVMQ",
          singer_name: "A.C. Reed",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000002Cg8O40SBVMQ.webp"
        },
        {
          country: "",
          singer_id: 36656,
          singer_mid: "001kTohR1rN6qz",
          singer_name: "A.Cain",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000001kTohR1rN6qz.webp"
        },
        {
          country: "",
          singer_id: 308,
          singer_mid: "003Z3DmA3tQBSA",
          singer_name: "A.J. McLean",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000003Z3DmA3tQBSA.webp"
        },
        {
          country: "",
          singer_id: 3199,
          singer_mid: "000qQwkL2saSdy",
          singer_name: "A.K.A.",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000000qQwkL2saSdy.webp"
        },
        {
          country: "",
          singer_id: 124140,
          singer_mid: "003pvdOv1JVlOe",
          singer_name: "A.L.Raghavan",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000003pvdOv1JVlOe.webp"
        },
        {
          country: "",
          singer_id: 23099,
          singer_mid: "000ZvQLm2tbdJ1",
          singer_name: "A.M. Kidd",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000000ZvQLm2tbdJ1.webp"
        },
        {
          country: "",
          singer_id: 5459,
          singer_mid: "003rWW212j4dfv",
          singer_name: "A.Mia",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000003rWW212j4dfv.webp"
        },
        {
          country: "",
          singer_id: 28620,
          singer_mid: "000fZjuT2qBZMV",
          singer_name: "A.Z",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000000fZjuT2qBZMV.webp"
        },
        {
          country: "",
          singer_id: 44507,
          singer_mid: "002ZwrKF3IFGtg",
          singer_name: "a_hisa",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000002ZwrKF3IFGtg.webp"
        },
        {
          country: "",
          singer_id: 6392,
          singer_mid: "000Gtvvm4JyP8x",
          singer_name: "AAA (トリプル・エー)",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000000Gtvvm4JyP8x.webp"
        },
        {
          country: "",
          singer_id: 123884,
          singer_mid: "004IZHf614uZo3",
          singer_name: "Aadityan & Sujatha",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000004IZHf614uZo3.webp"
        },
        {
          country: "",
          singer_id: 1928,
          singer_mid: "00179s740YNxdB",
          singer_name: "Aannie",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M00000179s740YNxdB.webp"
        },
        {
          country: "",
          singer_id: 108086,
          singer_mid: "0014Lncf2AUh4k",
          singer_name: "Aarati Mukherjee",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M0000014Lncf2AUh4k.webp"
        },
        {
          country: "",
          singer_id: 106626,
          singer_mid: "0024x5H72H6LIq",
          singer_name: "Aaron Bing",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M0000024x5H72H6LIq.webp"
        },
        {
          country: "",
          singer_id: 55009,
          singer_mid: "002lKsn02Ky0Nl",
          singer_name: "Aaron Crider",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000002lKsn02Ky0Nl.webp"
        },
        {
          country: "",
          singer_id: 95476,
          singer_mid: "001fBoTY3nr8sX",
          singer_name: "Aaron Davis",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000001fBoTY3nr8sX.webp"
        },
        {
          country: "",
          singer_id: 183931,
          singer_mid: "0009jCgI2mBCMF",
          singer_name: "Aaron Einhouse",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M0000009jCgI2mBCMF.webp"
        },
        {
          country: "",
          singer_id: 25493,
          singer_mid: "0002hl0j03R6Wo",
          singer_name: "Aaron London",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M0000002hl0j03R6Wo.webp"
        },
        {
          country: "",
          singer_id: 654184,
          singer_mid: "001nJdKE2dcHME",
          singer_name: "Aaron Moore",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000001nJdKE2dcHME.webp"
        },
        {
          country: "",
          singer_id: 106791,
          singer_mid: "0025CVvH1m0wOv",
          singer_name: "Aaron Nason",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M0000025CVvH1m0wOv.webp"
        },
        {
          country: "",
          singer_id: 11775,
          singer_mid: "003dk3pS1Ca2uS",
          singer_name: "Aaron Shust",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000003dk3pS1Ca2uS.webp"
        },
        {
          country: "",
          singer_id: 59335,
          singer_mid: "002cTvdR2Jnfm5",
          singer_name: "Aaron Skyy",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000002cTvdR2Jnfm5.webp"
        },
        {
          country: "",
          singer_id: 62352,
          singer_mid: "004LwIp51xLOTN",
          singer_name: "Aaron Avshalomov",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000004LwIp51xLOTN.webp"
        },
        {
          country: "",
          singer_id: 269938,
          singer_mid: "001cnFzG2sq87c",
          singer_name: "Aarón on Blues",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000001cnFzG2sq87c.webp"
        },
        {
          country: "",
          singer_id: 97698,
          singer_mid: "003xmkVO2yOsoU",
          singer_name: "Aasha",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000003xmkVO2yOsoU.webp"
        }
      ], // 选择A的数组
      singerlist2: [
        {
          country: "",
          singer_id: 17796,
          singer_mid: "000LrfLq0zaDLB",
          singer_name: "阿炳",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000000LrfLq0zaDLB.webp"
        },
        {
          country: "",
          singer_id: 7108,
          singer_mid: "003hcEK84Qdzjt",
          singer_name: "阿爆",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000003hcEK84Qdzjt.webp"
        },
        {
          country: "",
          singer_id: 5001,
          singer_mid: "003oUwJ54CMqTT",
          singer_name: "阿宝",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000003oUwJ54CMqTT.webp"
        },
        {
          country: "",
          singer_id: 160361,
          singer_mid: "00241Nkw1d56dA",
          singer_name: "阿宝冬玲",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M00000241Nkw1d56dA.webp"
        },
        {
          country: "",
          singer_id: 943266,
          singer_mid: "002qrc8h2RFt7Y",
          singer_name: "阿卜拉江",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000002qrc8h2RFt7Y.webp"
        },
        {
          country: "",
          singer_id: 5722,
          singer_mid: "0040ueBq3V7IP1",
          singer_name: "ADO",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M0000040ueBq3V7IP1.webp"
        },
        {
          country: "",
          singer_id: 6361,
          singer_mid: "000AM20d04dFUy",
          singer_name: "阿朵",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000000AM20d04dFUy.webp"
        },
        {
          country: "",
          singer_id: 197698,
          singer_mid: "000ks9Zm3I0Gkb",
          singer_name: "阿光",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000000ks9Zm3I0Gkb.webp"
        },
        {
          country: "",
          singer_id: 1327483,
          singer_mid: "000985uR2CKS2P",
          singer_name: "艾辰",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000000985uR2CKS2P.webp"
        },
        {
          country: "",
          singer_id: 4647,
          singer_mid: "002bdiNU4aKHVP",
          singer_name: "爱戴",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000002bdiNU4aKHVP.webp"
        },
        {
          country: "",
          singer_id: 20699,
          singer_mid: "003k15Z24AY1uT",
          singer_name: "爱朵女孩",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000003k15Z24AY1uT.webp"
        },
        {
          country: "",
          singer_id: 6846,
          singer_mid: "003JJHhy221qVX",
          singer_name: "艾尔肯",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000003JJHhy221qVX.webp"
        },
        {
          country: "",
          singer_id: 944658,
          singer_mid: "0027W3Jw0PYnHt",
          singer_name: "艾福杰尼",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M0000027W3Jw0PYnHt.webp"
        },
        {
          country: "",
          singer_id: 20592,
          singer_mid: "001Tp1K54BP3Ji",
          singer_name: "艾歌",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000001Tp1K54BP3Ji.webp"
        },
        {
          country: "",
          singer_id: 6332,
          singer_mid: "004LQ7ZT0rTuS5",
          singer_name: "艾敬",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000004LQ7ZT0rTuS5.webp"
        },
        {
          country: "",
          singer_id: 4283,
          singer_mid: "0010xLU60CQVbP",
          singer_name: "爱乐团王超",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M0000010xLU60CQVbP.webp"
        },
        {
          country: "",
          singer_id: 6319,
          singer_mid: "003uvyuV1iHzze",
          singer_name: "艾米马斯都拉",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000003uvyuV1iHzze.webp"
        },
        {
          country: "",
          singer_id: 11570,
          singer_mid: "003G8Oo04bGk45",
          singer_name: "艾晴晴",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000003G8Oo04bGk45.webp"
        },
        {
          country: "",
          singer_id: 209,
          singer_mid: "003Wksal35TlnM",
          singer_name: "艾斯卡尔",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000003Wksal35TlnM.webp"
        },
        {
          country: "",
          singer_id: 200650,
          singer_mid: "002MFGc11jk2YC",
          singer_name: "艾索",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000002MFGc11jk2YC.webp"
        },
        {
          country: "",
          singer_id: 1038889,
          singer_mid: "002HuAlW0UHxlP",
          singer_name: "艾小绵",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000002HuAlW0UHxlP.webp"
        },
        {
          country: "",
          singer_id: 4438,
          singer_mid: "003uKY3x3eulQL",
          singer_name: "艾雨",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000003uKY3x3eulQL.webp"
        },
        {
          country: "",
          singer_id: 1102240,
          singer_mid: "001h8OKZ4VEGNU",
          singer_name: "艾朝友",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000001h8OKZ4VEGNU.webp"
        },
        {
          country: "",
          singer_id: 11591,
          singer_mid: "000rxIC61JbkTj",
          singer_name: "阿佳组合",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000000rxIC61JbkTj.webp"
        },
        {
          country: "",
          singer_id: 6747,
          singer_mid: "003rgL1K06ONjI",
          singer_name: "AK乐队",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000003rgL1K06ONjI.webp"
        },
        {
          country: "",
          singer_id: 2741148,
          singer_mid: "0048fcjD1w2bnu",
          singer_name: "AKB48 Team SH",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M0000048fcjD1w2bnu.webp"
        },
        {
          country: "",
          singer_id: 947895,
          singer_mid: "000a9Zhs0oQmMy",
          singer_name: "Aki阿杰",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000000a9Zhs0oQmMy.webp"
        },
        {
          country: "",
          singer_id: 57039,
          singer_mid: "002hcSht0hCUyE",
          singer_name: "阿鲲",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000002hcSht0hCUyE.webp"
        },
        {
          country: "",
          singer_id: 163346,
          singer_mid: "000dLchT05TnSt",
          singer_name: "阿来",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000000dLchT05TnSt.webp"
        },
        {
          country: "",
          singer_id: 12303,
          singer_mid: "002RWWeo3IkUaj",
          singer_name: "阿兰",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000002RWWeo3IkUaj.webp"
        },
        {
          country: "",
          singer_id: 6609,
          singer_mid: "001y4Z9d1Xmd2G",
          singer_name: "阿郎",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000001y4Z9d1Xmd2G.webp"
        },
        {
          country: "",
          singer_id: 774,
          singer_mid: "004TbBTr1LetIw",
          singer_name: "Aleen",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000004TbBTr1LetIw.webp"
        },
        {
          country: "",
          singer_id: 1068928,
          singer_mid: "003AFnEE0j8EBs",
          singer_name: "阿礼",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000003AFnEE0j8EBs.webp"
        },
        {
          country: "",
          singer_id: 1099594,
          singer_mid: "001umEMa36GTW1",
          singer_name: "阿梨",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000001umEMa36GTW1.webp"
        },
        {
          country: "",
          singer_id: 5788,
          singer_mid: "002dSHZD1SlTeL",
          singer_name: "阿里郎",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000002dSHZD1SlTeL.webp"
        },
        {
          country: "",
          singer_id: 9374,
          singer_mid: "003nRlnJ1scz1Z",
          singer_name: "阿里木江",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000003nRlnJ1scz1Z.webp"
        },
        {
          country: "",
          singer_id: 169270,
          singer_mid: "000h5gtk4fPo76",
          singer_name: "阿力普",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000000h5gtk4fPo76.webp"
        },
        {
          country: "",
          singer_id: 980784,
          singer_mid: "003bt3350DA8az",
          singer_name: "Along",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000003bt3350DA8az.webp"
        },
        {
          country: "",
          singer_id: 7101,
          singer_mid: "002fiU8J1ksWDr",
          singer_name: "阿龙正罡",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000002fiU8J1ksWDr.webp"
        },
        {
          country: "",
          singer_id: 4538,
          singer_mid: "001xIZCJ1JVqEu",
          singer_name: "阿鲁阿卓",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000001xIZCJ1JVqEu.webp"
        },
        {
          country: "",
          singer_id: 366179,
          singer_mid: "003yejxX2GhubQ",
          singer_name: "阿苗千千",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000003yejxX2GhubQ.webp"
        },
        {
          country: "",
          singer_id: 17917,
          singer_mid: "001I2U8d1j7lmv",
          singer_name: "Amnjk",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000001I2U8d1j7lmv.webp"
        },
        {
          country: "",
          singer_id: 71635,
          singer_mid: "000soxPl2l0eUT",
          singer_name: "阿摩司",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000000soxPl2l0eUT.webp"
        },
        {
          country: "",
          singer_id: 7008,
          singer_mid: "004fDJTb3uhyNQ",
          singer_name: "阿木",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000004fDJTb3uhyNQ.webp"
        },
        {
          country: "",
          singer_id: 11454,
          singer_mid: "0001hMTP2q0zWI",
          singer_name: "阿穆隆",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M0000001hMTP2q0zWI.webp"
        },
        {
          country: "",
          singer_id: 33078,
          singer_mid: "004GjC7g0NxF6E",
          singer_name: "安辰",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000004GjC7g0NxF6E.webp"
        },
        {
          country: "",
          singer_id: 952631,
          singer_mid: "001W3hIn1SJpAZ",
          singer_name: "安东尼",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000001W3hIn1SJpAZ.webp"
        },
        {
          country: "",
          singer_id: 14829,
          singer_mid: "004eV9tg4FkMMb",
          singer_name: "安东阳",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000004eV9tg4FkMMb.webp"
        },
        {
          country: "",
          singer_id: 55802,
          singer_mid: "001Dtgkj25OsPW",
          singer_name: "Angel Girl",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000001Dtgkj25OsPW.webp"
        },
        {
          country: "",
          singer_id: 22540,
          singer_mid: "002vgVqi2jNOap",
          singer_name: "Angelababy",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000002vgVqi2jNOap.webp"
        },
        {
          country: "",
          singer_id: 6386,
          singer_mid: "003btwxm3w1fkq",
          singer_name: "安琥",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000003btwxm3w1fkq.webp"
        },
        {
          country: "",
          singer_id: 48605,
          singer_mid: "001xunhv4L0KC2",
          singer_name: "安九",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000001xunhv4L0KC2.webp"
        },
        {
          country: "",
          singer_id: 359722,
          singer_mid: "004GHRKp3YqVSq",
          singer_name: "Anky",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000004GHRKp3YqVSq.webp"
        },
        {
          country: "",
          singer_id: 201481,
          singer_mid: "0024HSMz1yfolh",
          singer_name: "安来宁",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M0000024HSMz1yfolh.webp"
        },
        {
          country: "",
          singer_id: 191003,
          singer_mid: "002N0RmQ3Rv4XX",
          singer_name: "安礼",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000002N0RmQ3Rv4XX.webp"
        },
        {
          country: "",
          singer_id: 499,
          singer_mid: "000qOq0130ZvWE",
          singer_name: "anna",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000000qOq0130ZvWE.webp"
        },
        {
          country: "",
          singer_id: 970233,
          singer_mid: "003tytPN1z3fKv",
          singer_name: "阿侬子黎",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000003tytPN1z3fKv.webp"
        },
        {
          country: "",
          singer_id: 44529,
          singer_mid: "000M4nMM0Hllrz",
          singer_name: "安琴",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000000M4nMM0Hllrz.webp"
        },
        {
          country: "",
          singer_id: 63575,
          singer_mid: "002C1M1s3DhTFe",
          singer_name: "安瑞兮",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000002C1M1s3DhTFe.webp"
        },
        {
          country: "",
          singer_id: 91490,
          singer_mid: "000WvhDw0ciqdg",
          singer_name: "安苏羽",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000000WvhDw0ciqdg.webp"
        },
        {
          country: "",
          singer_id: 1082887,
          singer_mid: "0044lQd63E8W6T",
          singer_name: "安小能",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M0000044lQd63E8W6T.webp"
        },
        {
          country: "",
          singer_id: 12753,
          singer_mid: "002aXLcc0uvQIW",
          singer_name: "安旭",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000002aXLcc0uvQIW.webp"
        },
        {
          country: "",
          singer_id: 7196,
          singer_mid: "001vGhyy0ZN0C8",
          singer_name: "安璇熙",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000001vGhyy0ZN0C8.webp"
        },
        {
          country: "",
          singer_id: 5010,
          singer_mid: "0020vPiv0DNfSd",
          singer_name: "安又琪",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M0000020vPiv0DNfSd.webp"
        },
        {
          country: "",
          singer_id: 4375,
          singer_mid: "000qCCoO46ugVG",
          singer_name: "安宇",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000000qCCoO46ugVG.webp"
        },
        {
          country: "",
          singer_id: 40438,
          singer_mid: "002PYYRY3ptMsR",
          singer_name: "安与骑兵",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000002PYYRY3ptMsR.webp"
        },
        {
          country: "",
          singer_id: 198115,
          singer_mid: "001aFVNK1uCmTf",
          singer_name: "安喆",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000001aFVNK1uCmTf.webp"
        },
        {
          country: "",
          singer_id: 1122903,
          singer_mid: "001uHWw80bAnOa",
          singer_name: "安子与九妹",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000001uHWw80bAnOa.webp"
        },
        {
          country: "",
          singer_id: 25606,
          singer_mid: "003YwVj31smi5O",
          singer_name: "奥杰阿格",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000003YwVj31smi5O.webp"
        },
        {
          country: "",
          singer_id: 6700,
          singer_mid: "000fs5o947vMt6",
          singer_name: "阿强",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000000fs5o947vMt6.webp"
        },
        {
          country: "",
          singer_id: 22855,
          singer_mid: "0040Eq913AwwEZ",
          singer_name: "阿悄",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M0000040Eq913AwwEZ.webp"
        },
        {
          country: "",
          singer_id: 12730,
          singer_mid: "004NdLr83zSx5j",
          singer_name: "阿清",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000004NdLr83zSx5j.webp"
        },
        {
          country: "",
          singer_id: 156064,
          singer_mid: "002o7yxr2eX5eV",
          singer_name: "阿权",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000002o7yxr2eX5eV.webp"
        },
        {
          country: "",
          singer_id: 1107059,
          singer_mid: "002lMQOY4GAV7f",
          singer_name: "AR（刘夫阳）",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000002lMQOY4GAV7f.webp"
        },
        {
          country: "",
          singer_id: 41486,
          singer_mid: "001IKc1200ZAr6",
          singer_name: "阿山",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000001IKc1200ZAr6.webp"
        },
        {
          country: "",
          singer_id: 158556,
          singer_mid: "003VJ4nP0Q19xJ",
          singer_name: "阿肆",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000003VJ4nP0Q19xJ.webp"
        },
        {
          country: "",
          singer_id: 40728,
          singer_mid: "002iigj519AIIi",
          singer_name: "阿索",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000002iigj519AIIi.webp"
        },
        {
          country: "",
          singer_id: 5791,
          singer_mid: "003ap59L2hWYLk",
          singer_name: "阿修罗",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000003ap59L2hWYLk.webp"
        },
        {
          country: "",
          singer_id: 1289253,
          singer_mid: "002ckniF2TNh4f",
          singer_name: "阿泱",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000002ckniF2TNh4f.webp"
        },
        {
          country: "",
          singer_id: 37473,
          singer_mid: "003xppok2KL6OD",
          singer_name: "阿译",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000003xppok2KL6OD.webp"
        }
      ], //选择A和内地共同的数组
      singerlist3: [
        {
          country: "",
          singer_id: 6361,
          singer_mid: "000AM20d04dFUy",
          singer_name: "阿朵",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000000AM20d04dFUy.webp"
        },
        {
          country: "",
          singer_id: 4647,
          singer_mid: "002bdiNU4aKHVP",
          singer_name: "爱戴",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000002bdiNU4aKHVP.webp"
        },
        {
          country: "",
          singer_id: 20592,
          singer_mid: "001Tp1K54BP3Ji",
          singer_name: "艾歌",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000001Tp1K54BP3Ji.webp"
        },
        {
          country: "",
          singer_id: 6332,
          singer_mid: "004LQ7ZT0rTuS5",
          singer_name: "艾敬",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000004LQ7ZT0rTuS5.webp"
        },
        {
          country: "",
          singer_id: 6319,
          singer_mid: "003uvyuV1iHzze",
          singer_name: "艾米马斯都拉",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000003uvyuV1iHzze.webp"
        },
        {
          country: "",
          singer_id: 11570,
          singer_mid: "003G8Oo04bGk45",
          singer_name: "艾晴晴",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000003G8Oo04bGk45.webp"
        },
        {
          country: "",
          singer_id: 200650,
          singer_mid: "002MFGc11jk2YC",
          singer_name: "艾索",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000002MFGc11jk2YC.webp"
        },
        {
          country: "",
          singer_id: 1038889,
          singer_mid: "002HuAlW0UHxlP",
          singer_name: "艾小绵",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000002HuAlW0UHxlP.webp"
        },
        {
          country: "",
          singer_id: 4438,
          singer_mid: "003uKY3x3eulQL",
          singer_name: "艾雨",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000003uKY3x3eulQL.webp"
        },
        {
          country: "",
          singer_id: 947895,
          singer_mid: "000a9Zhs0oQmMy",
          singer_name: "Aki阿杰",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000000a9Zhs0oQmMy.webp"
        },
        {
          country: "",
          singer_id: 12303,
          singer_mid: "002RWWeo3IkUaj",
          singer_name: "阿兰",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000002RWWeo3IkUaj.webp"
        },
        {
          country: "",
          singer_id: 1099594,
          singer_mid: "001umEMa36GTW1",
          singer_name: "阿梨",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000001umEMa36GTW1.webp"
        },
        {
          country: "",
          singer_id: 4538,
          singer_mid: "001xIZCJ1JVqEu",
          singer_name: "阿鲁阿卓",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000001xIZCJ1JVqEu.webp"
        },
        {
          country: "",
          singer_id: 366179,
          singer_mid: "003yejxX2GhubQ",
          singer_name: "阿苗千千",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000003yejxX2GhubQ.webp"
        },
        {
          country: "",
          singer_id: 22540,
          singer_mid: "002vgVqi2jNOap",
          singer_name: "Angelababy",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000002vgVqi2jNOap.webp"
        },
        {
          country: "",
          singer_id: 48605,
          singer_mid: "001xunhv4L0KC2",
          singer_name: "安九",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000001xunhv4L0KC2.webp"
        },
        {
          country: "",
          singer_id: 499,
          singer_mid: "000qOq0130ZvWE",
          singer_name: "anna",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000000qOq0130ZvWE.webp"
        },
        {
          country: "",
          singer_id: 44529,
          singer_mid: "000M4nMM0Hllrz",
          singer_name: "安琴",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000000M4nMM0Hllrz.webp"
        },
        {
          country: "",
          singer_id: 63575,
          singer_mid: "002C1M1s3DhTFe",
          singer_name: "安瑞兮",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000002C1M1s3DhTFe.webp"
        },
        {
          country: "",
          singer_id: 7196,
          singer_mid: "001vGhyy0ZN0C8",
          singer_name: "安璇熙",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000001vGhyy0ZN0C8.webp"
        },
        {
          country: "",
          singer_id: 5010,
          singer_mid: "0020vPiv0DNfSd",
          singer_name: "安又琪",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M0000020vPiv0DNfSd.webp"
        },
        {
          country: "",
          singer_id: 22855,
          singer_mid: "0040Eq913AwwEZ",
          singer_name: "阿悄",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M0000040Eq913AwwEZ.webp"
        },
        {
          country: "",
          singer_id: 158556,
          singer_mid: "003VJ4nP0Q19xJ",
          singer_name: "阿肆",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000003VJ4nP0Q19xJ.webp"
        },
        {
          country: "",
          singer_id: 40728,
          singer_mid: "002iigj519AIIi",
          singer_name: "阿索",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000002iigj519AIIi.webp"
        },
        {
          country: "",
          singer_id: 1289253,
          singer_mid: "002ckniF2TNh4f",
          singer_name: "阿泱",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000002ckniF2TNh4f.webp"
        },
        {
          country: "",
          singer_id: 162660,
          singer_mid: "002jku5j2EEs3E",
          singer_name: "阿英",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000002jku5j2EEs3E.webp"
        }
      ], //选择A和内地和女的数组
      singerlist4: [
        {
          country: "",
          singer_id: 6361,
          singer_mid: "000AM20d04dFUy",
          singer_name: "阿朵",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000000AM20d04dFUy.webp"
        },
        {
          country: "",
          singer_id: 4647,
          singer_mid: "002bdiNU4aKHVP",
          singer_name: "爱戴",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000002bdiNU4aKHVP.webp"
        },
        {
          country: "",
          singer_id: 20592,
          singer_mid: "001Tp1K54BP3Ji",
          singer_name: "艾歌",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000001Tp1K54BP3Ji.webp"
        },
        {
          country: "",
          singer_id: 200650,
          singer_mid: "002MFGc11jk2YC",
          singer_name: "艾索",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000002MFGc11jk2YC.webp"
        },
        {
          country: "",
          singer_id: 4438,
          singer_mid: "003uKY3x3eulQL",
          singer_name: "艾雨",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000003uKY3x3eulQL.webp"
        },
        {
          country: "",
          singer_id: 12303,
          singer_mid: "002RWWeo3IkUaj",
          singer_name: "阿兰",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000002RWWeo3IkUaj.webp"
        },
        {
          country: "",
          singer_id: 4538,
          singer_mid: "001xIZCJ1JVqEu",
          singer_name: "阿鲁阿卓",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000001xIZCJ1JVqEu.webp"
        },
        {
          country: "",
          singer_id: 366179,
          singer_mid: "003yejxX2GhubQ",
          singer_name: "阿苗千千",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000003yejxX2GhubQ.webp"
        },
        {
          country: "",
          singer_id: 22540,
          singer_mid: "002vgVqi2jNOap",
          singer_name: "Angelababy",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000002vgVqi2jNOap.webp"
        },
        {
          country: "",
          singer_id: 48605,
          singer_mid: "001xunhv4L0KC2",
          singer_name: "安九",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000001xunhv4L0KC2.webp"
        },
        {
          country: "",
          singer_id: 44529,
          singer_mid: "000M4nMM0Hllrz",
          singer_name: "安琴",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000000M4nMM0Hllrz.webp"
        },
        {
          country: "",
          singer_id: 63575,
          singer_mid: "002C1M1s3DhTFe",
          singer_name: "安瑞兮",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000002C1M1s3DhTFe.webp"
        },
        {
          country: "",
          singer_id: 7196,
          singer_mid: "001vGhyy0ZN0C8",
          singer_name: "安璇熙",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000001vGhyy0ZN0C8.webp"
        },
        {
          country: "",
          singer_id: 5010,
          singer_mid: "0020vPiv0DNfSd",
          singer_name: "安又琪",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M0000020vPiv0DNfSd.webp"
        },
        {
          country: "",
          singer_id: 22855,
          singer_mid: "0040Eq913AwwEZ",
          singer_name: "阿悄",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M0000040Eq913AwwEZ.webp"
        },
        {
          country: "",
          singer_id: 40728,
          singer_mid: "002iigj519AIIi",
          singer_name: "阿索",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000002iigj519AIIi.webp"
        },
        {
          country: "",
          singer_id: 1289253,
          singer_mid: "002ckniF2TNh4f",
          singer_name: "阿泱",
          singer_pic:
            "http://y.gtimg.cn/music/photo_new/T001R150x150M000002ckniF2TNh4f.webp"
        }
      ] //选择A和内地和女和流行的数组
    },
    singerlistPaga: [
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
        singer_id: 31035,
        singer_mid: "003U6coz1AhN3H",
        singer_name: "简弘亦",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000003U6coz1AhN3H.webp"
      },
      {
        country: "",
        singer_id: 4419,
        singer_mid: "003WlPvN2EvRaj",
        singer_name: "韩红",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000003WlPvN2EvRaj.webp"
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
        singer_id: 4610,
        singer_mid: "004HlS192u9J5g",
        singer_name: "周笔畅",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000004HlS192u9J5g.webp"
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
        singer_id: 4983,
        singer_mid: "001JuGrt372YIQ",
        singer_name: "Maroon 5 (魔力红)",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000001JuGrt372YIQ.webp"
      },
      {
        country: "",
        singer_id: 1199300,
        singer_mid: "0013RsPD3Xs0FG",
        singer_name: "半阳",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M0000013RsPD3Xs0FG.webp"
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
        singer_id: 227,
        singer_mid: "0027pdHE4STooO",
        singer_name: "蔡依林",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M0000027pdHE4STooO.webp"
      },
      {
        country: "",
        singer_id: 33625,
        singer_mid: "001ii8ME2uOv92",
        singer_name: "蒋蒋",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000001ii8ME2uOv92.webp"
      },
      {
        country: "",
        singer_id: 29222,
        singer_mid: "0045p4Sz0LIwL5",
        singer_name: "Ed Sheeran (艾德·希兰)",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M0000045p4Sz0LIwL5.webp"
      },
      {
        country: "",
        singer_id: 951320,
        singer_mid: "000PeZCQ1i4XVs",
        singer_name: "房东的猫",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000000PeZCQ1i4XVs.webp"
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
        singer_id: 4359,
        singer_mid: "000iM9BB2TXFqu",
        singer_name: "潘玮柏",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000000iM9BB2TXFqu.webp"
      },
      {
        country: "",
        singer_id: 87,
        singer_mid: "0001v4XU1cZxPy",
        singer_name: "张国荣",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M0000001v4XU1cZxPy.webp"
      },
      {
        country: "",
        singer_id: 39000,
        singer_mid: "000jnR7q3pCzYG",
        singer_name: "Charlie Puth (查理·普斯)",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000000jnR7q3pCzYG.webp"
      },
      {
        country: "",
        singer_id: 6028,
        singer_mid: "003ArN8Z0WpjTz",
        singer_name: "A-Lin",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000003ArN8Z0WpjTz.webp"
      },
      {
        country: "",
        singer_id: 34412,
        singer_mid: "000zmpju02bEBm",
        singer_name: "TFBOYS",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000000zmpju02bEBm.webp"
      },
      {
        country: "",
        singer_id: 15514,
        singer_mid: "001Yxpxc0OaUUX",
        singer_name: "逃跑计划",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000001Yxpxc0OaUUX.webp"
      },
      {
        country: "",
        singer_id: 5924,
        singer_mid: "000Q4W691sMvLG",
        singer_name: "苏打绿",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000000Q4W691sMvLG.webp"
      },
      {
        country: "",
        singer_id: 139,
        singer_mid: "003NKwHr46UKeR",
        singer_name: "王杰",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000003NKwHr46UKeR.webp"
      },
      {
        country: "",
        singer_id: 42,
        singer_mid: "002UGAkU4ZDoTZ",
        singer_name: "李宗盛",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000002UGAkU4ZDoTZ.webp"
      },
      {
        country: "",
        singer_id: 11359,
        singer_mid: "002RTS1t1j31Qs",
        singer_name: "Leessang (리쌍)",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000002RTS1t1j31Qs.webp"
      },
      {
        country: "",
        singer_id: 11921,
        singer_mid: "000qrPik2w6lDr",
        singer_name: "Taylor Swift (泰勒·斯威夫特)",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000000qrPik2w6lDr.webp"
      },
      {
        country: "",
        singer_id: 12111,
        singer_mid: "004YXxql1sSr2o",
        singer_name: "金志文",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000004YXxql1sSr2o.webp"
      },
      {
        country: "",
        singer_id: 283148,
        singer_mid: "004NfJdF0gn6Z1",
        singer_name: "Red Velvet (레드벨벳)",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000004NfJdF0gn6Z1.webp"
      },
      {
        country: "",
        singer_id: 161444,
        singer_mid: "003bQEFA3KrvLI",
        singer_name: "刘瑞琦",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000003bQEFA3KrvLI.webp"
      },
      {
        country: "",
        singer_id: 91580,
        singer_mid: "004E2BBy3X9xne",
        singer_name: "王俊凯",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000004E2BBy3X9xne.webp"
      },
      {
        country: "",
        singer_id: 61981,
        singer_mid: "003mySXl30dc0S",
        singer_name: "李代沫",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000003mySXl30dc0S.webp"
      },
      {
        country: "",
        singer_id: 4284,
        singer_mid: "004DFS271osAwp",
        singer_name: "陈小春",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000004DFS271osAwp.webp"
      },
      {
        country: "",
        singer_id: 245,
        singer_mid: "0010PLKl2Wgolz",
        singer_name: "F.I.R.飞儿乐团",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M0000010PLKl2Wgolz.webp"
      },
      {
        country: "",
        singer_id: 69695,
        singer_mid: "000MYKBS1wPozb",
        singer_name: "杨烁",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000000MYKBS1wPozb.webp"
      },
      {
        country: "",
        singer_id: 1327483,
        singer_mid: "000985uR2CKS2P",
        singer_name: "艾辰",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000000985uR2CKS2P.webp"
      },
      {
        country: "",
        singer_id: 948064,
        singer_mid: "0000RHdG1ukDqy",
        singer_name: "英雄联盟 (League of Legends)",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M0000000RHdG1ukDqy.webp"
      },
      {
        country: "",
        singer_id: 228,
        singer_mid: "000JvETZ3tOrPR",
        singer_name: "陈慧娴",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000000JvETZ3tOrPR.webp"
      },
      {
        country: "",
        singer_id: 19851,
        singer_mid: "000t2qd13dLpae",
        singer_name: "G-DRAGON (权志龙)",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000000t2qd13dLpae.webp"
      },
      {
        country: "",
        singer_id: 1398057,
        singer_mid: "004Hxj1m48xwGi",
        singer_name: "广东雨神",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000004Hxj1m48xwGi.webp"
      },
      {
        country: "",
        singer_id: 149,
        singer_mid: "0040D7gK4aI54k",
        singer_name: "谭咏麟",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M0000040D7gK4aI54k.webp"
      },
      {
        country: "",
        singer_id: 13203,
        singer_mid: "004bsIDK0awMOv",
        singer_name: "萧敬腾",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000004bsIDK0awMOv.webp"
      },
      {
        country: "",
        singer_id: 4604,
        singer_mid: "001adLDR1SS40P",
        singer_name: "汪峰",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000001adLDR1SS40P.webp"
      },
      {
        country: "",
        singer_id: 33680,
        singer_mid: "0037dNIC0n5pW8",
        singer_name: "岑宁儿",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M0000037dNIC0n5pW8.webp"
      },
      {
        country: "",
        singer_id: 11761,
        singer_mid: "002Sm9iK4RIsCr",
        singer_name: "筷子兄弟",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000002Sm9iK4RIsCr.webp"
      },
      {
        country: "",
        singer_id: 38,
        singer_mid: "002seUhN1Akj7J",
        singer_name: "李圣杰",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000002seUhN1Akj7J.webp"
      },
      {
        country: "",
        singer_id: 159,
        singer_mid: "0022VU5J1D8BRP",
        singer_name: "胡彦斌",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M0000022VU5J1D8BRP.webp"
      },
      {
        country: "",
        singer_id: 47,
        singer_mid: "002u0TJy47WWOj",
        singer_name: "林忆莲",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000002u0TJy47WWOj.webp"
      },
      {
        country: "",
        singer_id: 7015,
        singer_mid: "004ItgA32BhfdC",
        singer_name: "Sia (希雅)",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000004ItgA32BhfdC.webp"
      },
      {
        country: "",
        singer_id: 162702,
        singer_mid: "004HidEP3pkcji",
        singer_name: "刘宪华 (Henry)",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000004HidEP3pkcji.webp"
      },
      {
        country: "",
        singer_id: 4442,
        singer_mid: "000mLAT42CFWNa",
        singer_name: "朴树",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000000mLAT42CFWNa.webp"
      },
      {
        country: "",
        singer_id: 165,
        singer_mid: "002tkdEU4gLVqO",
        singer_name: "萧亚轩",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000002tkdEU4gLVqO.webp"
      },
      {
        country: "",
        singer_id: 4418,
        singer_mid: "0002ankM4d5yZI",
        singer_name: "郭顶",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M0000002ankM4d5yZI.webp"
      },
      {
        country: "",
        singer_id: 101,
        singer_mid: "002cK0F12szD9T",
        singer_name: "陶喆",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000002cK0F12szD9T.webp"
      },
      {
        country: "",
        singer_id: 7298,
        singer_mid: "003Pcyjw2AAnGS",
        singer_name: "陈瑞",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000003Pcyjw2AAnGS.webp"
      },
      {
        country: "",
        singer_id: 4857,
        singer_mid: "0022VtZd19rZpi",
        singer_name: "阿杜",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M0000022VtZd19rZpi.webp"
      },
      {
        country: "",
        singer_id: 178612,
        singer_mid: "004OFF5J1uCT1c",
        singer_name: "金玟岐",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000004OFF5J1uCT1c.webp"
      },
      {
        country: "",
        singer_id: 162021,
        singer_mid: "003QznRR2ry01V",
        singer_name: "叶洛洛",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000003QznRR2ry01V.webp"
      },
      {
        country: "",
        singer_id: 1055436,
        singer_mid: "004IHCLx2eWTCC",
        singer_name: "季彦霖",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000004IHCLx2eWTCC.webp"
      },
      {
        country: "",
        singer_id: 60894,
        singer_mid: "002MfEld3FWp0R",
        singer_name: "张艺兴",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000002MfEld3FWp0R.webp"
      },
      {
        country: "",
        singer_id: 11445,
        singer_mid: "002OB4sz25N0aD",
        singer_name: "高进",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000002OB4sz25N0aD.webp"
      },
      {
        country: "",
        singer_id: 196676,
        singer_mid: "001NODJ71LGPD5",
        singer_name: "Shawn Mendes (肖恩·蒙德兹)",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000001NODJ71LGPD5.webp"
      },
      {
        country: "",
        singer_id: 188132,
        singer_mid: "0020uUft0MjWjW",
        singer_name: "刘珂矣",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M0000020uUft0MjWjW.webp"
      },
      {
        country: "",
        singer_id: 37893,
        singer_mid: "003yausN2yHNB5",
        singer_name: "DJ何鹏",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000003yausN2yHNB5.webp"
      },
      {
        country: "",
        singer_id: 19722,
        singer_mid: "002DF1Lp2C6mEY",
        singer_name: "冷漠",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000002DF1Lp2C6mEY.webp"
      },
      {
        country: "",
        singer_id: 1060995,
        singer_mid: "003NTUrM17PJhv",
        singer_name: "徐秉龙",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000003NTUrM17PJhv.webp"
      },
      {
        country: "",
        singer_id: 4362,
        singer_mid: "000f7diK2mDS3Z",
        singer_name: "林志炫",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000000f7diK2mDS3Z.webp"
      },
      {
        country: "",
        singer_id: 4588,
        singer_mid: "001C0c6j1VyLfh",
        singer_name: "黑龙",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000001C0c6j1VyLfh.webp"
      },
      {
        country: "",
        singer_id: 27158,
        singer_mid: "003W0GsQ2bAxVU",
        singer_name: "Imagine Dragons (梦龙)",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000003W0GsQ2bAxVU.webp"
      },
      {
        country: "",
        singer_id: 4713,
        singer_mid: "000kfe022gdaAn",
        singer_name: "邓丽君",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000000kfe022gdaAn.webp"
      },
      {
        country: "",
        singer_id: 1199153,
        singer_mid: "003JE8jQ46n049",
        singer_name: "焦迈奇",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000003JE8jQ46n049.webp"
      },
      {
        country: "",
        singer_id: 4658,
        singer_mid: "000ZVS6E1f6f0d",
        singer_name: "杨丞琳",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000000ZVS6E1f6f0d.webp"
      },
      {
        country: "",
        singer_id: 12132,
        singer_mid: "00180Rk61RE4qh",
        singer_name: "周柏豪",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M00000180Rk61RE4qh.webp"
      },
      {
        country: "",
        singer_id: 218,
        singer_mid: "003u5H9x1vACGo",
        singer_name: "S.H.E",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000003u5H9x1vACGo.webp"
      },
      {
        country: "",
        singer_id: 4470,
        singer_mid: "000keDtj2Um0rT",
        singer_name: "新裤子",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000000keDtj2Um0rT.webp"
      },
      {
        country: "",
        singer_id: 131,
        singer_mid: "0040MELG3TS8OW",
        singer_name: "费玉清",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M0000040MELG3TS8OW.webp"
      },
      {
        country: "",
        singer_id: 43197,
        singer_mid: "0046fVNz3ruk2r",
        singer_name: "Selena Gomez (赛琳娜·戈麦斯)",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M0000046fVNz3ruk2r.webp"
      },
      {
        country: "",
        singer_id: 204664,
        singer_mid: "001SqkF53OEhdO",
        singer_name: "鹿晗",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000001SqkF53OEhdO.webp"
      },
      {
        country: "",
        singer_id: 22785,
        singer_mid: "001RRlcX2n2NLs",
        singer_name: "Olly Murs",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000001RRlcX2n2NLs.webp"
      },
      {
        country: "",
        singer_id: 22874,
        singer_mid: "001oXbjs29oPul",
        singer_name: "孙子涵",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000001oXbjs29oPul.webp"
      },
      {
        country: "",
        singer_id: 7279,
        singer_mid: "003j4QdP0tDL0D",
        singer_name: "徐誉滕",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000003j4QdP0tDL0D.webp"
      },
      {
        country: "",
        singer_id: 161301,
        singer_mid: "000IBYF50SRnXP",
        singer_name: "王源",
        singer_pic:
          "http://y.gtimg.cn/music/photo_new/T001R150x150M000000IBYF50SRnXP.webp"
      }
    ],
    indexActive: -100,
    areaActive: -100,
    sexActive: -100,
    genreActive: -100,
    currentPath: "page=1",
    indexPath: "",
    areaPath: "",
    sexPath: "",
    genrePath: "",
    isShow: true,
    rendererArr: []
  };
  componentWillMount() {
    if (
      this.state.indexActive == -100 &&
      this.state.areaActive == -100 &&
      this.state.genreActive == -100 &&
      this.state.sexActive == -100
    ) {
      console.log("111");
      this.setState({
        rendererArr: this.state.singerInfo.singerList.data.singerlist.slice(10)
      });
    }
  }
  addActive = (e, id) => {
    if (id == -100) {
      this.setState({
        isShow: true
      });
    } else {
      this.setState({
        isShow: false
      });
    }
    let arr = e.target.id.split("_");
    if (arr[0] === "index") {
      if (arr[1] == id) {
        this.setState({
          indexActive: id,
          indexPath: `&${arr[0]}=${arr[1]}`,
          currentPath:
            "page=1" +
            `&${arr[0]}=${arr[1]}` +
            this.state.areaPath +
            this.state.sexPath +
            this.state.genrePath
        });
        // this.setState({});
      }
    } else if (arr[0] === "area") {
      if (arr[1] == id) {
        this.setState({
          areaActive: id,
          areaPath: `&${arr[0]}=${arr[1]}`,
          currentPath:
            "page=1" +
            this.state.indexPath +
            `&${arr[0]}=${arr[1]}` +
            this.state.sexPath +
            this.state.genrePath
        });
      }
    } else if (arr[0] === "sex") {
      if (arr[1] == id) {
        this.setState({
          sexActive: id,
          sexPath: `&${arr[0]}=${arr[1]}`,
          currentPath:
            "page=1" +
            this.state.indexPath +
            this.state.areaPath +
            `&${arr[0]}=${arr[1]}` +
            this.state.genrePath
        });
      }
    } else if (arr[0] === "genre") {
      if (arr[1] == id) {
        this.setState({
          genreActive: id,
          genrePath: `&${arr[0]}=${arr[1]}`,
          currentPath:
            "page=1" +
            this.state.indexPath +
            this.state.areaPath +
            this.state.sexPath +
            `&${arr[0]}=${arr[1]}`
        });
      }
    }
    setTimeout(() => {
      this.changeArr();
    }, 300);
  };
  changeArr = isPaga => {
    if (!isPaga) {
      if (
        this.state.indexActive == 1 &&
        this.state.areaActive == -100 &&
        this.state.genreActive == -100 &&
        this.state.sexActive == -100
      ) {
        this.setState({
          rendererArr: this.state.singerArr.singerlist1
        });
      } else if (
        this.state.indexActive == 1 &&
        this.state.areaActive == 200 &&
        this.state.genreActive == -100 &&
        this.state.sexActive == -100
      ) {
        this.setState({
          rendererArr: this.state.singerArr.singerlist2
        });
      } else if (
        this.state.indexActive == 1 &&
        this.state.areaActive == 200 &&
        this.state.genreActive == -100 &&
        this.state.sexActive == 1
      ) {
        this.setState({
          rendererArr: this.state.singerArr.singerlist3
        });
      } else if (
        this.state.indexActive == 1 &&
        this.state.areaActive == 200 &&
        this.state.genreActive == 1 &&
        this.state.sexActive == 1
      ) {
        this.setState({
          rendererArr: this.state.singerArr.singerlist4
        });
      } else if (
        this.state.indexActive == -100 &&
        this.state.areaActive == -100 &&
        this.state.genreActive == -100 &&
        this.state.sexActive == -100
      ) {
        this.setState({
          rendererArr: this.state.singerInfo.singerList.data.singerlist.slice(
            10
          )
        });
      }
    } else {
      if (isPaga === 1) {
        this.setState({
          rendererArr: this.state.singerlistPaga
        });
      }
    }
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
          <div className="classification_singerName_container">
            <div className="classification">
              {/* 字母选择区 */}
              <div className="singer_list letterContainer">
                {//
                this.state.singerInfo.singerList.data.tags.index.map(item => {
                  return (
                    <Link
                      to={`/index/music/singer`}
                      className={`tab ${
                        this.state.indexActive === item.id ? "active" : ""
                      }`}
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
                      className={`tab ${
                        this.state.areaActive === item.id ? "active" : ""
                      }`}
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
                      className={`tab ${
                        this.state.sexActive === item.id ? "active" : ""
                      }`}
                      key={item.id}
                      id={"sex_" + item.id}
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
                      className={`tab ${
                        this.state.genreActive === item.id ? "active" : ""
                      }`}
                      id={"genre_" + item.id}
                      key={item.id}
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
              <div
                className={
                  this.state.isShow ? "singerAvatar" : "singerAvatarHide"
                }
              >
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
                {this.state.rendererArr.map(item => {
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
                total={50}
                className="pagination"
                onClick={() => this.changeArr(1)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
