import React, { Component } from 'react';
import { Container, Image, Body} from './style';

import SvgAnime from './svgAnime';
class Purpose extends Component {

  render() {
    return (
      <Container>
        <Image src={this.props.content.image ? this.props.content.image.sizes.large : '/resources/icons/placeholder.jpg'}>
        <h1>{this.props.eng ? 'Purpose' : 'Syfte'}</h1>
      </Image>
      <Body>
        <SvgAnime/>
        <div dangerouslySetInnerHTML={{__html: this.props.eng ? this.props.content.contentENG : this.props.content.contentSV}}/>
      </Body>

    </Container>
  );
}
}

export default Purpose;
