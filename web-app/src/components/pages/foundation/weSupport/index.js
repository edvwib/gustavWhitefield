import React, { Component } from 'react';
import { Container, Image } from './style';

import Animation from './animation';

class WeSupport extends Component {


  render() {
    return (
      <Container>
        <Image
          src={this.props.content.image ?
            this.props.content.image.sizes.large :
            '/resources/icons/placeholder.jpg'
          }>
          <h1>{this.props.eng ? 'We Support' : 'Vi Stödjer'}</h1>
        </Image>

        <Animation items={this.props.content.item} eng={this.props.eng}/>

        <div dangerouslySetInnerHTML={
          {__html: this.props.eng ?
            this.props.content.contentENG :
            this.props.content.contentSV}}
          />
        </Container>
      );
    }
  }

  export default WeSupport;
