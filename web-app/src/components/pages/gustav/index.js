import React, { Component } from 'react';
import { Glob } from '../../globals/context';
import { Container } from './style';

import Text from './text';

class Gustav extends Component {

  render() {

    return (
      <Glob.Consumer>
        {
          (context) => (
            <Container>
              {
                context.state.pages &&
                  <Text
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
