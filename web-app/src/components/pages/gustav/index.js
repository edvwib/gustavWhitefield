import React from 'react';
import { Container } from './style';

import Section from './section';

const Gustav = (props) => {

  return (
    <Container>
      {
        props.content.eng ?
        <React.Fragment>
          <h1>About Gustav</h1>
          <Section
            content={props.content.pages.aboutGustav.part1.contentSV}
            img={props.content.pages.aboutGustav.part1.image}
          />
          <Section
            content={props.content.pages.aboutGustav.part2.contentSV}
            img={props.content.pages.aboutGustav.part2.image}
          />
          <Section
            content={props.content.pages.aboutGustav.part3.contentSV}
            img={props.content.pages.aboutGustav.part3.image}
          />
        </React.Fragment>
        :
        <React.Fragment>
          <h1>Om Gustav</h1>
          <Section
            content={props.content.pages.aboutGustav.part1.contentSV}
            img={props.content.pages.aboutGustav.part1.image}
          />
          <Section
            content={props.content.pages.aboutGustav.part2.contentSV}
            img={props.content.pages.aboutGustav.part2.image}
          />
          <Section
            content={props.content.pages.aboutGustav.part3.contentSV}
            img={props.content.pages.aboutGustav.part3.image}
          />
        </React.Fragment>
      }
    </Container>
  );

}

export default Gustav;
