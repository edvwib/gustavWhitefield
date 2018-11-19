import React, { Component } from 'react';
import { Container, Image } from './style';
import { NavLink } from 'react-router-dom';
import LangSettings from './langSettings';
import iconSwe from 'resources/icons/bigIcon.png';
import iconEng from 'resources/icons/bigIconEng.png';

class Header extends Component{

  render() {
    const eng = this.props.content.state.eng;
    return (
      <Container active={eng}>
        <LangSettings showInMob={false}/>
        <NavLink to='/'>
        <Image
          src={eng ? iconEng : iconSwe}
          alt={eng ? 'logo' : 'logga'}
        />
      </NavLink>
    </Container>
  );
}
}

export default Header;
