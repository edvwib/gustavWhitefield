import React, { Component } from 'react';
import { Container, Image } from './style';

import Slider from './slider';

class WeSupport extends Component {

  render() {
    const content = this.props.content.pages.weSupport;
    return (
      <Container>
        <Image
          src={content.image ?
            content.image.sizes.large :
            '/resources/icons/placeholder.jpg'
          }>
          <h1>{this.props.content.eng ? 'We Support' : 'Vi Stödjer'}</h1>
        </Image>
        <div dangerouslySetInnerHTML={
          {__html: this.props.content.eng ?
            content.contentENG :
            content.contentSV}}
          />
          <Slider
            eng={this.props.content.eng}
            page={content}
          />
        </Container>
      );
    }
  }

  export default WeSupport;
