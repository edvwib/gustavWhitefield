import React, { Component } from 'react';
import { Container } from './style';

import placeholder from '../../../../resources/icons/placeholder.jpg';


class Header extends Component {

  render() {
    return (
      <Container
        img={
          this.props.page.image ?
          this.props.page.image.sizes.large :
          placeholder
        }>
        <h1>{this.props.eng ? this.props.page.textENG : this.props.page.textSV}</h1>
      </Container>
    );
  }
}

export default Header;
