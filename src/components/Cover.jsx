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
                <Col className="title title-overlay text-l">
                  Free workout programs. Stay fresh!
                </Col>
              </Row>
              <Row>
                <Col className = "flex-hc-vc">
                  <Button 
                    variant="danger"
                    onClick={this.handleSubscribe}
                  >
                    Get Started
                  </Button>
                </Col>
                <Col/>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container className="flex-vc" id="cover-2">
              <Row>
                <Col className="title title-overlay text-r">
                  You're welcome follow my workout calendars.
                </Col>
              </Row>
              <Row>
                <Col/>
                <Col className = "flex-hc-vc">
                  <Button 
                    variant="danger"
                    onClick = {() => this.props.scrollToElement('program-spacer')}
                  >
                    Go
                  </Button>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container className="flex-vc" id="cover-3">
              <Row>
                <Col className="title title-overlay text-c">
                  Healthy/Cheat-meal recipes for everyone!
                </Col>
              </Row>
              <Row>
                <Col/>
                <Col>
                  <Button 
                    variant="danger"
                    onClick={this.handleRecipe}
                  >
                    More
                  </Button>
                </Col>
                <Col/>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
        <Button 
          id = "scroll-btn"
          onClick = {() => this.props.scrollToElement('program-spacer')}
        >
          Scroll
        </Button>
      </div>
    )
  }
}
