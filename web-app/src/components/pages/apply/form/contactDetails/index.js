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

          <div className='grid'>
            {/* NAME */}
            <div>
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
            </div>

            {/* ORGANIZATION NUMBER */}
            {
              isOrganization &&
                <div>
                  <label htmlFor="organizationNumber">{
                    eng ? 'Organization number' : 'Organisationsnummer'
                  }</label>
                  <input
                    type="text" name="organizationNumber"
                    value={this.state.organizationNumber}
                    onChange={this.handleInputChange}
                  />
                </div>
            }

            {/* STREET ADDRESS */}
            <div>
              <label htmlFor="street">{
                eng ? 'Street' : 'Gatuaddress'
              }</label>
              <input
                type="text" name="street"
                value={this.state.street}
                onChange={this.handleInputChange}
              />
            </div>

            {/* ZIP */}
            <div>
              <label htmlFor="zip">{
                eng ? 'Zip code' : 'Postnummer'
              }</label>
              <input
                type="text" name="zip"
                value={this.state.zip}
                onChange={this.handleInputChange}
              />
            </div>

            {/* CITY */}
            <div>
              <label htmlFor="city">{
                eng ? 'City' : 'Ort'
              }</label>
              <input
                type="text" name="city"
                value={this.state.city}
                onChange={this.handleInputChange}
              />
            </div>

            {/* WEBSITE */}
            {
              isOrganization &&
              <div>
                <label htmlFor="website">{
                  eng ? 'Website' : 'Hemsida'
                }</label>
                <input
                  type="text" name="website"
                  value={this.state.website}
                  onChange={this.handleInputChange}
                />
              </div>
            }

            {/* CONTACT PERSON */}
            {
              isOrganization &&
              <div>
                <label htmlFor="contactPerson">{
                  eng ? 'Contact person' : 'Kontaktperson'
                }</label>
                <input
                  type="text" name="contactPerson"
                  value={this.state.contactPerson}
                  onChange={this.handleInputChange}
                />
              </div>
            }

            {/* PHONE */}
            <div>
              <label htmlFor="phone">{
                eng ? 'Phone' : 'Telefon'
              }</label>
              <input
                type="text" name="phone"
                value={this.state.phone}
                onChange={this.handleInputChange}
              />
            </div>

            {/* EMAIL */}
            <div>
              <label htmlFor="email">{
                eng ? 'Email' : 'E-post'
              }</label>
              <input
                type="mail" name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </div>

            {/* MOBILE */}
            {
              isOrganization &&
              <div>
                <label htmlFor="mobile">{
                  eng ? 'Mobile phone' : 'Mobilnummer'
                }</label>
                <input
                  type="text" name="mobile"
                  value={this.state.mobile}
                  onChange={this.handleInputChange}
                />
              </div>
            }

            {/* APPLICANT NAME */}
            {
              !isOrganization &&
              <div>
                <label htmlFor="applicantName">{
                  eng ? 'Name of receiver of funds' : 'Namn mottagare av sökta medel'
                }</label>
                <input
                  type="text" name="applicantName"
                  value={this.state.applicantName}
                  onChange={this.handleInputChange}
                />
              </div>
            }

            {/* APPLICANT BIRTHDATE */}
            {
              !isOrganization &&
              <div>
                <label htmlFor="applicantBirthdate">{
                  eng ? 'Birthdate of receiver of funds' : 'Födelsedata mottagare av sökta medel'
                }</label>
                <input
                  type="text" name="applicantBirthdate"
                  value={this.state.applicantBirthdate}
                  onChange={this.handleInputChange}
                />
              </div>
            }
          </div>
        </fieldset>
      </Container>
    );
  }
}

export default ContactDetails;
