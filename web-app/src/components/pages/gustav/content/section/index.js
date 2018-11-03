import React from 'react';

import { Container, Image } from './style';

const Section = (props) => {

  return (
    <Container>
      <Image src={props.img ? props.img.sizes.large : '/resources/icons/placeholder.jpg'}/>
      <span dangerouslySetInnerHTML={{__html: props.content}}/>
      { console.log(props.content)}
    </Container>
  );
}

export default Section;
