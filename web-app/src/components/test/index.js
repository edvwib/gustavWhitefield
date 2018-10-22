import React, { Component } from 'react';
import { Glob } from '../globals/context';

class Hejsan extends Component {

  render() {
    return (
      <Glob.Consumer>
        {
          (context) => (
            <div>
              {context.state.test}
            </div>
          )
        }
      </Glob.Consumer>
    );
  }
}

export default Hejsan;
