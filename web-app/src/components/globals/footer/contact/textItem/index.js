import React from 'react';
import { Container } from './style';

const TextItem = (props) => {

  return(
    <Container>
      <small>{props.name}</small>
      <small>{props.phone}</small>
    </Container>
  )
}

export default TextItem;
