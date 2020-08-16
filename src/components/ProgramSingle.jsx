import React, { Component } from 'react';

export default class ProgramSingle extends Component {
  constructor() {
    super();

    this.state = {
      id: '',
      info: {
        title: '一周在家训练计划',
        release: '2020-08-14',
        keyword: '上肢 核心 下肢 燃脂 拉伸 科普',
        day_cnt: '7',
        time_pday: '30-45',
        img: 'https://static.markzhengma.com/program-cover-test1.jpg',
        txt_color: '#0B3934',
        bg_color: '#F8EBEE'
      },
      calendar: [
        {
          day: 'MON',
          keyword: '上肢 腹部 拉伸',
          is_rest: false,
          list: [
            {
              vid: '20190620',
              title_cn: '10分钟上肢训练',
              url_yt: 'https://youtu.be/3Zw7xbyuy6Y?t=52s',
              url_bili: 'https://www.bilibili.com/video/BV1C4411g7q8',
              img: 'https://static.markzhengma.com/video/20190620_480.png',
            },
            {
              vid: '20190519',
              title_cn: '10分钟腹肌训练',
              url_yt: 'https://youtu.be/tfISYP4PVhM?t=45s',
              url_bili: 'https://www.bilibili.com/video/BV174411E7dJ',
              img: 'https://static.markzhengma.com/video/20190519_480.png',
            },
            {
              vid: '20190913',
              title_cn: '10分钟全身拉伸',
              url_yt: 'https://youtu.be/d5lrOKiSz_I?t=45s',
              url_bili: 'https://www.bilibili.com/video/BV1LJ411N724',
              img: 'https://static.markzhengma.com/video/20190913_480.png',
            },
          ]
        },
        {
          day: 'TUE',
          keyword: '全身 核心 拉伸',
          is_rest: false,
          list: [
            {
              vid: '20200112',
              title_cn: '7分钟核心训练',
              url_yt: 'https://youtu.be/nzDhxAAzFBU?t=142s',
              url_bili: 'https://www.bilibili.com/video/BV1zJ41157aV',
              img: 'https://static.markzhengma.com/video/20200112_480.png',
            },
            {
              vid: '20200626',
              title_cn: '30分钟 HIIT',
              url_yt: 'https://youtu.be/liK41qAJvoI?t=51s',
              url_bili: 'https://www.bilibili.com/video/BV1AV41167HM',
              img: 'https://static.markzhengma.com/video/20200626_480.png',
            },
            {
              vid: '20200514',
              title_cn: '8分钟全身拉伸',
              url_yt: 'https://youtu.be/LSUJOgciuWQ?t=44s',
              url_bili: 'https://www.bilibili.com/video/BV17z4y1d7Do',
              img: 'https://static.markzhengma.com/video/20200514_480.png',
            }
          ]
        },
        {
          day: 'WED',
          keyword: '下肢 全身',
          is_rest: false,
          list: [
            {
              vid: '20191014',
              title_cn: '10分钟臀部训练',
              url_yt: 'https://youtu.be/y8Xeh9oMWus?t=46s',
              img: 'https://static.markzhengma.com/video/20191014_480.png',
            },
            {
              vid: '20191028',
              title_cn: '20分钟 HIIT',
              url_yt: 'https://youtu.be/YzKzJxjKs_E?t=44s',
              url_bili: 'https://www.bilibili.com/video/BV1LE411a7ys',
              img: 'https://static.markzhengma.com/video/20191028_480.png',
            },
            {
              vid: '20200718',
              title_cn: '10分钟腿部运动',
              url_yt: 'https://youtu.be/dnUlk_Dawio?t=52s',
              url_bili: 'https://www.bilibili.com/video/BV12V411B7mv',
              img: 'https://static.markzhengma.com/video/20200718_480.png',
            }
          ]
        },
        {
          day: 'THU',
          keyword: '休息 拉伸 科普',
          is_rest: false,
          list: [
            {
              vid: '20190929',
              title_cn: '15分钟肩颈拉伸',
              url_yt: 'https://youtu.be/t8TZyRIpXfY?t=29s',
              url_bili: 'https://www.bilibili.com/video/BV1bE411R7wW',
              img: 'https://static.markzhengma.com/video/20190929_480.png',
            },
            {
              vid: '20200504',
              title_cn: '减脂小课堂',
              url_yt: 'https://youtu.be/9SY8AIpWkvo',
              url_bili: 'https://www.bilibili.com/video/BV1gZ4y1s78s',
              img: 'https://static.markzhengma.com/video/20200504_480.png',
            },
          ]
        },
        {
          day: 'FRI',
          keyword: '全身 腹部',
          is_rest: false,
          list: [
            {
              vid: '20190705',
              title_cn: '15分钟 HIIT',
              url_yt: 'https://youtu.be/xxPL5siEj8w?t=73s',
              url_bili: 'https://www.bilibili.com/video/BV1B4411A7z8',
              img: 'https://static.markzhengma.com/video/20190705_480.png',
            },
            {
              vid: '20191018',
              title_cn: '10分钟下腹训练',
              url_yt: 'https://youtu.be/uIAnEb7W9UY?t=54s',
              url_bili: 'https://www.bilibili.com/video/BV1QE411r7qj',
              img: 'https://static.markzhengma.com/video/20191018_480.png',
            },
          ]
        },
        {
          day: 'SAT',
          keyword: '全身',
          is_rest: false,
          list: [
            {
              vid: '20200422',
              title_cn: '30分钟 HIIT',
              url_yt: 'https://youtu.be/tkXtVKoV5FA?t=43s',
              url_bili: 'https://www.bilibili.com/video/BV1KA41187WQ',
              img: 'https://static.markzhengma.com/video/20200422_480.png',
            },
            {
              vid: '20190913',
              title_cn: '10分钟全身拉伸',
              url_yt: 'https://youtu.be/d5lrOKiSz_I?t=45s',
              url_bili: 'https://www.bilibili.com/video/BV1LJ411N724',
              img: 'https://static.markzhengma.com/video/20190913_480.png',
            },
          ]
        },
        {
          day: 'SUN',
          keyword: '休息',
          is_rest: true
        }
      ],

      selectedProgramId: ''
    }
  };

  componentDidMount(){
    const testData = {
      id: this.props.id,
    };

    this.setState({ 
      id: testData.id
    })
  };

  selectProgram(id) {
    this.setState({
      selectedProgramId: id
    });
  };

  clearProgramSelection() {
    this.setState({
      selectedProgramId: ''
    })
  }

  render() {
    return (
      <div 
        className="program-single-page flex-hc-vc"
        style={{backgroundColor: this.state.info.bg_color}}
      >
        <div className="spacer"></div>
        <div 
          className="program-single-banner flex-hc-vc"
          style={{backgroundImage: `url(${this.state.info.img})`}}
        >
          <h3 className="program-single-title">
            { this.state.info.title }
          </h3>
          <b className="program-single-detail">
            Release: { this.state.info.release }
          </b>
          <b className="program-single-detail">
            { this.state.info.time_pday} mins x { this.state.info.day_cnt } days
          </b>
          <b className="program-single-detail">
            { this.state.info.keyword }
          </b>
        </div>
        <div className="program-single-calendar">
          { this.state.calendar.map(day => {
            return (
              <div 
                className="program-single-day" 
                key={day.day}
                style={{ borderLeft: `${this.state.info.txt_color} solid 2px`}}
              >
                <h3 
                  className="program-single-day-title"
                  style={{ background: `linear-gradient(to right, ${this.state.info.txt_color}, rgba(0, 0, 0, 0))`,
                    color: this.state.info.bg_color
                  }}
                >
                  { day.day }
                </h3>
                <b 
                  className="program-single-day-detail"
                  style={{color: this.state.info.txt_color}}
                >
                  { day.keyword }
                </b>
                <div className="program-single-day-list">
                  { !day.is_rest
                    ? day.list.map(program => {
                        return (
                          // <a 
                          //   href={program.url_yt} 
                          //   target='_blank'
                          //   rel="noopener noreferrer"
                          //   key={day.day+program.vid}
                          // >
                            <div 
                              className="program-single-box"
                              style={{ backgroundImage: `url(${program.img})`}}
                              onMouseEnter={() => this.selectProgram(day.day+program.vid)}
                              onMouseLeave={() => this.clearProgramSelection()}
                            >
                              <div 
                                className="program-single-box-overlay"
                                style={{ display: day.day+program.vid === this.state.selectedProgramId ? 'flex' : 'none'}}
                              >
                                <a 
                                  href={program.url_yt} 
                                  target='_blank'
                                  rel="noopener noreferrer"
                                >
                                  <div className="icon-btn icon-youtube"></div>
                                </a>
                                {program.url_bili 
                                  ? <a 
                                    href={program.url_bili} 
                                    target='_blank'
                                    rel="noopener noreferrer"
                                  >
                                    <div className="icon-btn icon-bili"></div>
                                  </a>
                                  : ''
                                }
                              </div>
                              <div className="program-single-box-title-container">
                                <b className="program-single-box-title">
                                  { program.title_cn }
                                </b>
                              </div>
                            </div>
                          // </a>
                        )
                      })
                    : <div className="icon beachchair"></div>
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
