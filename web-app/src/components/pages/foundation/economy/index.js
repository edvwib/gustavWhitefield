import React, { Component } from 'react';
import { Glob } from '../../../globals/context';
import { Container } from './style';

import Content from './content';


class Economy extends Component {

  render() {
    return (
      <Glob.Consumer>
        {
          (context) => (
            <Container>
              <Content/>
            </Container>
          )
        }
      </Glob.Consumer>
    );
  }
}

export default Economy;
