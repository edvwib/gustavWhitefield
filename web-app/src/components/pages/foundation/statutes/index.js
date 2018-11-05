import React from 'react';
import { Glob } from '../../../../components/globals/context';

import Page from './page';

const statutes = (props) => {

  return (
    <Glob.Consumer>
      {
        (context) => (
          <React.Fragment>
            <Page eng={context.state.eng} page={context.state.pages.bylaws} />
          </React.Fragment>
        )
      }
    </Glob.Consumer>
  );

}

export default statutes;
