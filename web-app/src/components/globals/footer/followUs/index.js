import React, { Component } from 'react';
import { Container, LinkWrap } from './style';

class FollowUs extends Component{

  render() {
    return (
      <Container>
        <p>Följ oss</p>
        <LinkWrap>
          <img src="resources/icons/facebook.svg" alt='Facebook'/>
          <img src="resources/icons/instagram.svg" alt='Instagram'/>
        </LinkWrap>
      </Container>
    );
  }
}

export default FollowUs;
