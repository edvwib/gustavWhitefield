import React from 'react';
import { Container } from './style';
import Head from 'components/globals/head';
import Section from './section';

const Gustav = (props) => {
  const { eng, content: { part1, part2, part3 } } = props;
  const title = eng ? 'About Gustav' : 'Om Gustav';

  return (
    <Container>
      <Head title={title} />
      <h1>{title}</h1>
      <Section
        content={eng ? part1.contentENG : part1.contentSV}
        img={part1.image}
      />
      <Section
        content={eng ? part2.contentENG : part2.contentSV}
        img={part2.image}
      />
      <Section
        content={eng ? part3.contentENG : part3.contentSV}
        img={part3.image}
      />
    </Container>
  );

}

export default Gustav;
