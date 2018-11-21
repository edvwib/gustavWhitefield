import React from 'react';
import { Container, Image } from './style';
import placeholder from 'resources/icons/placeholder.jpg';

const Section = (props) => {
  const { img, content } = props;

  return (
    <Container>
      <Image
        src={img ? img.sizes.large : placeholder}
        alt={img.alt ? img.alt : img.title}
      />
      <span dangerouslySetInnerHTML={{__html: content}}/>
    </Container>
  );
}

export default Section;
