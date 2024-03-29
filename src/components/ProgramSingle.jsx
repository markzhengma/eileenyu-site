import React, { Component } from "react";
import axios from 'axios';
import LazyLoad from 'react-lazyload';

export default class ProgramSingle extends Component {
  constructor() {
    super();

    this.state = {
      cid: "",
      title: "两周在家训练计划",
      release: "2020-08-14",
      "keyword": "全身燃脂 塑形 科普",
      day_cnt: "14",
      time_pday: "25-45",
      img: "",
      txt_color: "#0B3934",
      bg_color: "#F6F3EB",
      detail: [
      //   {
      //     "day": "DAY 1",
      //     "keyword": "上肢 腹部",
      //     "is_rest": false,
      //     "time_span": "30",
      //     "list": [
      //       {
      //         "vid": "20190620",
      //         "title_cn": "10分钟上肢训练",
      //         "url_yt": "https://youtu.be/3Zw7xbyuy6Y?t=52s",
      //         "url_bili": "https://www.bilibili.com/video/BV1C4411g7q8?t=0h0m52s",
      //         "img": "https://static.eileen-yu.com/video/20190620_720.png",
      //         "img_480": "https://static.eileen-yu.com/video/20190620_480.png",
      //         "img_720": "https://static.eileen-yu.com/video/20190620_720.png"
      //       },
      //       {
      //         "vid": "20190519",
      //         "title_cn": "10分钟腹肌训练",
      //         "url_yt": "https://youtu.be/tfISYP4PVhM?t=45s",
      //         "url_bili": "https://www.bilibili.com/video/BV174411E7dJ?t=0h0m45s",
      //         "img": "https://static.eileen-yu.com/video/20190519_720.png",
      //         "img_480": "https://static.eileen-yu.com/video/20190519_480.png",
      //         "img_720": "https://static.eileen-yu.com/video/20190519_720.png"
      //       },
      //       {
      //         "vid": "20190913",
      //         "title_cn": "10分钟全身拉伸",
      //         "url_yt": "https://youtu.be/d5lrOKiSz_I?t=45s",
      //         "url_bili": "https://www.bilibili.com/video/BV1LJ411N724?t=0h0m45s",
      //         "img": "https://static.eileen-yu.com/video/20190913_720.png",
      //         "img_480": "https://static.eileen-yu.com/video/20190913_480.png",
      //         "img_720": "https://static.eileen-yu.com/video/20190913_720.png"
      //       },
      //     ]
      //   },
      //   {
      //     "day": "DAY 2",
      //     "keyword": "全身 核心",
      //     "is_rest": false,
      //     "time_span": "45",
      //     "list": [
      //       {
      //         "vid": "20200112",
      //         "title_cn": "7分钟核心训练",
      //         "url_yt": "https://youtu.be/nzDhxAAzFBU?t=142s",
      //         "url_bili": "https://www.bilibili.com/video/BV1zJ41157aV?t=0h2m22s",
      //         "img": "https://static.eileen-yu.com/video/20200112_720.png",
      //         "img_480": "https://static.eileen-yu.com/video/20200112_480.png",
      //         "img_720": "https://static.eileen-yu.com/video/20200112_720.png"
      //       },
      //       {
      //         "vid": "20200626",
      //         "title_cn": "30分钟 HIIT",
      //         "url_yt": "https://youtu.be/liK41qAJvoI?t=51s",
      //         "url_bili": "https://www.bilibili.com/video/BV1AV41167HM?t=0h0m51s",
      //         "img": "https://static.eileen-yu.com/video/20200626_720.png",
      //         "img_480": "https://static.eileen-yu.com/video/20200626_480.png",
      //         "img_720": "https://static.eileen-yu.com/video/20200626_720.png"
      //       },
      //       {
      //         "vid": "20200514",
      //         "title_cn": "8分钟全身拉伸",
      //         "url_yt": "https://youtu.be/LSUJOgciuWQ?t=44s",
      //         "url_bili": "https://www.bilibili.com/video/BV17z4y1d7Do?t=0h0m44s",
      //         "img": "https://static.eileen-yu.com/video/20200514_720.png",
      //         "img_480": "https://static.eileen-yu.com/video/20200514_480.png",
      //         "img_720": "https://static.eileen-yu.com/video/20200514_720.png"
      //       }
      //     ]
      //   },
      //   {
      //     "day": "DAY 3",
      //     "keyword": "臀 腿",
      //     "is_rest": false,
      //     "time_span": "40",
      //     "list": [
      //       {
      //         "vid": "20191014",
      //         "title_cn": "10分钟臀部训练",
      //         "url_yt": "https://youtu.be/y8Xeh9oMWus?t=46s",
      //         "img": "https://static.eileen-yu.com/video/20191014_720.png",
      //         "img_480": "https://static.eileen-yu.com/video/20191014_480.png",
      //         "img_720": "https://static.eileen-yu.com/video/20191014_720.png"
      //       },
      //       {
      //         "vid": "20191028",
      //         "title_cn": "20分钟 HIIT",
      //         "url_yt": "https://youtu.be/YzKzJxjKs_E?t=44s",
      //         "url_bili": "https://www.bilibili.com/video/BV1LE411a7ys?t=0h0m44s",
      //         "img": "https://static.eileen-yu.com/video/20191028_720.png",
      //         "img_480": "https://static.eileen-yu.com/video/20191028_480.png",
      //         "img_720": "https://static.eileen-yu.com/video/20191028_720.png"
      //       },
      //       {
      //         "vid": "20200718",
      //         "title_cn": "10分钟腿部运动",
      //         "url_yt": "https://youtu.be/dnUlk_Dawio?t=52s",
      //         "url_bili": "https://www.bilibili.com/video/BV12V411B7mv?t=0h0m52s",
      //         "img": "https://static.eileen-yu.com/video/20200718_720.png",
      //         "img_480": "https://static.eileen-yu.com/video/20200718_480.png",
      //         "img_720": "https://static.eileen-yu.com/video/20200718_720.png"
      //       }
      //     ]
      //   },
      //   {
      //     "day": "DAY 4",
      //     "keyword": "拉伸 减脂小课堂",
      //     "is_rest": false,
      //     "time_span": "35",
      //     "list": [
      //       {
      //         "vid": "20190929",
      //         "title_cn": "15分钟肩颈拉伸",
      //         "url_yt": "https://youtu.be/t8TZyRIpXfY?t=29s",
      //         "url_bili": "https://www.bilibili.com/video/BV1bE411R7wW?t=0h0m29s",
      //         "img": "https://static.eileen-yu.com/video/20190929_720.png",
      //         "img_480": "https://static.eileen-yu.com/video/20190929_480.png",
      //         "img_720": "https://static.eileen-yu.com/video/20190929_720.png"
      //       },
      //       {
      //         "vid": "20200504",
      //         "title_cn": "减脂小课堂",
      //         "url_yt": "https://youtu.be/9SY8AIpWkvo",
      //         "url_bili": "https://www.bilibili.com/video/BV1gZ4y1s78s",
      //         "img": "https://static.eileen-yu.com/video/20200504_720.png",
      //         "img_480": "https://static.eileen-yu.com/video/20200504_480.png",
      //         "img_720": "https://static.eileen-yu.com/video/20200504_720.png"
      //       },
      //     ]
      //   },
      //   {
      //     "day": "DAY 5",
      //     "keyword": "全身 腹部",
      //     "is_rest": false,
      //     "time_span": "25",
      //     "list": [
      //       {
      //         "vid": "20190705",
      //         "title_cn": "15分钟 HIIT",
      //         "url_yt": "https://youtu.be/xxPL5siEj8w?t=73s",
      //         "url_bili": "https://www.bilibili.com/video/BV1B4411A7z8?t=0h1m13s",
      //         "img": "https://static.eileen-yu.com/video/20190705_720.png",
      //         "img_480": "https://static.eileen-yu.com/video/20190705_480.png",
      //         "img_720": "https://static.eileen-yu.com/video/20190705_720.png"
      //       },
      //       {
      //         "vid": "20191018",
      //         "title_cn": "10分钟下腹训练",
      //         "url_yt": "https://youtu.be/uIAnEb7W9UY?t=54s",
      //         "url_bili": "https://www.bilibili.com/video/BV1QE411r7qj?t=0h0m54s",
      //         "img": "https://static.eileen-yu.com/video/20191018_720.png",
      //         "img_480": "https://static.eileen-yu.com/video/20191018_480.png",
      //         "img_720": "https://static.eileen-yu.com/video/20191018_720.png"
      //       },
      //     ]
      //   },
      //   {
      //     "day": "DAY 6",
      //     "keyword": "全身",
      //     "is_rest": false,
      //     "time_span": "40",
      //     "list": [
      //       {
      //         "vid": "20200422",
      //         "title_cn": "30分钟 HIIT",
      //         "url_yt": "https://youtu.be/tkXtVKoV5FA?t=43s",
      //         "url_bili": "https://www.bilibili.com/video/BV1KA41187WQ?t=0h0m43s",
      //         "img": "https://static.eileen-yu.com/video/20200422_720.png",
      //         "img_480": "https://static.eileen-yu.com/video/20200422_480.png",
      //         "img_720": "https://static.eileen-yu.com/video/20200422_720.png"
      //       },
      //       {
      //         "vid": "20190913",
      //         "title_cn": "10分钟全身拉伸",
      //         "url_yt": "https://youtu.be/d5lrOKiSz_I?t=45s",
      //         "url_bili": "https://www.bilibili.com/video/BV1LJ411N724",
      //         "img": "https://static.eileen-yu.com/video/20190913_720.png",
      //         "img_480": "https://static.eileen-yu.com/video/20190913_480.png",
      //         "img_720": "https://static.eileen-yu.com/video/20190913_720.png"
      //       },
      //     ]
      //   },
      //   {
      //     "day": "DAY 7",
      //     "keyword": "休息",
      //     "is_rest": true,
      //     "time_span": "0"
      //   },
      //   {
      //     "day": "DAY 8",
      //     "keyword": "上肢 腹部",
      //     "is_rest": false,
      //     "time_span": "18",
      //     "list": [
      //       {
      //         "vid": "20201002",
      //         "title_cn": "5分钟全身热身",
      //         "url_yt": "https://youtu.be/BTyh8kieS0E",
      //         "url_bili": "https://www.bilibili.com/video/BV1W5411j7NK",
      //         "img": "https://static.eileen-yu.com/video/20201002_720.png",
      //         "img_480": "https://static.eileen-yu.com/video/20201002_480.png",
      //         "img_720": "https://static.eileen-yu.com/video/20201002_720.png"
      //       },
      //       {
      //         "vid": "20200306",
      //         "title_cn": "4分钟背部塑形",
      //         "url_yt": "https://youtu.be/z37DEUfTkZk?t=182s",
      //         "url_bili": "https://www.bilibili.com/video/BV1RE411H7K9?t=0h3m02s",
      //         "img": "https://static.eileen-yu.com/video/20200306_720.png",
      //         "img_480": "https://static.eileen-yu.com/video/20200306_480.png",
      //         "img_720": "https://static.eileen-yu.com/video/20200306_720.png"
      //       },
      //       {
      //         "vid": "20190611",
      //         "title_cn": "9分钟下腹燃脂",
      //         "url_yt": "https://youtu.be/j8G96EnV-GQ?t=47s",
      //         "url_bili": "https://www.bilibili.com/video/BV1D4411n7rw?t=0h0m47s",
      //         "img": "https://static.eileen-yu.com/video/20190611_720.png",
      //         "img_480": "https://static.eileen-yu.com/video/20190611_480.png",
      //         "img_720": "https://static.eileen-yu.com/video/20190611_720.png"
      //       },
      //     ]
      //   },
      //   {
      //     "day": "DAY 9",
      //     "keyword": "臀 腿",
      //     "is_rest": false,
      //     "time_span": "25",
      //     "list": [
      //       {
      //         "vid": "20201002",
      //         "title_cn": "5分钟全身热身",
      //         "url_yt": "https://youtu.be/BTyh8kieS0E",
      //         "url_bili": "https://www.bilibili.com/video/BV1W5411j7NK",
      //         "img": "https://static.eileen-yu.com/video/20201002_720.png",
      //         "img_480": "https://static.eileen-yu.com/video/20201002_480.png",
      //         "img_720": "https://static.eileen-yu.com/video/20201002_720.png"
      //       },
      //       {
      //         "vid": "20200718",
      //         "title_cn": "10分钟腿部运动",
      //         "url_yt": "https://youtu.be/dnUlk_Dawio?t=51s",
      //         "url_bili": "https://www.bilibili.com/video/BV12V411B7mv?t=0h0m51s",
      //         "img": "https://static.eileen-yu.com/video/20200718_720.png",
      //         "img_480": "https://static.eileen-yu.com/video/20200718_480.png",
      //         "img_720": "https://static.eileen-yu.com/video/20200718_720.png"
      //       },
      //       {
      //         "vid": "20191014",
      //         "title_cn": "10分钟臀部训练",
      //         "url_yt": "https://youtu.be/y8Xeh9oMWus?t=46s",
      //         "img": "https://static.eileen-yu.com/video/20191014_720.png",
      //         "img_480": "https://static.eileen-yu.com/video/20191014_480.png",
      //         "img_720": "https://static.eileen-yu.com/video/20191014_720.png"
      //       },
      //     ]
      //   },
      //   {
      //     "day": "DAY 10",
      //     "keyword": "拉伸 生理期小课堂",
      //     "is_rest": false,
      //     "time_span": "20",
      //     "list": [
      //       {
      //         "vid": "20200904",
      //         "title_cn": "10分钟拉伸运动",
      //         "url_yt": "https://youtu.be/BTyh8kieS0E?t=81s",
      //         "url_bili": "https://www.bilibili.com/video/BV1L5411b79N?t=0h1m21s",
      //         "img": "https://static.eileen-yu.com/video/20200904_720.png",
      //         "img_480": "https://static.eileen-yu.com/video/20200904_480.png",
      //         "img_720": "https://static.eileen-yu.com/video/20200904_720.png"
      //       },
      //       {
      //         "vid": "20191108",
      //         "title_cn": "经期运动大揭秘",
      //         "url_yt": "https://youtu.be/72MK28eiyqE",
      //         "url_bili": "https://www.bilibili.com/video/BV1kE411i7jd",
      //         "img": "https://static.eileen-yu.com/video/20191108_720.png",
      //         "img_480": "https://static.eileen-yu.com/video/20191108_480.png",
      //         "img_720": "https://static.eileen-yu.com/video/20191108_720.png"
      //       }
      //     ]
      //   },
      //   {
      //     "day": "DAY 11",
      //     "keyword": "全身",
      //     "is_rest": false,
      //     "time_span": "35",
      //     "list": [
      //       {
      //         "vid": "20201002",
      //         "title_cn": "5分钟全身热身",
      //         "url_yt": "https://youtu.be/BTyh8kieS0E",
      //         "url_bili": "https://www.bilibili.com/video/BV1W5411j7NK",
      //         "img": "https://static.eileen-yu.com/video/20201002_720.png",
      //         "img_480": "https://static.eileen-yu.com/video/20201002_480.png",
      //         "img_720": "https://static.eileen-yu.com/video/20201002_720.png"
      //       },
      //       {
      //         "vid": "20191028",
      //         "title_cn": "20分钟 HIIT",
      //         "url_yt": "https://youtu.be/YzKzJxjKs_E?t=44s",
      //         "url_bili": "https://www.bilibili.com/video/BV1LE411a7ys?t=0h0m44s",
      //         "img": "https://static.eileen-yu.com/video/20191028_720.png",
      //         "img_480": "https://static.eileen-yu.com/video/20191028_480.png",
      //         "img_720": "https://static.eileen-yu.com/video/20191028_720.png"
      //       },
      //       {
      //         "vid": "20190913",
      //         "title_cn": "10分钟全身拉伸",
      //         "url_yt": "https://youtu.be/d5lrOKiSz_I?t=45s",
      //         "url_bili": "https://www.bilibili.com/video/BV1LJ411N724?t=0h0m45s",
      //         "img": "https://static.eileen-yu.com/video/20190913_720.png",
      //         "img_480": "https://static.eileen-yu.com/video/20190913_480.png",
      //         "img_720": "https://static.eileen-yu.com/video/20190913_720.png"
      //       }
      //     ]
      //   },
      //   {
      //     "day": "DAY 12",
      //     "keyword": "全身 腹部",
      //     "is_rest": false,
      //     "time_span": "40",
      //     "list": [
      //       {
      //         "vid": "20200626",
      //         "title_cn": "30分钟 HIIT",
      //         "url_yt": "https://youtu.be/liK41qAJvoI?t=51s",
      //         "url_bili": "https://www.bilibili.com/video/BV1AV41167HM?t=0h0m51s",
      //         "img": "https://static.eileen-yu.com/video/20200626_720.png",
      //         "img_480": "https://static.eileen-yu.com/video/20200626_480.png",
      //         "img_720": "https://static.eileen-yu.com/video/20200626_720.png"
      //       },
      //       {
      //         "vid": "20191102",
      //         "title_cn": "10分钟腹部训练",
      //         "url_yt": "https://youtu.be/mvXAJuV3H5k?t=78s",
      //         "url_bili": "https://www.bilibili.com/video/BV1GE411t7be?t=0h1m18s",
      //         "img": "https://static.eileen-yu.com/video/20191102_720.png",
      //         "img_480": "https://static.eileen-yu.com/video/20191102_480.png",
      //         "img_720": "https://static.eileen-yu.com/video/20191102_720.png"
      //       }
      //     ]
      //   },
      //   {
      //     "day": "DAY 13",
      //     "keyword": "休息",
      //     "is_rest": true,
      //     "time_span": "0"
      //   },
      //   {
      //     "day": "DAY 14",
      //     "keyword": "腹部 拉伸",
      //     "is_rest": false,
      //     "time_span": "25",
      //     "list": [
      //       {
      //         "vid": "20200904",
      //         "title_cn": "10分钟拉伸运动",
      //         "url_yt": "https://youtu.be/BTyh8kieS0E?t=81s",
      //         "url_bili": "https://www.bilibili.com/video/BV1L5411b79N?t=0h1m21s",
      //         "img": "https://static.eileen-yu.com/video/20200904_720.png",
      //         "img_480": "https://static.eileen-yu.com/video/20200904_480.png",
      //         "img_720": "https://static.eileen-yu.com/video/20200904_720.png"
      //       },
      //       {
      //         "vid": "20201002",
      //         "title_cn": "5分钟全身热身",
      //         "url_yt": "https://youtu.be/BTyh8kieS0E",
      //         "url_bili": "https://www.bilibili.com/video/BV1W5411j7NK",
      //         "img": "https://static.eileen-yu.com/video/20201002_720.png",
      //         "img_480": "https://static.eileen-yu.com/video/20201002_480.png",
      //         "img_720": "https://static.eileen-yu.com/video/20201002_720.png"
      //       },
      //       {
      //         "vid": "20200920",
      //         "title_cn": "10分钟站立腹部训练",
      //         "url_yt": "https://youtu.be/lR9M11upFvM?t=49s",
      //         "url_bili": "https://www.bilibili.com/video/BV1Lk4y1172z?t=0h0m49s",
      //         "img": "https://static.eileen-yu.com/video/20200920_720.png",
      //         "img_480": "https://static.eileen-yu.com/video/20200920_480.png",
      //         "img_720": "https://static.eileen-yu.com/video/20200920_720.png"
      //       },
      //     ]
      //   },
      ],

      selectedProgramId: ""
    }
  };

  async componentDidMount(){
    const programRes = await axios.get(`https://api.eileen-yu.com/calendar/single/${this.props.id}`);
    const programData = programRes.data.data;
    
    this.setState({
      cid: programData.cid,
      title: programData.title,
      release: programData.release,
      keyword: programData.keyword,
      day_cnt: programData.day_cnt,
      time_pday: programData.time_pday,
      img: programData.img,
      txt_color: programData.txt_color,
      bg_color: programData.bg_color,
      detail: programData.detail
    });
  };

  selectProgram(id) {
    if(window.innerWidth >= 540) {
      this.setState({
        selectedProgramId: id
      });
    }
  };

  clearProgramSelection() {
    if(window.innerWidth >= 540) {
      this.setState({
        selectedProgramId: ""
      })
    }
  }

  render() {
    return (
      <div 
        className="program-single-page flex-hc-vc"
        // style={{backgroundColor: this.state.bg_color}}
      >
        <div className="spacer"></div>
        <div 
          className="program-single-banner-bg"
          style={{backgroundImage: `url(${this.state.img})`}}
        />
        <div 
          className="program-single-banner flex-hc-vc"
          // style={{backgroundImage: `url(${this.state.img})`}}
        >
          <div className="program-single-infobox flex-hc-vc">
            <b className="program-single-title">
              { this.state.title }
            </b>
            <b className="program-single-detail">
              Release: { this.state.release }
            </b>
            <b className="program-single-detail">
              { this.state.time_pday} mins x { this.state.day_cnt } days
            </b>
            <b className="program-single-detail">
              { this.state.keyword }
            </b>
          </div>
        </div>
        <div className="program-single-calendar">
          { this.state.detail.map(day => {
            return (
              <div 
                className="program-single-day" 
                key={day.day}
                // style={{ borderLeft: `${this.state.txt_color} solid 2px`}}
              >
                <div className="program-single-day-title-block"
                  // style={{backgroundColor: this.state.txt_color}}
                >
                  <div className="program-single-day-dot"></div>
                  <div 
                    className="program-single-day-title"
                    // style={{ background: `linear-gradient(to right, ${this.state.txt_color}, rgba(0, 0, 0, 0))`,
                    //   color: this.state.bg_color
                    // }}
                  >
                    <div className = "icon-small icon-calendar" style={{marginRight: "16px"}}></div>
                    <div className="program-single-day-title-txt">
                      { day.day }
                    </div>
                    <div 
                      className="program-single-day-detail"
                      // style={{color: this.state.txt_color}}
                    >
                      {/* <div className = "icon-small icon-card"></div> */}
                      { day.keyword.length <= 6 ? day.keyword : day.keyword.substring(0, 5) + '...' }
                    </div>
                  </div>
                  <b 
                    className="program-single-day-time"
                  >
                    { day.time_span } min
                  </b>
                </div>
                
                <div className="program-single-day-list">
                  { !day.is_rest
                    ? day.list.map(program => {
                        return (
                          <LazyLoad
                            key = {day + program.vid + day.list.indexOf(program)}
                          >
                            <div className="program-single-box-wrapper">
                              <div 
                                className="program-single-box"
                                style={{ backgroundImage: `url(${program.img_720})`}}
                                onMouseEnter={() => this.selectProgram(day.day+program.vid)}
                                onMouseLeave={() => this.clearProgramSelection()}
                              >
                                <div 
                                  className="program-single-box-overlay"
                                  style={{ display: day.day+program.vid === this.state.selectedProgramId 
                                    ? "flex" 
                                    : "none"
                                  }}
                                >
                                  <a 
                                    href={program.url_yt} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon-btn icon-youtube"
                                  >
                                    <div/>
                                  </a>
                                  {program.url_bili 
                                    ? <a 
                                        href={program.url_bili} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="icon-btn icon-bili"
                                      >
                                        <div/>
                                      </a>
                                    : ""
                                  }
                                  {program.url_wx 
                                    ? !program.url_bili
                                      ? <a 
                                          href={program.url_wx} 
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="icon-btn icon-wechat"
                                        >
                                          <div/>
                                        </a>
                                      : ""
                                    : ""
                                  }
                                </div>
                                <div className="program-single-box-title-container">
                                  <b className="program-single-box-title">
                                    { program.title_cn }
                                  </b>
                                </div>
                                
                              </div>
                              <div 
                                  className="program-single-box-btngroup"
                                >
                                  <a 
                                    href={program.url_yt} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon-btn-mobile icon-youtube"
                                  >
                                    <div/>
                                  </a>
                                  {program.url_bili 
                                    ? <a 
                                        href={program.url_bili} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="icon-btn-mobile icon-bili"
                                      >
                                        <div/>
                                      </a>
                                    : ""
                                  }
                                  {program.url_wx 
                                    ? !program.url_bili
                                      ? <a 
                                          href={program.url_wx} 
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="icon-btn-mobile icon-wechat"
                                        >
                                          <div/>
                                        </a>
                                      : ""
                                    : ""
                                  }
                                </div>
                            </div>
                          </LazyLoad>
                        )
                      })
                    : <div className="icon relax program-single-box-icon"></div>
                  }
                </div>
              </div>
            )
          })
          }
        </div>
      </div>
    )
  }
}
