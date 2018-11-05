import React from 'react';
import { Container, Image } from './style';

import Member from './member';

const Content = (props) => {

  return (
    <Container>
      {
        props.eng ?
        <React.Fragment>
          <Image src={props.content.image ? props.content.image.sizes.large : '/resources/icons/placeholder.jpg'}>
          <h1>The Board</h1>
        </Image>
      </React.Fragment>
      :
      <React.Fragment>
        <Image src={props.content.image ? props.content.image.sizes.large : '/resources/icons/placeholder.jpg'}>
        <h1>Styrelsen</h1>
      </Image>
      {
        props.content.members.map((member, index) =>
        <Member key={index} name={member.name} title={member.titleSV} image={member.image} about={member.aboutSV} />
      )
    }

  </React.Fragment>
}

</Container>
);
}

export default Content;
