import React, { Component } from 'react';
import { Container, Text} from './style';
import Head from 'components/globals/head';
import Donations from './donations';

class SupportUs extends Component {

  render() {
    return (
      <Container>
        <Head title={this.props.eng ? 'Help our cause' : 'Stöd oss'}/>
        <h1>{this.props.eng ? 'Help our cause' : 'Stöd oss'}</h1>
        <Text
          dangerouslySetInnerHTML={{
            __html: this.props.eng ?
            this.props.content.introENG :
            this.props.content.introSV
          }}
        />
        <Donations
          content={this.props.content.paymentMethods}
          eng={this.props.eng}
        />
        <Text
          dangerouslySetInnerHTML={{
            __html: this.props.eng ?
            this.props.content.otherENG :
            this.props.content.otherSV
          }}
        />
      </Container>
    );
  }
}

export default SupportUs;
