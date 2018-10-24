import React, { Component } from 'react';
import { Glob } from '../../globals/context';
import { Container } from './style';

import Header from './header';
import News from './news';

class Start extends Component {

  render() {
    return (
      <Glob.Consumer>
        {
          (context) => (
            <Container>
              <Header
                eng={context.state.eng}
                page={context.state.pages.startpage ? context.state.pages.startpage : false}
              />
              <News
                eng={context.state.eng}
                news={context.state.news}
              />
            </Container>
          )
        }
      </Glob.Consumer>
    );
  }
}

export default Start;
