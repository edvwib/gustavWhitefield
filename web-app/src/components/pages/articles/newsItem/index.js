import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { Container } from './style';

import Article from './article';

class NewsItem extends Component {

  render() {
    return (
      <Container>
        <NavLink to={this.props.eng ?
          `/article/${this.props.news.post.ID}` :
          `/artikel/${this.props.news.post.ID}`
        }>
        {
          this.props.eng ?
          <Article
            eng={this.props.eng}
            images={this.props.news.fields.news.images}
            title={this.props.news.fields.news.titleENG}
            intro={this.props.news.fields.news.introENG}
            content={this.props.news.fields.news.contentENG}
          />
          :
          <Article
            eng={this.props.eng}
            images={this.props.news.fields.news.images}
            title={this.props.news.fields.news.titleSV}
            intro={this.props.news.fields.news.introSV}
            content={this.props.news.fields.news.contentSV}
          />
        }
      </NavLink>
    </Container>
  );
}
}

export default NewsItem;
