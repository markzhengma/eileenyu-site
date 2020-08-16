import React, { Component } from 'react';
import { Badge } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default class ProgramList extends Component {
  constructor() {
    super();

    this.state = {
      programData: [
        {
          id: 'calendar_20200814',
          title: '一周在家训练计划',
          release: '2020-08-14',
          isnew: true,
          time_pday: '30-45',
          day_cnt: '7',
          detail: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae minima necessitatibus molestiae labore, eaque alias, fuga saepe voluptatem culpa repellendus dolores minus obcaecati, nisi fugiat sed tenetur eos praesentium illum.',
          img: 'https://static.markzhengma.com/program-cover-test1.jpg'
        },
      ]
    }
  }
  render() {
    return (
      <div className="flex-hc-vc">
        <div 
          className="title title-section"
          style={{paddingLeft: '16px'}}
        >
          我的训练计划
        </div>
        <div className="program-list">
          { this.state.programData.map(program => {
            return(
              <Link to={`/program/${program.id}`} key={program.id}>
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
                      { program.detail }
                    </div>
                  </div>
                  <img className="program-cover" src={ program.img } alt="cover"/>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    )
  }
}
