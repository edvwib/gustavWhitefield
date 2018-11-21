import React, { Component } from 'react';
import { Container, Text } from './style';
import Head from 'components/globals/head';
import Donations from './donations';

class SupportUs extends Component {

  render() {
    const { eng, content } = this.props;
    const title = eng ? 'Help our cause' : 'Stöd oss'
    return (
      <Container>
        <Head title={title} />
        <h1>{title}</h1>
        <Text
          dangerouslySetInnerHTML={{
            __html: eng ?
              content.introENG :
              content.introSV
          }}
        />
        <Donations
          content={content.paymentMethods}
          eng={eng}
        />
        <Text
          dangerouslySetInnerHTML={{
            __html: eng ?
              content.otherENG :
              content.otherSV
          }}
        />
      </Container>
    );
  }
}

export default SupportUs;
