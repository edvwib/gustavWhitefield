import React, { Component } from 'react';
import lion from 'resources/icons/lion.svg';
import { Container, Text } from './style';

class Content extends Component {



  render(){
    return (
    <Container>
      <img
        src={this.props.image ? this.props.image.sizes.medium : lion}
        alt={this.props.image.alt || 'Board member' }
      />
      <Text>
        <h2>{this.props.name}</h2>
        <small>{this.props.title}</small>
        <p>{this.props.about}</p>
      </Text>
    </Container>
  );
}
}



  export default Content;
