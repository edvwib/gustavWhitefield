import React, { Component } from 'react';
import { Container } from './style';

import Page from './page';

class WeSupport extends Component {

  render() {
    return (
      <Page eng={this.props.content.eng} page={this.props.content.pages.weSupport}/>
    );
  }
}

export default WeSupport;
