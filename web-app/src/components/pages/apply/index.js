import React, { Component } from 'react';
import { Glob } from '../../globals/context';
import { Container } from './style';
import Form from './form';

class Apply extends Component {

  render() {
    return (
      <Glob.Consumer>
        {
          (context) =>
            <Container>
              <h1>{context.state.eng ? 'Apply' : 'Sök bidrag'}</h1>
              <Form eng={context.state.eng}/>
            </Container>
        }
      </Glob.Consumer>
    );
  }
}

export default Apply;
