import React, { Component } from 'react';
import * as Styled from './style';
import ContactDetails from './contactDetails';
import Application from './application';
import Budget from './budget';
import Reaptcha from 'reaptcha';
import { getInputDetails, saveFormData, validateForm, notVerified, verified, formSent } from './formHelpers';
import checkmark from 'resources/icons/checkmark.svg';

class FormContainer extends Component {
  initialState = {
    isOrganization: true,
    concent1: false,
    concent2: false,
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

    if (e.name === 'isOrganization' && this.props.cookieConsent()) {
      saveFormData('isOrg', e.value);
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const validate = validateForm(this);

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
      fetch(`${this.props.API_URL}application/`, params)
        .then(response => response.json())
        .then(data => {
          if (data === 1) {
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

            <Styled.ConcentContainer checkmark={checkmark}>
              <a
                href={this.props.concentDocument.url}
                target="_blank"
                rel="noopener noreferrer"
              >{
                this.props.concentDocument.title
              } - ({eng ? 'Opens in new tab' : 'Öppnas i ny flik'})</a>
              <span>{
                eng ?
                  'Mark with a checkbox if you agree to have your personal details processed according to the document above.' :
                  'Markera med ett kryss i rutan om du samtycker till att dina personuppgifter behandlas i enlighet med vad som angetts i dokumentet ovan.'
              }</span>
              <div>
                <input type="checkbox" id="concent1" name="concent1"
                  checked={this.state.concent1}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="concent1">{
                  eng ?
                    'To try your claim for a grant and to administrate payments of the grant from the Foundation' :
                    'För att pröva din rätt till bidrag och för att i övrigt administrera utbetalningar av bidrag från Stiftelsen'
                }*</label>
              </div>
              <div>
                <input type="checkbox" id="concent2" name="concent2"
                  checked={this.state.concent2}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="concent2">{
                  eng ?
                    'To publish approved grants and applicants on the Foundation\'s website' :
                    'För att publicera beviljade anslag och sökande på Stiftelsens webbsida'
                }*</label>
              </div>
              <span>{
                eng ?
                  'By checking the boxes above and submitting this application to the Foundation I agree to have my personal details processed, according to the document above, for the purposes listed.' :
                  'Genom att markera rutorna ovan och skicka in denna ansökan till Stiftelsen samtycker jag till att Stiftelsen behandlar mina personuppgifter, såsom behandlingen beskrivs i dokumentet ovan, för de ändamål som markerats ovan.'
                }</span>
            </Styled.ConcentContainer>

            <Styled.SubmitContainer>
              <Reaptcha
                ref={e => (this.captcha = e)}
                sitekey={
                  process.env.NODE_ENV === 'production' && window.location.hostname === 'www.gustavwhitefield.com'?
                     '6LfNzngUAAAAAJrkkFyez-74o1hncwIfO_kJ2OG_' :
                     '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI' // testing key: 6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe
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
