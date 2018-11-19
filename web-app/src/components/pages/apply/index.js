import React, { Component } from 'react';
import { Container } from './style';
import FormContainer from './formContainer';
import Head from 'components/globals/head';
import anime from 'animejs';

class Apply extends Component {

  componentDidMount = () => {
    // Animate scroll to form when link is clicked
    let formLink = document.querySelector('[href="#form"]');
    let form = document.querySelector('form');
    formLink && formLink.addEventListener('click', () => {
      anime({
        targets: [document.documentElement, document.body],
        scrollTop: form.offsetTop - 15,
        duration: 800,
        easing: 'easeInOutQuad'
      });
    })
  }

  render() {
    const eng = this.props.context.state.eng;
    return (
      <Container>
        <Head title={eng ? 'Apply' : 'Sök bidrag'}/>
        <h1>{eng ? 'Apply' : 'Sök bidrag'}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: eng ?
              this.props.content.contentENG :
              this.props.content.contentSV
          }}
        ></div>
        <FormContainer
          eng={eng}
          cookieConsent={this.props.context.cookieConsent}
          API_URL={this.props.context.API_URL}
        />
      </Container>
    );
  }
}

export default Apply;
