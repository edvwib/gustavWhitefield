import React, { Component } from 'react';
import { Container, Body } from './style';

import Header from '../../globals/header';
import Animation from './animation';
import placeholder from 'resources/icons/placeholder.jpg';

class WeSupport extends Component {

  render() {
    return (
      <Container>
        <Header
          src={this.props.content.image ? this.props.content.image.sizes.large : placeholder}
          title={this.props.eng ? 'We support' : 'Vi stödjer'}
        />
        <Body>
          <div dangerouslySetInnerHTML={
            {
              __html: this.props.eng ?
              this.props.content.contentENG :
              this.props.content.contentSV}
            }
          />
            <h2>{this.props.eng ? this.props.content.titleENG : this.props.content.titleSV}</h2>
            <Animation items={this.props.content.item} eng={this.props.eng}/>
          </Body>
        </Container>
      );
    }
  }

  export default WeSupport;
