import React, { Component } from 'react';
import { Container } from './style';

class ContactDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      organizationNumber: '',
      street: '',
      zip: '',
      city: '',
      website: '',
      contactPerson: '',
      phone: '',
      email: '',
      mobile: '',
      applicantName: '',
      applicantBirthdate: '',
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    if(value === 'true')
      value = true;
    if (value === 'false')
      value = false;
    const name = target.name;

    this.setState({
        [name]: value,
    });
  }

  render() {
    const {eng, isOrganization} = this.props;
    return (
      <Container>
        <fieldset>
          <legend>
            {eng ? 'Contact details' : 'Kontaktuppgifter'}
          </legend>

          {/* NAME */}
          <label htmlFor="name">{
            isOrganization ?
              eng ? 'Name organization' : 'Namn organisation' :
              eng ? 'Name applicant' : 'Namn sökande'
          }</label>
          <input
            type="text" name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />

          {/* ORGANIZATION NUMBER */}
          {
            isOrganization &&
              <React.Fragment>
                <label htmlFor="organizationNumber">{
                  eng ? 'Organization number' : 'Organisationsnummer'
                }</label>
                <input
                  type="text" name="organizationNumber"
                  value={this.state.organizationNumber}
                  onChange={this.handleInputChange}
                />
              </React.Fragment>
          }

          {/* STREET ADDRESS */}
          <label htmlFor="street">{
            eng ? 'Street' : 'Gatuaddress'
          }</label>
          <input
            type="text" name="street"
            value={this.state.street}
            onChange={this.handleInputChange}
          />

          {/* ZIP */}
          <label htmlFor="zip">{
            eng ? 'Zip code' : 'Postnummer'
          }</label>
          <input
            type="text" name="zip"
            value={this.state.zip}
            onChange={this.handleInputChange}
          />

          {/* CITY */}
          <label htmlFor="city">{
            eng ? 'City' : 'Ort'
          }</label>
          <input
            type="text" name="city"
            value={this.state.city}
            onChange={this.handleInputChange}
          />

          {/* WEBSITE */}
          {
            isOrganization &&
            <React.Fragment>
              <label>{
                eng ? 'Website' : 'Hemsida'
              }</label>
              <input
                type="text" name="website"
                value={this.state.website}
                onChange={this.handleInputChange}
              />
            </React.Fragment>
          }

          {/* CONTACT PERSON */}
          {
            isOrganization &&
            <React.Fragment>
              <label htmlFor="contactPerson">{
                eng ? 'Contact person' : 'Kontaktperson'
              }</label>
              <input
                type="text" name="contactPerson"
                value={this.state.contactPerson}
                onChange={this.handleInputChange}
              />
            </React.Fragment>
          }

          {/* PHONE */}
          <label htmlFor="phone">{
            eng ? 'Phone' : 'Telefon'
          }</label>
          <input
            type="text" name="phone"
            value={this.state.phone}
            onChange={this.handleInputChange}
          />

          {/* EMAIL */}
          <label htmlFor="email">{
            eng ? 'Email' : 'E-post'
          }</label>
          <input
            type="mail" name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />

          {/* MOBILE */}
          {
            isOrganization &&
            <React.Fragment>
              <label htmlFor="mobile">{
                eng ? 'Mobile phone' : 'Mobilnummer'
              }</label>
              <input
                type="text" name="mobile"
                value={this.state.mobile}
                onChange={this.handleInputChange}
              />
            </React.Fragment>
          }

          {/* APPLICANT NAME */}
          {
            !isOrganization &&
            <React.Fragment>
              <label htmlFor="applicantName">{
                eng ? 'Name of receiver of funds' : 'Namn mottagare av sökta medel'
              }</label>
              <input
                type="text" name="applicantName"
                value={this.state.applicantName}
                onChange={this.handleInputChange}
              />
            </React.Fragment>
          }

          {/* APPLICANT BIRTHDATE */}
          {
            !isOrganization &&
            <React.Fragment>
              <label htmlFor="applicantBirthdate">{
                eng ? 'Birthdate of receiver of funds' : 'Födelsedata mottagare av sökta medel'
              }</label>
              <input
                type="text" name="applicantBirthdate"
                value={this.state.applicantBirthdate}
                onChange={this.handleInputChange}
              />
            </React.Fragment>
          }
        </fieldset>
      </Container>
    );
  }
}

export default ContactDetails;
