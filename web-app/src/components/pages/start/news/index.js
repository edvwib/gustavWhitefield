import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { Container, ArticleButton } from './style';

import Articles from './articles';

class News extends Component {

  render() {
    const { eng, news } = this.props;
    return (
      <Container>
        {
          news.map((item, index) =>
            index < 3 &&
            <Articles
              eng={eng}
              first={index === 0}
              key={index}
              news={item}
            />)
        }
        <ArticleButton>
          <NavLink to={eng ? '/news' : '/nyheter'}>
            {eng ? 'All News' : 'Alla Nyheter'}
          </NavLink>
        </ArticleButton>
      </Container>
    );
  }
}

export default News;
