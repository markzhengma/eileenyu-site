import React, { Component } from 'react';
import { Container, Button, Row, Col, Carousel } from 'react-bootstrap';

export default class Cover extends Component {

  handleSubscribe = () => {
    window.open('https://www.youtube.com/c/EileenYu?sub_confirmation=1', '_blank');
  };

  handleInstagram = () => {
    window.open('https://www.instagram.com/eileenismart/?hl=en', '_blank');
  };

  handleRecipe = () => {
    window.open('https://www.youtube.com/watch?v=PspTdobyYLw&list=PLYyOkeHR6FuXURkBxT4N5HrvU1trCPP2Q', '_blank');
  }

  render() {
    return (
      <div id = "cover-list">
        <Carousel 
          indicators={false}
        >
          <Carousel.Item>
            <Container className="flex-vc" id="cover-1">
              <Row>
                <Col className="title title-overlay text-c">
                  我收集整理了全部的<br/>免费健身项目
                </Col>
              </Row>
              <Row>
                <Col className = "flex-hc-vc">
                  <Button 
                    variant="danger"
                    onClick={this.handleSubscribe}
                  >
                    关注我
                  </Button>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container className="flex-vc" id="cover-2">
              <Row>
                <Col className="title title-overlay text-c">
                  欢迎来看我设计的<br/>训练计划哟
                </Col>
              </Row>
              <Row>
                <Col className = "flex-hc-vc">
                  <Button 
                    variant="danger"
                    onClick = {() => this.props.scrollToElement('program-spacer')}
                  >
                    开始训练
                  </Button>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          {/* <Carousel.Item>
            <Container className="flex-vc" id="cover-3">
              <Row>
                <Col className="title title-overlay text-c">
                  这里也有很多好吃的<br/>健康餐的灵感呢
                </Col>
              </Row>
              <Row>
                <Col className = "flex-hc-vc">
                  <Button 
                    variant="danger"
                    onClick={this.handleRecipe}
                  >
                    开吃
                  </Button>
                </Col>
              </Row>
            </Container>
          </Carousel.Item> */}
        </Carousel>
        <div 
          className = "flex-hc-vc"
          id = "scroll-btn"
          onClick = {() => this.props.scrollToElement('program-spacer')}
        >
          MORE
          <div className="icon-small" id="icon-scroll"></div>
        </div>
      </div>
    )
  }
}
