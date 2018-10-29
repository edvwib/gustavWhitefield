import React, { Component } from 'react';
import { Glob } from '../context';
import { Container } from './style';

import FollowUs from './followUs';
import ContactBtn from './contactBtn';
import WeThank from './weThank';


class Footer extends Component{

  render() {
    return (
      <Glob.Consumer>
        {
          (context) =>
          <Container>
            <FollowUs/>
            <ContactBtn eng={context.state.eng}/>
            <WeThank eng={context.state.eng} page={context.state.pages.weThank}/>
          </Container>
        }
      </Glob.Consumer>
    );
  }
}

export default Footer;
