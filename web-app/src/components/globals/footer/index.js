import React, { Component } from 'react';
import { Container } from './style';

import FollowUs from './followUs';
import WeThank from './weThank';
import Contact from './contact';

class Footer extends Component{

  render() {
    return (
      <Container>
        <FollowUs eng={this.props.content.eng}/>
        <WeThank eng={this.props.content.eng} page={this.props.content.pages.weThank}/>
        <Contact eng={this.props.content.eng}/>
      </Container>

    );
  }
}

export default Footer;
