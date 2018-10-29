import React, { Component } from 'react';
import { Container } from './style';

import Text from './text';
import Companies from './companies';

class WeThank extends Component{

  render() {
    return (
      <Container>
        <Text
          page={this.props.page}
          english={this.props.eng}
        />
        <Companies
          companies={this.props.page}
        />
      </Container>
    );
  }

}
    export default WeThank;
