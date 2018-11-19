import React, { Component } from 'react';
import * as Styled from './style';
import { getInputDetails, saveFormData } from './../formHelpers';

class ContactDetails extends Component {
  state = {
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

  componentDidMount = () => {
    if (this.props.cookieConsent()) {
      this.setState({
        ...JSON.parse(window.localStorage.getItem('contact')),
      });
    }
  }

  handleInputChange = (event) => {
    const e = getInputDetails(event);

    this.setState({
        [e.name]: e.value,
    });

    if (this.props.cookieConsent())
      saveFormData('contact', this.state);
  }

  render() {
    const {eng, isOrganization} = this.props;
    return (
      <Styled.Fieldset>
        <legend>
          {eng ? 'Contact details' : 'Kontaktuppgifter'}
        </legend>

        <div className='grid'>
          <Styled.InputContainer>
            <label htmlFor='name' id='nameLabel'>{
              isOrganization ?
                eng ? 'Name organization' : 'Namn organisation' :
                eng ? 'Name applicant' : 'Namn sökande'
            }*</label>
            <input
              type='text' name='name'
              aria-labelledby='nameLabel'
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </Styled.InputContainer>

          {
            isOrganization &&
              <Styled.InputContainer>
                <label htmlFor='organizationNumber' id='orgNrLabel'>{
                  eng ? 'Organization number' : 'Organisationsnummer'
                }*</label>
                <input
                  type='text' name='organizationNumber'
                  aria-labelledby='orgNrLabel'
                  value={this.state.organizationNumber}
                  onChange={this.handleInputChange}
                />
              </Styled.InputContainer>
          }

          <Styled.InputContainer>
            <label htmlFor='street' id='streetLabel'>{
              eng ? 'Street' : 'Gatuadress'
            }*</label>
            <input
              type='text' name='street'
              aria-labelledby='streetLabel'
              value={this.state.street}
              onChange={this.handleInputChange}
            />
          </Styled.InputContainer>

          <Styled.InputContainer>
            <label htmlFor='zip' id='zipLabel'>{
              eng ? 'Zip code' : 'Postnummer'
            }*</label>
            <input
              type='text' name='zip'
              aria-labelledby='zipLabel'
              value={this.state.zip}
              onChange={this.handleInputChange}
            />
          </Styled.InputContainer>

          <Styled.InputContainer>
            <label htmlFor='city' id='cityLabel'>{
              eng ? 'City' : 'Ort'
            }*</label>
            <input
              type='text' name='city'
              aria-labelledby='cityLabel'
              value={this.state.city}
              onChange={this.handleInputChange}
            />
          </Styled.InputContainer>

          {
            isOrganization &&
            <Styled.InputContainer>
              <label htmlFor='website' id='websiteLabel'>{
                eng ? 'Website' : 'Hemsida'
              }</label>
              <input
                type='text' name='website'
                aria-labelledby='websiteLabel'
                value={this.state.website}
                onChange={this.handleInputChange}
              />
            </Styled.InputContainer>
          }

          {
            isOrganization &&
            <Styled.InputContainer>
              <label htmlFor='contactPerson' id='contactPersonLabel'>{
                eng ? 'Contact person' : 'Kontaktperson'
              }*</label>
              <input
                type='text' name='contactPerson'
                aria-labelledby='contactPersonLabel'
                value={this.state.contactPerson}
                onChange={this.handleInputChange}
              />
            </Styled.InputContainer>
          }

          <Styled.InputContainer>
            <label htmlFor='phone' id='phoneLabel'>{
              eng ? 'Phone' : 'Telefon'
            }*</label>
            <input
              type='tel' name='phone'
              aria-labelledby='phoneLabel'
              value={this.state.phone}
              onChange={this.handleInputChange}
            />
          </Styled.InputContainer>

          <Styled.InputContainer>
            <label htmlFor='email' id='emailLabel'>{
              eng ? 'Email' : 'E-post'
            }*</label>
            <input
              type='mail' name='email'
              aria-labelledby='emailLabel'
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </Styled.InputContainer>

          {
            isOrganization &&
            <Styled.InputContainer>
              <label htmlFor='mobile' id='mobileLabel'>{
                eng ? 'Mobile phone' : 'Mobilnummer'
              }</label>
              <input
                type='tel' name='mobile'
                aria-labelledby='mobileLabel'
                value={this.state.mobile}
                onChange={this.handleInputChange}
              />
            </Styled.InputContainer>
          }

          {
            !isOrganization &&
            <Styled.InputContainer>
              <label htmlFor='applicantName' id='applicantNameLabel'>{
                eng ? 'Name of receiver of funds' : 'Namn mottagare av sökta medel'
              }*</label>
              <input
                type='text' name='applicantName'
                aria-labelledby='applicantNameLabel'
                value={this.state.applicantName}
                onChange={this.handleInputChange}
              />
            </Styled.InputContainer>
          }

          {
            !isOrganization &&
            <Styled.InputContainer>
              <label htmlFor='applicantBirthdate' id='applicantBirthdateLabel'>{
                eng ? 'Birthdate of receiver of funds' : 'Födelsedata mottagare av sökta medel'
              }*</label>
              <input
                type='text' name='applicantBirthdate'
                aria-labelledby='applicantBirthdateLabel'
                value={this.state.applicantBirthdate}
                onChange={this.handleInputChange}
              />
            </Styled.InputContainer>
          }
        </div>
      </Styled.Fieldset>
    );
  }
}

export default ContactDetails;
