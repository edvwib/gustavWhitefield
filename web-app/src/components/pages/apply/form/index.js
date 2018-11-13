import React, { Component } from 'react';
import { Container } from './style';
import ContactDetails from './contactDetails';
import Application from './application';
import Budget from './budget';
import v from 'validator';
import Reaptcha from 'reaptcha';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOrganization: true,
      verified: false,
    };
  }

  componentDidMount = () => {
    if(this.props.cookieConsent()){
      this.setState({
        isOrganization: JSON.parse(window.localStorage.getItem('isOrg')) ? true : false,
      });
    }
  }

  handleInputChange = (event) => {
    const target = event.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    if (value === 'true') value = true;
    if (value === 'false') value = false;
    const name = target.name;

    this.setState({
      [name]: value,
    });

    if(target.name === 'isOrganization' && this.props.cookieConsent()){
      this.saveFormData('isOrg', value);
    }
  }

  saveFormData = (key, data) => {
    window.localStorage.setItem(key, JSON.stringify(data));
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let validate = this.validateForm();
    console.log('valid form: ', validate);

    if (validate) {
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
        });
    }
  }

  recaptchaVerify = (response) => {
    fetch(`${this.props.API_URL}verifyRecaptcha`, {
      body: JSON.stringify({token: response}),
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(result => {
      if(result === true){
        this.setState({
          verified: true,
        });
      }
    });
  }

  validateForm = () => {
    const isOrg = this.state.isOrganization;
    let errors = {};
    const eng = this.props.eng;
    const langString = eng ? 'Required' : 'Måste fyllas i';

    //Contact
    const contact = this.contact.state;
    if (v.isEmpty(contact.name)) {
      errors['name'] = langString;
    }
    if (v.isEmpty(contact.organizationNumber) && isOrg) {
      errors['organizationNumber'] = langString;
    }
    if (v.isEmpty(contact.street)) {
      errors['street'] = langString;
    }
    if (v.isEmpty(contact.zip)) {
      errors['zip'] = langString;
    } else if (!v.isPostalCode(contact.zip, 'any')) {
      errors['zip'] = eng ? 'Not a valid postal code' : ' Inte korrekt formaterad';
    }
    if (v.isEmpty(contact.city)) {
      errors['city'] = langString;
    }
    if (!v.isURL(contact.website) && contact.website.length !== 0) {
      errors['website'] = eng ? 'The URL is not formatted correctly' : 'URL:en är inte korrekt formaterad';
    }
    if (v.isEmpty(contact.contactPerson) && isOrg) {
      errors['contactPerson'] = langString;
    }
    if (v.isEmpty(contact.phone) && v.isEmpty(contact.mobile)) {
      errors['phone'] = langString;
    }
    if (v.isEmpty(contact.email)) {
      errors['email'] = langString;
    } else if (!v.isEmail(contact.email)) {
      errors['email'] = eng ? 'Not a valid email' : 'Inte en giltig e-post'
    }
    if (!v.isEmpty(contact.phone) && !v.isEmpty(contact.mobile)) {
      errors['mobile'] = langString;
    }

    //Application


    //Budget


    //Clear errors
    let labels = document.querySelectorAll('label');
    labels.forEach(label => {
      label.removeAttribute('data-error');
    });

    //Display errors
    let error;
    let index = 0;
    for (error in errors) {
      let label = document.querySelector(`[for=${error}]`);
      index === 0 && window.scrollTo(0, label.offsetTop-15);
      if(label) label.setAttribute('data-error', `${errors[error]}`);
      index++;
    }

    console.log('errors', errors);


    return Object.keys(errors).length ? false : true;
  }

  render() {
    const { eng } = this.props;
    return (
      <Container>
        <form id='form' onSubmit={this.handleSubmit} autoComplete='on' noValidate>
          <div className='isOrg'>
            <label htmlFor='isOrganization'>{
              eng ? 'Are you applying for an organization or an individual?' : 'Söker ni bidrag för en organisation eller för en privatperson?'
            }</label>
            <div className={this.state.isOrganization ? 'active' : ''}>
              <input
                type='radio' name='isOrganization' id='organization'
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
                checked={!this.state.isOrganization}
                value={false}
                onChange={this.handleInputChange}
              />
              <label htmlFor='notOrganization' className={!this.state.isOrganization ? 'active' : ''}>
                {eng ? 'Individual' : 'Privatperson'}
              </label>
            </div>
          </div>

          <div className='instructions'>{eng ? 'Fields marked with a "*" are required.' : 'Fält markerade med "*" måste fyllas i.'}</div>

          <ContactDetails
            ref={(contact) => { this.contact = contact; }}
            eng={eng}
            isOrganization={this.state.isOrganization}
            saveFormData={this.saveFormData}
            cookieConsent={this.props.cookieConsent}
          />
          <Application
            ref={(application) => { this.application = application; }}
            eng={eng}
            isOrganization={this.state.isOrganization}
            saveFormData={this.saveFormData}
            cookieConsent={this.props.cookieConsent}
          />
          <Budget
            ref={(budget) => { this.budget = budget; }}
            eng={eng}
            isOrganization={this.state.isOrganization}
            saveFormData={this.saveFormData}
            cookieConsent={this.props.cookieConsent}
          />

          <div className='submitContainer'>
            <Reaptcha
              ref={e => (this.captcha = e)}
              sitekey={
                process.env.NODE_ENV === 'production' ?
                '6LfNzngUAAAAAJrkkFyez-74o1hncwIfO_kJ2OG_' :
                '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI' // testing key: 6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe
              }
              onVerify={this.recaptchaVerify}
              hl={eng ? 'en' : 'sv'}
            />
            <input
              type='submit'
              value={eng ? 'Send application' : 'Skicka ansökan'}
            />
          </div>
        </form>
      </Container>
    );
  }
}

export default Form;
