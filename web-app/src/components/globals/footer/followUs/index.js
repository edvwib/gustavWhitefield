import React, { Component } from 'react';
import { Container } from './style';

class FollowUs extends Component {

  render() {
    return (
      <Container>
        {this.props.page.map((media) =>
          <a
            key={media.icon.ID}
            href={media.url}
            target="_blank"
            rel="noopener noreferrer">
            <img src={media.icon.url} alt={media.icon.alt ? media.icon.alt : media.icon.title} />
          </a>
        )}
      </Container>
    );
  }
}

export default FollowUs;
