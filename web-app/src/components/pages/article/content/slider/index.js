import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Container } from './style';

class Slider extends Component {

  state={
    images: []
  }

  componentDidMount(){
    const images = this.props.images ?
    this.props.images.filter((image) => image.image !== false) : [];
    window.scrollTo(0, 0);
    this.setState({
      images: images
    });
  }

  render() {
    return (
      <Container numImg={this.state.images.length}>
        <Carousel
          showStatus={false}
          showThumbs={false}
          swipeable={true}
          useKeyboardArrows={true}
          autoPlay={true}
          interval={6000}
          showArrows={false}
          >
            {
              this.state.images.map((item, index) =>
              <img key={index} src={item.image.sizes.large} alt=""/>
            )
          }

        </Carousel>
      </Container>
    );
  }
}

export default Slider;
