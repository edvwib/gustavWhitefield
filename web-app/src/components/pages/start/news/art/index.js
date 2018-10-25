import React, { Component } from 'react';
import { Container } from './style';


class Art extends Component {

  render() {
    return (
      <Container first={this.props.first}>
        {
          this.props.eng &&
          <h3>hejsan</h3>
        }
      </Container>
    );
  }
}

export default Art;
