import React, { Component } from 'react';
import { Container, Body } from './style';

import Header from '../../globals/header';
import Files from './files';
import placeholder from 'resources/icons/placeholder.jpg';

class Economy extends Component {

  render() {
    return (
      <Container>
        <Header
          src={this.props.content.image ? this.props.content.image.sizes.large : placeholder}
          title={this.props.eng ? 'Economy' : 'Ekonomi'}
        />
        <Body>
          <div dangerouslySetInnerHTML={{ __html: this.props.eng ? this.props.content.contentENG : this.props.content.contentSV}} />
          <Files eng={true} files={this.props.content.files}/>
        </Body>

      </Container>
    );
  }
}

export default Economy;
