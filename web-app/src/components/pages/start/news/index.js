import React, { Component } from 'react';
import { Container } from './style';

import Art from './art';

class News extends Component {

  render() {
    return (
      <Container>
        {
          this.props.news &&
          this.props.news.map((item, index) =>
            <Art eng={this.props.eng} first={index === 0} key={index} news={item}/>
        )
        }
      </Container>
    );
  }
}

export default News;
