import React, { Component } from 'react';
import { Container, Wrapper } from './style';
import Head from 'components/globals/head';
import NewsItem from './newsItem';


class Articles extends Component {

  render() {  
    return (
      <Container>
        <Head title={this.props.content.eng ? 'News' : 'Nyheter'}/>
        <h1>{this.props.content.eng ? 'News' : 'Nyheter'}</h1>
        <Wrapper>
          {
            this.props.content.news.map((article)=>
            <NewsItem
              key={article.post.ID}
              news={article}
              eng={this.props.content.eng}
            />)
          }
        </Wrapper>
      </Container>
    );
  }
}

export default Articles;
