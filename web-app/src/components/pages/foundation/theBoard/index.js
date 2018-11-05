import React, { Component } from 'react';
import { Glob } from '../../../../components/globals/context';
import { Container } from './style';

import Page from './page';

class TheBoard extends Component {

  render() {
    return (
      <Glob.Consumer>
        {
          (context) => (
            <React.Fragment>
              {/* {console.log(context.state.pages.board)} */}
              <Page eng={context.state.eng} page={context.state.pages.board}/>
            </React.Fragment>
          )
        }
      </Glob.Consumer>
    );
  }
}

export default TheBoard;
