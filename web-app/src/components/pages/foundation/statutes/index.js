import React from 'react';

import Page from './page';

const statutes = (props) => {

  return (
    <Page eng={props.content.eng} page={props.content.pages.bylaws} />
  );
}

export default statutes;
