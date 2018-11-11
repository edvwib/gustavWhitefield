import React, { Component } from 'react';
import { Container } from './style';
import ContactDetails from './contactDetails';
import Application from './application';
import Budget from './budget';
import v from 'validator';
import Recaptcha from 'react-recaptcha';
import { Helmet } from "react-helmet";

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
    if (value === 'true')
      value = true;
    if (value === 'false')
      value = false;
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
    console.log('valid form', validate);

    if (validate || true) {
      const params = {
        body: {
          isOrganization: this.state.isOrganization,
          contact: this.contact.state,
          application: this.application.state,
          budget: this.budget.state,
        },
        method: 'POST',
      };
      console.log(params);
      return;
      fetch('http://localhost:8888/wp-json/api/v1/application/', params)
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
    }
  }

  recaptchaVerify = (response) => {
    console.log(response);
    this.setState({
      verified: true,
    });
  }

  validateForm = () => {
    const isOrg = this.state.isOrganization;
    let errors = {};
    const langString = this.props.eng ? ' is required' : ' måste fyllas i';

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
      errors['zip'] = this.props.eng ? ' is not a valid' : ' är inte korrekt formatterat';
    }
    if (v.isEmpty(contact.city)) {
      errors['city'] = langString;
    }
    if (!v.isURL(contact.website) && contact.website.length !== 0) {
      errors['website'] = this.props.eng ? 'URL is not formatted correctly' : 'ns URL är inte korrekt formaterad';
    }
    if (v.isEmpty(contact.contactPerson)) {
      errors['contactPerson'] = langString;
    }
    if (v.isEmpty(contact.phone) && v.isEmpty(contact.mobile)) {
      errors['phone'] = langString;
    }
    if (v.isEmpty(contact.email)) {
      errors['email'] = langString;
    } else if (!v.isEmail(contact.email)) {
      errors['email'] = this.props.eng ? ' is not formatted correctly' : 'en är inte korrekt formatterad'
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
    for (error in errors) {
      let label = document.querySelector(`[for=${error}]`);
      label.setAttribute('data-error', `${errors[error]}`);
    }

    return Object.keys(errors).length ? false : true;
  }

  render() {
    const { eng } = this.props;
    return (
      <Container className={this.props.visible ? '' : 'hidden'}>
        <Helmet>
          <script src="//www.google.com/recaptcha/api.js" async defer></script>
        </Helmet>

        <form onSubmit={this.handleSubmit} autoComplete='on'>
          {/* <legend>{eng ? 'Apply' : 'Sök bidrag'}</legend> */}

          <div className='isOrg'>
            <div className={this.state.isOrganization ? 'active' : ''}>
              <input
                type="radio" name="isOrganization" id="organization"
                checked={this.state.isOrganization}
                value={true}
                onChange={this.handleInputChange}
              />
              <label htmlFor="organization">
                {eng ? 'Organization' : 'Organisation'}
              </label>
            </div>
            <div className={!this.state.isOrganization ? 'active' : ''}>
              <input
                type="radio" name="isOrganization" id="notOrganization"
                checked={!this.state.isOrganization}
                value={false}
                onChange={this.handleInputChange}
              />
              <label htmlFor="notOrganization">
                {eng ? 'Individual' : 'Privatperson'}
              </label>
            </div>
          </div>

          <ContactDetails eng={eng} isOrganization={this.state.isOrganization} saveFormData={this.saveFormData} cookieConsent={this.props.cookieConsent}
            ref={(contact) => { this.contact = contact; }} />
          <Application eng={eng} isOrganization={this.state.isOrganization} saveFormData={this.saveFormData} cookieConsent={this.props.cookieConsent}
            ref={(application) => { this.application = application; }} />
          <Budget eng={eng} isOrganization={this.state.isOrganization} saveFormData={this.saveFormData} cookieConsent={this.props.cookieConsent}
            ref={(budget) => { this.budget = budget; }} />

          <div className='submitContainer'>
            <Recaptcha
              ref={e => this.recaptchaInstance = e}
              sitekey={
                process.env.NODE_ENV === 'production' ?
                  '6LfNzngUAAAAAJrkkFyez-74o1hncwIfO_kJ2OG_' :
                  '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI' // testing key: 6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe
              }
              verifyCallback={this.recaptchaVerify}
              render='onload'
              hl={this.props.eng ? 'en' : 'sv'}
            />

            <input type="submit" value={eng ? 'Send application' : 'Skicka ansökan'}/>
          </div>

        </form>
      </Container>
    );
  }
}

export default Form;
