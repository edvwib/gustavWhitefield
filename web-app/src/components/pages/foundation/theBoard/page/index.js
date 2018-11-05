import React from 'react';
import { Container } from './style';

import Content from './content';

const Page = (props) => {

  return (
    <React.Fragment>
      {
        props.page &&
        <Content
          content={props.page}
          eng={props.eng}
        />
      }
    </React.Fragment>
  );
}

export default Page;
