import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Container } from './style';

import Slide from './slide';

class Slider extends Component {

  render() {
    console.log(this.props);
    return (
      <Container>
        <Carousel
          showStatus={false}
          showThumbs={false}
          swipeable={true}
          useKeyboardArrows={true}
          >
            <Slide/>
            <Slide/>
            <Slide/>
            <Slide/>
          </Carousel>
        </Container>
      );
    }
  }

  export default Slider;
