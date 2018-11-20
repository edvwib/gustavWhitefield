import React, { Component } from 'react';
import { Container } from './style';

import placeholder from 'resources/icons/placeholder.jpg';


class Header extends Component {

  render() {
    const { eng, page } = this.props;
    return (
      <Container
        img={page.image ? page.image.sizes.large : placeholder}
      >
        <h1>{
          eng ? page.textENG : page.textSV
        }</h1>
      </Container>
    );
  }
}

export default Header;
