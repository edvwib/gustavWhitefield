import React, { Component } from 'react';

import Page from './page';

class Economy extends Component {

  render() {
    return (
      <Page eng={this.props.content.eng} page={this.props.content.pages.economy} />
    );
  }
}

export default Economy;
