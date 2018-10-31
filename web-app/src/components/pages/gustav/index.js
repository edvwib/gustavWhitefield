import React, { Component } from 'react';
import { Glob } from '../../globals/context';
import { Container } from './style';

import Content from './content';

class Gustav extends Component {

  render() {

    return (
      <Glob.Consumer>
        {
          (context) => (
            <Container>
              {
                context.state.pages &&
                  <Content
                    eng={context.state.eng}
                    page={context.state.pages.aboutGustav}/>
              }

            </Container>
          )
        }
      </Glob.Consumer>
    );
  }
}

export default Gustav;
