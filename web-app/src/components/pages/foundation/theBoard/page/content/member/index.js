import React from 'react';

import { Container, Image } from './style';

const Content = (props) => {

  return (
    <Container>
      <Image src={props.image ? props.image.sizes.medium : '/resources/icons/placeholder.jpg'} alt="Board member"/>
      {console.log(props)}
    </Container>
  );
}

export default Content;
