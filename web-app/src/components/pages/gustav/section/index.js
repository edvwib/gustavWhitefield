import React from 'react';

import { Container, Image } from './style';
import placeholder from '../../../../resources/icons/placeholder.jpg';

const Section = (props) => {

  return (
    <Container>
      <Image src={props.img ? props.img.sizes.large : placeholder}/>
      <span dangerouslySetInnerHTML={{__html: props.content}}/>
    </Container>
  );
}

export default Section;