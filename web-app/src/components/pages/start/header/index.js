import React, { Component } from 'react';
import { Container, ImgCont } from './style';


class Header extends Component {

  render() {
    return (
      <Container>
        {
          this.props.page &&
          <ImgCont
            img={this.props.page.image ? this.props.page.image.sizes.large :
              '/resources/icons/placeholder.jpg'
            }>
            <h1>{this.props.eng ? this.props.page.textENG : this.props.page.textSV}</h1>
          </ImgCont>
        }
      </Container>
    );
  }
}

export default Header;
