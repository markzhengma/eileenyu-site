import React, { Component } from 'react';
import { Badge } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from 'axios';

export default class ProgramList extends Component {
  constructor() {
    super();

    this.state = {
      programData: [
        // {
        //   cid: 'c20200814',
        //   title: '一周在家训练计划',
        //   release: '2020-08-14',
        //   isnew: true,
        //   time_pday: '30-45',
        //   day_cnt: '7',
        //   detail: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae minima necessitatibus molestiae labore, eaque alias, fuga saepe voluptatem culpa repellendus dolores minus obcaecati, nisi fugiat sed tenetur eos praesentium illum.',
        //   img: 'https://static.markzhengma.com/program-cover-test1.jpg'
        // },
      ]
    }
  };

  async componentDidMount() {
    const programList = await axios.get('https://api.eileen-yu.com/calendar/all');

    if(!programList && programList.data.code !== 200) {
      this.setState({
        programData: []
      })
    } else {
      this.setState({
        programData: programList.data.data
      })
    }
  }

  render() {
    return (
      <div className="flex-vc">
        <div 
          className="title title-section"
        >
          我的训练计划
        </div>

        <div className="flex-hc-vc">
          <div className="program-list flex-hc-vc">
          { this.state.programData.map((program, index) => {
            return (
              <div 
                className="program-list-single"
                key={program.cid}
              >
                <Link 
                  className="program-list-single-overlay"
                  to={ `/program/${program.cid}` } 
                />
                <img className="program-list-single-cover" src={ program.img } alt="cover"/>
                <div className="program-list-single-info flex-hc-vc">
                  <h3>
                    { program.title }{' '}
                    { index === 0 ? <Badge bsPrefix="badge-new">New</Badge> : '' }
                  </h3>
                  <span className="program-list-single-span">Release: { program.release }</span>
                  <span className="program-list-single-span">{ program.keyword }</span>
                  <div className="program-list-single-desc">
                    <p>{ program.description }</p>
                  </div>
                </div>
              </div>
            )
          })}
          </div>
        </div>

        {/* <div className = "flex-hc-vc" style={{width: '100%'}}>
          <div className="program-list">
            { this.state.programData.map(program => {
              return(
                <Link to={`/program/${program.cid}`} key={program.cid}>
                  <div className="program-list-single" key={ program.id }>
                    <div className="program-overlay">
                      <b className="program-title">
                        { program.title }{' '}
                        { program.isnew ? <Badge bsPrefix="badge-new">New</Badge> : '' }
                      </b>
                      <div className="program-info">
                        <b>Release: { program.release }</b>
                      </div>
                      <div className="program-info">
                        <b>{ program.time_pday } min x { program.day_cnt } days</b>
                      </div>
                      <div className="program-detail">
                        { program.description }
                      </div>
                    </div>
                    <img className="program-cover" src={ program.img } alt="cover"/>
                  </div>
                </Link>
              )
            })}
          </div>
        </div> */}


      </div>
    )
  }
}
