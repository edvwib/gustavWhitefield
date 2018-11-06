import React, { Component } from 'react';
import { Container } from './style';

import Content from './content';

class Article extends Component {

  render() {
    console.log(this.props);
    return (
      <Container>
        <Content
          eng={this.props.content.state.eng}
          article={this.props.content.getNewsById(this.props.match.params.id)}
        />
      </Container>
    );
  }
}

export default Article;
