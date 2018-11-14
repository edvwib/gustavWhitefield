import React, { Component } from 'react';
import { Container, Btn, Wrapper } from './style';

import NotFound from '../notFound';
import Slider from './slider';

class Article extends Component {

  state={
    article: this.props.content.getNewsById(this.props.match.params.id)
  }

  goBack = () => {
    this.props.history.push(this.props.eng ? '/news' : '/nyheter');
  }

  render() {
    return (
      this.state.article ?
      <Container>
        <Wrapper>
          <Slider images={this.state.article.fields.news.images}/>
          <h1 dangerouslySetInnerHTML={{
            __html: this.props.eng ?
            this.state.article.fields.news.titleENG :
            this.state.article.fields.news.titleSV
          }}/>
          <p dangerouslySetInnerHTML={{
            __html: this.props.eng ?
            this.state.article.fields.news.contentENG :
            this.state.article.fields.news.contentSV
          }}/>
          <Btn
            onClick={this.goBack}>
            {this.props.eng ? 'See all news' : 'Se alla nyheter'}
          </Btn>
        </Wrapper>
      </Container>
      :
      <NotFound/>
    );
  }
}

export default Article;
