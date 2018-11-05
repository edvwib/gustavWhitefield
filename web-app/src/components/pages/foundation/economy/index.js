import React, { Component } from 'react';
import { Glob } from '../../../globals/context';

import Page from './page';

class Economy extends Component {

  render() {
    return (
      <Glob.Consumer>
        {
          (context) => (
            <Page eng={context.state.eng} page={context.state.pages.economy} />
          )
        }
      </Glob.Consumer>
    );
  }
}

export default Economy;
