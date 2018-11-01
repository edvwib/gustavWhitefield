import React, { Component } from 'react';
import { Container } from './style';

import Article from './article';

class Articles extends Component {

  state={
    eng: {
      id: this.props.news.post.ID,
      date: this.props.news.post.post_date,
      images: this.props.news.fields.news.images,
      intro: this.props.news.fields.news.introENG,
      title: this.props.news.fields.news.titleENG,
      content: this.props.news.fields.news.contentENG
    },
    sv:{
      id: this.props.news.post.ID,
      date: this.props.news.post.post_date,
      images: this.props.news.fields.news.images,
      intro: this.props.news.fields.news.introSV,
      title: this.props.news.fields.news.titleSV,
      content: this.props.news.fields.news.contentSV
    }
  }

  render() {
    console.log(this.state.sv.id);
    return (
      <Container>
        {
          this.props.eng ?
          <Article
            first={this.props.first}
            content={this.state.eng}
            eng={this.props.eng}
          />
          :
          <Article
            first={this.props.first}
            content={this.state.sv}
            eng={this.props.eng}
          />
        }
      </Container>
    );
  }
}

export default Articles;
