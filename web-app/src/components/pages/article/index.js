import React, { Component } from 'react';
import { Container, Btn, Wrapper } from './style';
import Head from 'components/globals/head';
import NotFound from '../notFound';
import Slider from './slider';

class Article extends Component {

  constructor(props) {
    super(props);
    const article = this.props.content.getNewsById(this.props.match.params.id);

    this.state = {
      article: article.fields.news,
      date: this.formatDate(article)
    }
  }

  formatDate = (article) => {
    let date = new Date(article.post.post_date);
    return `${date.getFullYear()}-${('0' + date.getMonth()).slice(-2)}-${('0' + date.getDay()).slice(-2)}`;
  }

  goBack = () => {
    this.props.history.push(this.props.eng ? '/news' : '/nyheter');
  }

  render() {
    return (
      this.state.article ?
      <Container>
        <Head title={this.props.eng ? 'Article' : 'Artikel'}/>
        <Wrapper>
          <Slider images={this.state.article.images}/>
          <h1 dangerouslySetInnerHTML={{
            __html: this.props.eng ?
            this.state.article.titleENG ?
            this.state.article.titleENG :
            this.state.article.titleSV :
            this.state.article.titleSV
          }}/>
          <small>({this.state.date})</small>
          <p dangerouslySetInnerHTML={{
            __html: this.props.eng ?
            this.state.article.contentENG ?
            this.state.article.contentENG :
            this.state.article.contentSV :
            this.state.article.contentSV
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
