import React, { Component } from 'react';
import { Container } from './style';
import Form from './form';

class Apply extends Component {
  render() {
    const eng = this.props.context.state.eng;
    return (
      <Container>
        <h1>{eng ? 'Apply' : 'Sök bidrag'}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: eng ?
              this.props.content.contentENG :
              this.props.content.contentSV
          }}
        ></div>
        <Form
          eng={eng}
          cookieConsent={this.props.context.cookieConsent}
          API_URL={this.props.context.API_URL}
        />
      </Container>
    );
  }
}

export default Apply;
