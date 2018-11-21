import React, { Component } from 'react';
import { Container } from './style';
import Donation from './donation';

class Donations extends Component {

  render() {
    const { eng, content } = this.props;
    return (
      <Container>
        {
          content && content.map((method, index) =>
            <Donation
              key={index}
              eng={eng}
              content={method}
            />
          )
        }
      </Container>
    );
  }
}

export default Donations;
