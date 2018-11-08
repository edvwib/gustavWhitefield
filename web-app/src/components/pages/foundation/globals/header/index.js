import React, { Component } from 'react';
import { Container } from './style';

class Header extends Component {


  render() {
    return (
      <Container src={this.props.src}>
      <h1>{this.props.title}</h1>
    </Container>
  );
}
}

export default Header;
