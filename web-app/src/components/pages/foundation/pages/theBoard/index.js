import React, { Component } from 'react';
import { Container } from './style';

import Header from '../../globals/header';
import Member from './member';

class TheBoard extends Component {

  render() {
    return (
      <Container>
        <Header
          src={this.props.content.image ? this.props.content.image.sizes.large : '/resources/icons/placeholder.jpg'}
          title={this.props.eng ? 'The Board' : 'Styrelsen'}
        />
        {
          this.props.content.members.map((member, index) =>
          <Member
            key={index}
            name={member.name}
            title={this.props.eng ? member.titleENG : member.titleSV}
            image={member.image}
            about={this.props.eng ? member.aboutENG : member.aboutSV}
          />)
        }
      </Container>
    );
  }
}

export default TheBoard;
