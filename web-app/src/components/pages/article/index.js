import React, { Component } from 'react';
import { Container, Btn, Wrapper } from './style';
import Head from 'components/globals/head';
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
    const news = this.state.article.fields.news;
    return (
      this.state.article ?
      <Container>
        <Head title={this.props.eng ? 'Article' : 'Artikel'}/>
        <Wrapper>
          <Slider images={news.images}/>
          <h1 dangerouslySetInnerHTML={{
            __html: this.props.eng ?
              news.titleENG ? news.titleENG : news.titleSV :
              news.titleSV
          }}/>
          <p dangerouslySetInnerHTML={{
            __html: this.props.eng ?
              news.contentENG ? news.contentENG : news.contentSV :
              news.contentSV
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
