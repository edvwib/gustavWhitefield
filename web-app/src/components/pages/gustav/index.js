import React from 'react';
import { Container } from './style';
import Head from 'components/globals/head';
import Section from './section';

const Gustav = (props) => {

  return (
    <Container>
      <Head title={props.eng ? 'About Gustav' : 'Om Gustav'}/>
      {
        props.eng ?
        <React.Fragment>
          <h1>About Gustav</h1>
          <Section
            content={props.content.part1.contentENG}
            img={props.content.part1.image}
          />
          <Section
            content={props.content.part2.contentENG}
            img={props.content.part2.image}
          />
          <Section
            content={props.content.part3.contentENG}
            img={props.content.part3.image}
          />
        </React.Fragment>
        :
        <React.Fragment>
          <h1>Om Gustav</h1>
          <Section
            content={props.content.part1.contentSV}
            img={props.content.part1.image}
          />
          <Section
            content={props.content.part2.contentSV}
            img={props.content.part2.image}
          />
          <Section
            content={props.content.part3.contentSV}
            img={props.content.part3.image}
          />
        </React.Fragment>
      }
    </Container>
  );

}

export default Gustav;
