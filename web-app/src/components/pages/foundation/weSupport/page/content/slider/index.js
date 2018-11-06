import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Container } from './style';

import Slide from './slide';

class Slider extends Component {

  render() {
    return (
      <Container>
        <Carousel
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          swipeable={true}
          useKeyboardArrows={true}
          autoPlay={true}
          interval={8000}
          >
            {
              this.props.page.item.map((slide, index) =>
                <Slide eng={this.props.eng} key={index} slide={slide}/>
            )}
          </Carousel>
        </Container>
      );
    }
  }

  export default Slider;
