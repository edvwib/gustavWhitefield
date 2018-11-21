import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Container } from './style';

import Slide from './slide';

class Slider extends Component {

  render() {
    const { eng, page } = this.props;
    return (
      <Container>
        <Carousel
          showStatus={false}
          showThumbs={false}
          swipeable={true}
          useKeyboardArrows={true}
          autoPlay={true}
          interval={8000}
          >
            {
              page.slide.map((slide, index) =>
                <Slide
                  key={index}
                  eng={eng}
                  slide={slide}
                />
            )}
          </Carousel>
        </Container>
      );
    }
  }

  export default Slider;
