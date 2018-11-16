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
            <label htmlFor='name'>{
              isOrganization ?
                eng ? 'Name organization' : 'Namn organisation' :
                eng ? 'Name applicant' : 'Namn sökande'
            }*</label>
            <input
              type='text' name='name'
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </Styled.InputContainer>

          {
            isOrganization &&
              <Styled.InputContainer>
                <label htmlFor='organizationNumber'>{
                  eng ? 'Organization number' : 'Organisationsnummer'
                }*</label>
                <input
                  type='text' name='organizationNumber'
                  value={this.state.organizationNumber}
                  onChange={this.handleInputChange}
                />
              </Styled.InputContainer>
          }

          <Styled.InputContainer>
            <label htmlFor='street'>{
              eng ? 'Street' : 'Gatuadress'
            }*</label>
            <input
              type='text' name='street'
              value={this.state.street}
              onChange={this.handleInputChange}
            />
          </Styled.InputContainer>

          <Styled.InputContainer>
            <label htmlFor='zip'>{
              eng ? 'Zip code' : 'Postnummer'
            }*</label>
            <input
              type='text' name='zip'
              value={this.state.zip}
              onChange={this.handleInputChange}
            />
          </Styled.InputContainer>

          <Styled.InputContainer>
            <label htmlFor='city'>{
              eng ? 'City' : 'Ort'
            }*</label>
            <input
              type='text' name='city'
              value={this.state.city}
              onChange={this.handleInputChange}
            />
          </Styled.InputContainer>

          {
            isOrganization &&
            <Styled.InputContainer>
              <label htmlFor='website'>{
                eng ? 'Website' : 'Hemsida'
              }</label>
              <input
                type='text' name='website'
                value={this.state.website}
                onChange={this.handleInputChange}
              />
            </Styled.InputContainer>
          }

          {
            isOrganization &&
            <Styled.InputContainer>
              <label htmlFor='contactPerson'>{
                eng ? 'Contact person' : 'Kontaktperson'
              }*</label>
              <input
                type='text' name='contactPerson'
                value={this.state.contactPerson}
                onChange={this.handleInputChange}
              />
            </Styled.InputContainer>
          }

          <Styled.InputContainer>
            <label htmlFor='phone'>{
              eng ? 'Phone' : 'Telefon'
            }*</label>
            <input
              type='tel' name='phone'
              value={this.state.phone}
              onChange={this.handleInputChange}
            />
          </Styled.InputContainer>

          <Styled.InputContainer>
            <label htmlFor='email'>{
              eng ? 'Email' : 'E-post'
            }*</label>
            <input
              type='mail' name='email'
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </Styled.InputContainer>

          {
            isOrganization &&
            <Styled.InputContainer>
              <label htmlFor='mobile'>{
                eng ? 'Mobile phone' : 'Mobilnummer'
              }</label>
              <input
                type='tel' name='mobile'
                value={this.state.mobile}
                onChange={this.handleInputChange}
              />
            </Styled.InputContainer>
          }

          {
            !isOrganization &&
            <Styled.InputContainer>
              <label htmlFor='applicantName'>{
                eng ? 'Name of receiver of funds' : 'Namn mottagare av sökta medel'
              }*</label>
              <input
                type='text' name='applicantName'
                value={this.state.applicantName}
                onChange={this.handleInputChange}
              />
            </Styled.InputContainer>
          }

          {
            !isOrganization &&
            <Styled.InputContainer>
              <label htmlFor='applicantBirthdate'>{
                eng ? 'Birthdate of receiver of funds' : 'Födelsedata mottagare av sökta medel'
              }*</label>
              <input
                type='text' name='applicantBirthdate'
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
