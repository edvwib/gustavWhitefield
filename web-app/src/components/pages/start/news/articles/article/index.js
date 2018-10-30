import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { Container, Wrapper, Image, Text } from './style';

class Article extends Component {

  getImage = () => {
    const images = this.props.content.images;
    let img;

    if(!images) return '/resources/icons/placeholder.jpg';

    for (var i = 0; i < images.length; i++) {
      if (!Object.values(images[i])[0]) {
        if (i === images.length - 1) {
          img = '/resources/icons/placeholder.jpg';
        }
      }
      else{
        img = Object.values(images[i])[0];
        break;
      }
    }
    return typeof img === 'string' ? img : img.sizes.medium
  }

  render() {
    return (
      <Container>
        <Wrapper first={this.props.first}>
          <NavLink to={this.props.eng ? '/article' : '/artikel'}>
          <Image src={this.getImage()}/>
        </NavLink>
        <NavLink to={this.props.eng ? '/article' : '/artikel'}>
        <Text first={this.props.first}>
          <h3>{this.props.content.title}</h3>
          <p>{this.props.content.intro}</p>
          <small>{this.props.eng ? 'Read more' : 'Läs mer'}</small>
        </Text>
      </NavLink>
    </Wrapper>
  </Container>
);
}
}

export default Article;
