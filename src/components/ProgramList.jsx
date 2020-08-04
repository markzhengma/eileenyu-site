import React, { Component } from 'react';
import { Badge } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default class ProgramList extends Component {
  constructor() {
    super();

    this.state = {
      programData: [
        {
          id: '1',
          name: 'Intense Core',
          release: '2020-07-01',
          isnew: true,
          info: '10-40 min, 2-4 exercises per day',
          detail: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae minima necessitatibus molestiae labore, eaque alias, fuga saepe voluptatem culpa repellendus dolores minus obcaecati, nisi fugiat sed tenetur eos praesentium illum.',
          img: 'https://static.markzhengma.com/program-cover-test1.jpg'
        },
        // {
        //   id: '2',
        //   name: 'Slim Thigh',
        //   release: '2020-06-15',
        //   isnew: true,
        //   info: '10-45 min, 2-5 exercises per day',
        //   detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nobis error quisquam quibusdam aliquid et quia cum, molestiae facere rem, nihil qui optio iusto dolore incidunt, officia laboriosam accusamus? Quae.',
        //   img: 'https://static.markzhengma.com/program-cover-test2.jpg'
        // },
        // {
        //   id: '3',
        //   name: 'Flat Tummy',
        //   release: '2020-06-01',
        //   isnew: false,
        //   info: '15-50 min, 1-4 exercises per day',
        //   detail: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur fugit nesciunt esse laboriosam odio aut! Inventore, eos, aspernatur corrupti nemo incidunt recusandae illum minus perspiciatis molestias ducimus neque minima iure.',
        //   img: 'https://static.markzhengma.com/program-cover-test3.jpg'
        // },
        // {
        //   id: '4',
        //   name: 'Intense Core',
        //   release: '2020-07-01',
        //   isnew: false,
        //   info: '10-40 min, 2-4 exercises per day',
        //   detail: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae minima necessitatibus molestiae labore, eaque alias, fuga saepe voluptatem culpa repellendus dolores minus obcaecati, nisi fugiat sed tenetur eos praesentium illum.',
        //   img: 'https://static.markzhengma.com/program-cover-test1.jpg'
        // },
        // {
        //   id: '5',
        //   name: 'Slim Thigh',
        //   release: '2020-06-15',
        //   isnew: false,
        //   info: '10-45 min, 2-5 exercises per day',
        //   detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nobis error quisquam quibusdam aliquid et quia cum, molestiae facere rem, nihil qui optio iusto dolore incidunt, officia laboriosam accusamus? Quae.',
        //   img: 'https://static.markzhengma.com/program-cover-test2.jpg'
        // },
        // {
        //   id: '6',
        //   name: 'Flat Tummy',
        //   release: '2020-06-01',
        //   isnew: false,
        //   info: '15-50 min, 1-4 exercises per day',
        //   detail: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur fugit nesciunt esse laboriosam odio aut! Inventore, eos, aspernatur corrupti nemo incidunt recusandae illum minus perspiciatis molestias ducimus neque minima iure.',
        //   img: 'https://static.markzhengma.com/program-cover-test3.jpg'
        // },
      ]
    }
  }
  render() {
    return (
      <div className="flex-hc-vc">
        <div className="program-list">
          { this.state.programData.map(program => {
            return(
              <Link to={`/program/${program.id}`}>
                <div className="program-single" key={ program.id }>
                  <div className="program-overlay">
                    <b className="program-title">
                      { program.name }{' '}
                      { program.isnew ? <Badge bsPrefix="badge-new">New</Badge> : '' }
                    </b>
                    <div className="program-info">
                      <b>Release: { program.release }</b>
                    </div>
                    <div className="program-info">
                      <b>{ program.info }</b>
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
