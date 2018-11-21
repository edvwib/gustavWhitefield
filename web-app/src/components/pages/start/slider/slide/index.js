import React, { Component } from 'react';
import { Container, Image } from './style';


class Slide extends Component {

  render() {
    const { eng, slide } = this.props;
    return (
      <Container img={slide.image ? true : false}>
        <Image img={slide.image ? slide.image.sizes.large : false}/>
        <p>{eng ? slide.contentENG : slide.contentSV}</p>
      </Container>
    );
  }
}

export default Slide;
