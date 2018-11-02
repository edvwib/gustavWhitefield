import React, { Component } from 'react';
import { Container } from './style';


class Article extends Component {

  render() {
    console.log(this.props);
    return (
      <Container>
        <h2>{this.props.title}</h2>
        <p>{this.props.intro}</p>
      </Container>

    );
  }
}

export default Article;
