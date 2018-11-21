import React, { Component } from 'react';
import { Container } from './style';

class Donation extends Component {

  render() {
    const { eng, content } = this.props;
    return (
      <Container>
        <img
          src={content.image.sizes.large}
          alt={content.image.alt ? content.image.alt : content.image.title}
        />
        <h3>{eng ? content.titleENG : content.titleSV}</h3>
        <p
          dangerouslySetInnerHTML={{
            __html: eng ?
              content.contentENG :
              content.contentSV
          }}
        />
      </Container>
    );
  }
}

export default Donation;
