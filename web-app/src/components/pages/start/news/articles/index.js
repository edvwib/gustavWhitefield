import React from 'react';
import { Container } from './style';

import Article from './article';

const Articles = (props) => {
  const { eng, first } = props;

  const content = {
    eng: {
      id: props.news.post.ID,
      date: props.news.post.post_date,
      images: props.news.fields.news.images,
      intro: props.news.fields.news.introENG,
      title: props.news.fields.news.titleENG,
      content: props.news.fields.news.contentENG
    },
    sv: {
      id: props.news.post.ID,
      date: props.news.post.post_date,
      images: props.news.fields.news.images,
      intro: props.news.fields.news.introSV,
      title: props.news.fields.news.titleSV,
      content: props.news.fields.news.contentSV
    }
  }

  return (
    <Container>
      <Article
        first={first}
        content={eng ? content.eng : content.sv}
        eng={eng}
      />
    </Container>
  );
}

export default Articles;
