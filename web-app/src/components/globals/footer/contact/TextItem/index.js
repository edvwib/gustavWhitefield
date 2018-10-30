import React from 'react';
import { Container } from './style';

const TextItem = (props) => {

  return(
    <Container>
      <small>{props.text1}</small>
      <small>{props.text2}</small>
    </Container>
  )
}

export default TextItem;
