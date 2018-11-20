import React, { Component } from 'react';
import * as Styled from './style';
import ContactDetails from './contactDetails';
import Application from './application';
import Budget from './budget';
import Reaptcha from 'reaptcha';
import { getInputDetails, saveFormData, validateForm, notVerified, verified, formSent } from './formHelpers';

class FormContainer extends Component {
  initialState = {
    isOrganization: true,
    verified: false,
    formServerError: false,
    formReceived: false,
  };
  state = this.initialState;

  componentDidMount = () => {
    if (this.props.cookieConsent()) {
      this.setState({
        isOrganization: JSON.parse(window.localStorage.getItem('isOrg')) ? true : false,
      });
    }
  }

  handleInputChange = (event) => {
    const e = getInputDetails(event);

    this.setState({
      [e.name]: e.value,
    });

    if (this.props.cookieConsent()) {
      saveFormData('isOrg', e.value);
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const validate = validateForm(this);
    console.log('valid form: ', validate);

    if (validate) {
      if (!this.state.verified) {
        notVerified(this.props.eng);
        return;
      } else {
        verified(this.props.eng);
      }

      // Send form to email
      const params = {
        body: JSON.stringify({
          isOrganization: this.state.isOrganization,
          contact: this.contact.state,
          application: this.application.state,
          budget: this.budget.state,
        }),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      };
      console.log('params', params);
      fetch(`${this.props.API_URL}application/`, params)
        .then(response => response.json())
        .then(data => {
          console.log('response', data);
          if(data === 1){
            formSent(this);
          } else {
            this.setState({
              formServerError: true,
            });
          }
        });
    }
  }

  recaptchaVerify = (response) => {
    fetch(`${this.props.API_URL}verifyRecaptcha`, {
      body: JSON.stringify({ token: response }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        if (result === true) {
          this.setState({
            verified: true,
          });
          verified(this.props.eng);
        }
      });
  }

  render() {
    const { eng } = this.props;
    return (
      <React.Fragment>
        {!this.state.formReceived &&
          <Styled.Form id='form' onSubmit={this.handleSubmit} autoComplete='on' noValidate>
            <Styled.IsOrganization>
              <label htmlFor='isOrganization'>{
                eng ? 'Are you applying for an organization or an individual?' : 'Söker ni bidrag för en organisation eller för en privatperson?'
              }</label>
              <div className={this.state.isOrganization ? 'active' : ''}>
                <input
                  type='radio' name='isOrganization' id='organization'
                  aria-labelledby='organisation notOrganization'
                  checked={this.state.isOrganization}
                  value={true}
                  onChange={this.handleInputChange}
                  />
                <label htmlFor='organization' className={this.state.isOrganization ? 'active' : ''}>
                  {eng ? 'Organization' : 'Organisation'}
                </label>
              </div>
              <div className={!this.state.isOrganization ? 'active' : ''}>
                <input
                  type='radio' name='isOrganization' id='notOrganization'
                  aria-labelledby='organisation notOrganization'
                  checked={!this.state.isOrganization}
                  value={false}
                  onChange={this.handleInputChange}
                  />
                <label htmlFor='notOrganization' className={!this.state.isOrganization ? 'active' : ''}>
                  {eng ? 'Individual' : 'Privatperson'}
                </label>
              </div>
            </Styled.IsOrganization>

            <Styled.Instructions>{eng ? 'Fields marked with a "*" are required.' : 'Fält markerade med "*" måste fyllas i.'}</Styled.Instructions>

            <ContactDetails
              ref={(contact) => { this.contact = contact; }}
              eng={eng}
              isOrganization={this.state.isOrganization}
              cookieConsent={this.props.cookieConsent}
              />
            <Application
              ref={(application) => { this.application = application; }}
              eng={eng}
              isOrganization={this.state.isOrganization}
              cookieConsent={this.props.cookieConsent}
              />
            <Budget
              ref={(budget) => { this.budget = budget; }}
              eng={eng}
              isOrganization={this.state.isOrganization}
              cookieConsent={this.props.cookieConsent}
              />

            <Styled.SubmitContainer>
              <Reaptcha
                ref={e => (this.captcha = e)}
                sitekey={
                  '6LfNzngUAAAAAJrkkFyez-74o1hncwIfO_kJ2OG_'
                  // process.env.NODE_ENV === 'production' ?
                  //   '6LfNzngUAAAAAJrkkFyez-74o1hncwIfO_kJ2OG_' :
                  //   '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI' // testing key: 6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe
                }
                onVerify={this.recaptchaVerify}
                hl={eng ? 'en' : 'sv'}
                />
              <Styled.SubmitButton
                type='submit'
                value={eng ? 'Send application' : 'Skicka ansökan'}
              />
            </Styled.SubmitContainer>
            {this.state.formServerError &&
              <Styled.ErrorContainer>{
                eng ?
                'Something went wrong on our end, please go over the form manually and try to submit the form again. If you\'re still unable to send the form, please report this error to us.' :
                'Något gick när formuläret skulle skickas, gå igenom formuläret manuellt och försök att skicka det igen. Om ni fortfarande inte kan skicka formuläret, rapportera gärna felet till oss.'
              }</Styled.ErrorContainer>
            }
          </Styled.Form>
        }
        {this.state.formReceived &&
          <Styled.ReceivedContainer className='formRecevied'>{
            eng ?
              'Thank you for your application! We will reach out to you as soon as possible via the email you entered.' :
              'Tack för din ansökan! Vi återkommer så snart som möjligt via den e-post ni angav i formuläret.'
          }</Styled.ReceivedContainer>
        }
      </React.Fragment>
    );
  }
}

export default FormContainer;
