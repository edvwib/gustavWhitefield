import React, { Component } from 'react';
import { Container } from './style';

import NewsItem from './newsItem';


class Articles extends Component {

  render() {
    return (
      <Container>
        <h1>{this.props.content.eng ? 'News' : 'Nyheter'}</h1>
        {
          this.props.content.news.map((article)=>
          <NewsItem
            key={article.post.ID}
            news={article}
            eng={this.props.content.eng}
          />)
        }
      </Container>
    );
  }
}

export default Articles;
