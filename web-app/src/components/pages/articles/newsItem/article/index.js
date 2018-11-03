import React, { Component } from 'react';
import { Container } from './style';


class Article extends Component {

  state={
    image: 'resources/icons/placeholder.jpg'
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
        <h2>{this.props.title}</h2>
        <p>{this.props.intro}</p>
        <span>{this.props.eng ? 'Read more' : 'Läs mer'}</span>
      </Container>

    );
  }
}

export default Article;
