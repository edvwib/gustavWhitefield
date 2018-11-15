import React, { Component } from 'react';
import { Container } from './style';
import placeholder from 'resources/icons/placeholder.jpg';

class Article extends Component {

  state={
    image: placeholder
  }

  componentDidMount(){
    let img;
    if (this.props.images) {
      img = this.props.images.filter((image) => image.image !== false);
      img.length > 0 &&
      this.setState({image: img[0].image.sizes.large});
    }
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Container>
        <img src={this.state.image} alt="icon"/>
        <h3>{this.props.title}</h3>
        <p>{this.props.intro}</p>
        <small>{this.props.eng ? 'Read more' : 'Läs mer'}</small>
      </Container>

    );
  }
}

export default Article;
