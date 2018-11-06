import React, { Component } from 'react';
import { Container } from './style';

import Page from './page';

class TheBoard extends Component {

  render() {
    return (
      <Page eng={this.props.content.eng} page={this.props.content.pages.board}/>

    );
  }
}

export default TheBoard;
