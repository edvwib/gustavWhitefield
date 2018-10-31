import React from 'react';

import { Container, Image } from './style';

const Section = (props) => {

  return (
    <Container>
      <Image src={props.img.sizes.large}/>
      <span dangerouslySetInnerHTML={{__html: props.content}}/>
    </Container>
  );
}

export default Section;
