import React from 'react';

import { Container, Image } from './style';


const Content = (props) => {

  return (
    <Container>
      {
        props.eng ?
        <React.Fragment>
          <Image src={props.content.image ? props.content.image.sizes.large : '/resources/icons/placeholder.jpg'}>
            <h1>{props.content.titleENG}</h1>
          </Image>
          <div dangerouslySetInnerHTML={{__html: props.content.contentENG}}/>
        </React.Fragment>
        :
        <React.Fragment>
          <Image src={props.content.image ? props.content.image.sizes.large : '/resources/icons/placeholder.jpg'}>
            <h1>{props.content.titleSV}</h1>
          </Image>
          <div dangerouslySetInnerHTML={{__html: props.content.contentSV}}/>
        </React.Fragment>
      }

    </Container>
  );
}

export default Content;
