import React, { Component } from 'react';
import { Container } from './style';

class FollowUs extends Component{

  render() {
    return (
      <Container>
        <a
          href="https://www.facebook.com/gustavwhitefieldmemorialfund"
          target="_blank"
          rel="noopener noreferrer">
          <img src="/resources/icons/facebook.svg" alt='Facebook'/>
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer">
          <img src="/resources/icons/instagram.svg" alt='Instagram'/>
        </a>
      </Container>
    );
  }
}

export default FollowUs;
