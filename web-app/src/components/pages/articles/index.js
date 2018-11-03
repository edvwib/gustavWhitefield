import React, { Component } from 'react';
import { Glob } from '../../globals/context';
import { Container } from './style';

import NewsItem from './newsItem';


class Articles extends Component {

  render() {
    return (
      <Glob.Consumer>
        {
          (context) => (
            <Container>
              <h1>{context.state.eng ? 'News' : 'Nyheter'}</h1>
              {
                context.state.news &&
                context.state.news.map((article)=>
                <NewsItem
                  key={article.post.ID}
                  news={article}
                  eng={context.state.eng}
                />)
              }
            </Container>
          )
        }
      </Glob.Consumer>
    );
  }
}

export default Articles;
