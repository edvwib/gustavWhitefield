import React, { Component } from 'react';
import { Container } from './style';

class Donation extends Component {

  render() {
    console.log(this.props.content);
    return (
      <Container>
        <img src={this.props.content.image.sizes.large} alt=''/>
        <h3>{this.props.eng ? this.props.content.titleENG : this.props.content.titleSV}</h3>
        <p dangerouslySetInnerHTML={{__html: this.props.eng ? this.props.content.contentENG : this.props.content.contentSV}}/>
        {/* <small>{this.props.eng ? this.props.content.detailsENG : this.props.content.detailsSV}</small> */}
      </Container>
    );
  }
}

export default Donation;
