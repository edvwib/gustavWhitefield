import React, { Component } from 'react';
import { Container } from './style';


class Article extends Component {

  render() {
    console.log(this.props);
    return (
      <Container>
        <p>
          {this.props.intro}
        </p>
      </Container>

    );
  }
}

export default Article;
