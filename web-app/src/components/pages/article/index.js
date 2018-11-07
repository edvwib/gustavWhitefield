import React, { Component } from 'react';
import { Container } from './style';

import Slider from './slider';

class Article extends Component {

  state={
    article: this.props.content.getNewsById(this.props.match.params.id)
  }

  render() {
    return (
      <Container>
        {
          this.props.content.eng ?
          <React.Fragment>
            <Slider images={this.state.article.fields.news.images}/>
            <h1 dangerouslySetInnerHTML={{__html: this.state.article.fields.news.titleENG}}/>
            <p dangerouslySetInnerHTML={{__html: this.state.article.fields.news.contentENG}}/>
          </React.Fragment>
          :
          <React.Fragment>
            <Slider images={this.state.article.fields.news.images}/>
            <h1 dangerouslySetInnerHTML={{__html: this.state.article.fields.news.titleSV}}/>
            <p dangerouslySetInnerHTML={{__html: this.state.article.fields.news.contentSV}}/>
          </React.Fragment>
        }
      </Container>
    );
  }
}

export default Article;
