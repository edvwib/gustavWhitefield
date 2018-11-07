import React, { Component } from 'react';
import { Container, Image } from './style';

import Files from './files';

class Economy extends Component {

  render() {
    return (
      <Container>
        <Image src={this.props.content.image ? this.props.content.image.sizes.large : '/resources/icons/placeholder.jpg'}>
        <h1>{this.props.eng ? 'Economy' : 'Ekonomi'}</h1>
      </Image>
      <div dangerouslySetInnerHTML={{ __html: this.props.eng ? this.props.content.contentENG : this.props.content.contentSV}} />
      <Files eng={true} files={this.props.content.files}/>
    </Container>
  );
}
}

export default Economy;
