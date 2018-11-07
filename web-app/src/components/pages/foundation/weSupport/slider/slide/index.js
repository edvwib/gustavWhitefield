import React, { Component } from 'react';
import { Container, Image } from './style';


class Slide extends Component {

  render() {
    return (
      <Container img={this.props.slide.image ? true : false}>
        <Image img={this.props.slide.image ? this.props.slide.image.sizes.large : false}/>
        {
          this.props.eng ?
          <p>{this.props.slide.contentENG}</p> :
          <p>{this.props.slide.contentSV}</p>
        }
      </Container>
    );
  }
}

export default Slide;
