import React, { Component } from 'react';
import { Container, Body } from './style';

import Header from '../../globals/header';
import Animation from './animation';

class WeSupport extends Component {

  render() {
    return (
      <Container>
        <Header
          src={this.props.content.image ? this.props.content.image.sizes.large : '/resources/icons/placeholder.jpg'}
          title={this.props.eng ? 'We support' : 'Vi stödjer'}
        />
        <Body>
          <Animation items={this.props.content.item} eng={this.props.eng}/>

          <div dangerouslySetInnerHTML={
            {__html: this.props.eng ?
              this.props.content.contentENG :
              this.props.content.contentSV}}
            />
          </Body>
        </Container>
      );
    }
  }

  export default WeSupport;
