import React, { Component } from 'react';
import { Container } from './style';
import Form from './form';

class Apply extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: true,
    };
  }

  toggleForm = () => {
    this.setState({
      formVisible: !this.state.formVisible
    });
  }

  render() {
    const eng = this.props.content.eng;
    return (
      <Container>
        <h1>{eng ? 'Apply' : 'Sök bidrag'}</h1>
        <button
          onClick={this.toggleForm}
        >{eng ? 'Apply now' : 'Sök bidrag nu'}</button>
        <Form
          eng={eng}
          visible={this.state.formVisible}
          cookieConsent={this.props.cookieConsent}
        />
      </Container>
    );
  }
}

export default Apply;
