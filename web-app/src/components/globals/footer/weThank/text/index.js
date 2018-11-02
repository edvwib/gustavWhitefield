import React from 'react';
import { Container } from './style';

const Text = (props) => {

  return(
    <Container>
      {
        props.page &&
        <React.Fragment>
          <h3>{props.english ? 'Acknowledgement' : 'Vi tackar'}</h3>
          <p>{props.english ? props.page.contentENG : props.page.contentSV}</p>
        </React.Fragment>
      }
    </Container>
  )
}

export default Text;
