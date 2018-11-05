import React, { Component } from 'react';
import { Glob } from '../../../../components/globals/context';
import { Container } from './style';

import Page from './page';

class WeSupport extends Component {

  render() {
    return (
      <Glob.Consumer>
        {
          (context) => (
            <React.Fragment>
              <Page eng={context.state.eng} page={context.state.pages.weSupport}/>
              {console.log(context.state.pages.weSupport)}
            </React.Fragment>
          )
        }
      </Glob.Consumer>
    );
  }
}

export default WeSupport;
