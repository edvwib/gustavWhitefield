import React, { Component } from 'react';
import { Container } from './style';

import Content from './content';

class Gustav extends Component {

  render() {

    return (
      <Container>
        <Content
          eng={this.props.content.eng}
          page={this.props.content.pages.aboutGustav}/>
        </Container>
      );
    }
  }

  export default Gustav;
