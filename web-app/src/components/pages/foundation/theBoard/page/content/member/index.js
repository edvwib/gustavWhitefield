import React from 'react';

import { Container, Text } from './style';

const Content = (props) => {

  return (
    <Container>
      <img src={props.image ? props.image.sizes.medium : '/resources/icons/placeholder.jpg'}/>
      <Text>
        <h2>{props.name}</h2>
        <small>{props.title}</small>
        <p>{props.about}</p>
      </Text>
      {console.log(props)}
    </Container>
  );
}

export default Content;
