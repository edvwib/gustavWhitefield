import React from 'react';
import { Container, Image } from './style';

import Slider from './slider';

const Content = (props) => {

  return (
    <Container>
      {
        props.eng ?
        <React.Fragment>
          <Image src={props.content.image ? props.content.image.sizes.large : '/resources/icons/placeholder.jpg'}>
          <h1>We Support</h1>
        </Image>
        <div dangerouslySetInnerHTML={{__html: props.content.contentENG}}/>
        <Slider
          eng={props.eng}
          page={props.content}
        />
        </React.Fragment>
        :
        <React.Fragment>
          <Image src={props.content.image ? props.content.image.sizes.large : '/resources/icons/placeholder.jpg'}>
          <h1>Vi Stödjer</h1>
        </Image>
        <div dangerouslySetInnerHTML={{__html: props.content.contentSV}}/>
        <Slider
          eng={props.eng}
          page={props.content}
        />

        </React.Fragment>
      }
    </Container>
  );
}

export default Content;
