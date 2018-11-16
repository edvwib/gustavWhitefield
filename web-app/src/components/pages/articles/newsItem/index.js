import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { Container } from './style';

import Article from './article';

class NewsItem extends Component {

  render() {
    const post = this.props.news.post;
    const news = this.props.news.fields.news;
    return (
      <Container>
        <NavLink to={this.props.eng ?
          `/article/${post.ID}` :
          `/artikel/${post.ID}`
        }>
        {
          (this.props.eng && news.titleENG) ?
            <Article
              eng={this.props.eng}
              images={news.images}
              title={news.titleENG}
              intro={news.introENG}
              content={news.contentENG}
            />
          :
            <Article
              eng={this.props.eng}
              images={news.images}
              title={news.titleSV}
              intro={news.introSV}
              content={news.contentSV}
            />
        }
      </NavLink>
    </Container>
  );
}
}

export default NewsItem;
