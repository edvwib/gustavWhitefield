import React from 'react';
import { Container } from './style';

const Text = (props) => {

  return(
    <Container>
      {
        props.page &&
        <React.Fragment>
          <h1>{props.english ? 'Acknowledgement' : 'Vi tackar'}</h1>
          <p>{props.english ? props.page.contentENG : props.page.contentSV}</p>
        </React.Fragment>
      }
    </Container>
  )
}

export default Text;
