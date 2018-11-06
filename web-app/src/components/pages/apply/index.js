import React, { Component } from 'react';
import { Container } from './style';
import Form from './form';

class Apply extends Component {

  render() {
    return (
      <Container>
        <h1>{this.props.content.eng ? 'Apply' : 'Sök bidrag'}</h1>
        <Form eng={this.props.content.eng}/>
      </Container>
    );
  }
}

export default Apply;
