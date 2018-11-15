import React, { Component } from 'react';
import { Container } from './style';
import instagram from '../../../../resources/icons/instagram.svg';
import facebook from '../../../../resources/icons/facebook.svg'

class FollowUs extends Component{

  render() {
    return (
      <Container>
        <a
          href="https://www.facebook.com/gustavwhitefieldmemorialfund"
          target="_blank"
          rel="noopener noreferrer">
          <img src={facebook} alt='Facebook'/>
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer">
          <img src={instagram} alt='Instagram'/>
        </a>
      </Container>
    );
  }
}

export default FollowUs;
