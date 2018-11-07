import React from 'react';
import { Container, Image } from './style';

const Purpose = (props) => {

  return (
    <Container>
      <Image src={props.content.image ? props.content.image.sizes.large : '/resources/icons/placeholder.jpg'}>
      <h1>{props.eng ? 'Purpose' : 'Syfte'}</h1>
    </Image>
    <div dangerouslySetInnerHTML={{__html: props.eng ? props.content.contentENG : props.content.contentSV}}/>
  </Container>
);

}

export default Purpose;
