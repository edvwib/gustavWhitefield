import React, { Component } from 'react';
import { Container, Body} from './style';

import Header from '../../globals/header';
import SvgAnime from './svgAnime';
import placeholder from 'resources/icons/placeholder.jpg';

class Purpose extends Component {

  render() {
    return (
      <Container>
        <Header
          src={this.props.content.image ? this.props.content.image.sizes.large : placeholder}
          title={this.props.eng ? 'Purpose' : 'Syfte'}
        />
        <Body>
          <SvgAnime/>
          <div dangerouslySetInnerHTML={{__html: this.props.eng ? this.props.content.contentENG : this.props.content.contentSV}}/>
        </Body>

      </Container>
    );
  }
}

export default Purpose;
