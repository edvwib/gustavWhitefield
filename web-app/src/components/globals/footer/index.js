import React, { Component } from 'react';
import { Container } from './style';

import FollowUs from './followUs';
import WeThank from './weThank';
import Contact from './contact';

class Footer extends Component {
  render() {
    const footer = this.props.content.pages.footer;
    return (
      <Container>
        <FollowUs eng={this.props.content.eng} page={footer.social.socialMedia} />
        <WeThank eng={this.props.content.eng} page={footer.weThank} />
        <Contact eng={this.props.content.eng} page={footer} />
      </Container>
    );
  }
}

export default Footer;
