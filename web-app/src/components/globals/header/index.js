import React, { Component } from 'react';
import { Container, Image } from './style';

import LangSettings from './langSettings';

class Header extends Component{

  render() {
    return (
      <Container active={this.props.content.state.eng}>
        <LangSettings showInMob={false}/>
        <Image
          src={this.props.content.state.eng ?
            '/resources/icons/bigIconEng.png' :
            '/resources/icons/bigIcon.png'
          }/>
        </Container>
      );
    }
  }

  export default Header;
