import React, { Component } from 'react';
import { Container, Image } from './style';

import LangSettings from './langSettings';
import iconSwe from 'resources/icons/bigIcon.png';
import iconEng from 'resources/icons/bigIconEng.png';

class Header extends Component{

  render() {
    return (
      <Container active={this.props.content.state.eng}>
        <LangSettings showInMob={false}/>
        <Image
          src={this.props.content.state.eng ?
            iconEng
            :
            iconSwe
          }/>
        </Container>
      );
    }
  }

  export default Header;
