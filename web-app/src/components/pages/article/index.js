import React, { Component } from 'react';
import { Container } from './style';


class Article extends Component {

  render() {
    console.log(this.props);
    return (
      <Container>
        <h1>Article</h1>
      </Container>
    );
  }
}

export default Article;
