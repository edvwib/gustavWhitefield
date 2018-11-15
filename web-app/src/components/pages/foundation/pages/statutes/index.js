import React from 'react';
import { Container, Body } from './style';

import Header from '../../globals/header';
import placeholder from 'resources/icons/placeholder.jpg';

const statutes = (props) => {

  return (
    <Container>
      <Header
        src={props.content.image ? props.content.image.sizes.large : placeholder}
        title={props.eng ? 'Statutes' : 'Stadgar'}
      />
      <Body dangerouslySetInnerHTML={{ __html: props.eng ? props.content.contentENG : props.content.contentSV }} />
    </Container>
  );
}

export default statutes;
