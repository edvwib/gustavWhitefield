import React, { Component } from 'react';
import { Container, Image } from './style';

import LangSettings from './langSettings';
import iconSwe from 'resources/icons/bigIcon.png';
import iconEng from 'resources/icons/bigIconEng.png';

class Header extends Component{

  render() {
    const eng = this.props.content.state.eng;
    return (
      <Container active={eng}>
        <LangSettings showInMob={false}/>
        <Image
          src={eng ?
            iconEng
            :
            iconSwe
          }
          alt={eng ? 'logo' : 'logga'}
        />
        </Container>
      );
    }
  }

  export default Header;
