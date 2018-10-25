import React, { Component } from 'react';
import { Container } from './style';


class Art extends Component {

  state={
    date: this.props.news.post.post_date,
    images: this.props.news.fields.news.images,
    titleSV: this.props.news.fields.news.titleSV,
    titleENG: this.props.news.fields.news.titleENG,
    contentSV: this.props.news.fields.news.contentSV,
    contentENG: this.props.news.fields.news.contentENG
  }

  render() {
    console.log(this.state.contentENG);

    return (
      <Container first={this.props.first}>
        {
          this.props.eng &&
          <h3>hejsan</h3>
        }
      </Container>
    );
  }
}

export default Art;
