import React, { Component } from 'react';
import { Glob } from '../../globals/context';
import { Container } from './style';

import Content from './content';

class Article extends Component {

  render() {
    return (
      <Glob.Consumer>
        {
          (context) => (
            <Container>
              <Content
                eng={context.state.eng}
                article={context.getNewsById(this.props.match.params.id)}
              />
            </Container>
          )
        }
      </Glob.Consumer>
    );
  }
}

export default Article;
