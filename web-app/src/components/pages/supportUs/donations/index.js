import React, { Component } from 'react';
import { Container } from './style';

import Donation from './donation';

class Donations extends Component {

  render() {
    return (
      <Container>
        {
          this.props.content.map((method, index) =>
          <Donation
            key={index}
            eng={this.props.eng}
            content={method}
          />
        )
      }
      </Container>
    );
  }
}

export default Donations;
