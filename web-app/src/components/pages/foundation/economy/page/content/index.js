import React from 'react';
import { Container, Image } from './style';

import Files from './files';

const Content = (props) => {
  return (
    <Container>
      {
        props.eng ?
          <React.Fragment>
            <Image src={props.content.image ? props.content.image.sizes.large : '/resources/icons/placeholder.jpg'}>
              <h1>Economy</h1>
            </Image>
            <div dangerouslySetInnerHTML={{ __html: props.content.contentENG }} />
            <Files eng={true} files={props.content.files}/>
          </React.Fragment>
          :
          <React.Fragment>
            <Image src={props.content.image ? props.content.image.sizes.large : '/resources/icons/placeholder.jpg'}>
              <h1>Ekonomi</h1>
            </Image>
            <div dangerouslySetInnerHTML={{ __html: props.content.contentSV }} />
            <Files eng={false} files={props.content.files}/>
            {console.log(props.content.files)}
          </React.Fragment>
      }
    </Container>
  );
}

export default Content;
