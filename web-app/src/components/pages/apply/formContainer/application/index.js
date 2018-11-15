import React, { Component } from 'react';
import * as Styled from './style';
import { getInputDetails, setTextareaHeight, saveFormData } from './../formHelpers';

class Application extends Component {
  state = {
    descriptionProject: '',
    disability: '',
    beneficiaryCount: '',
    selfesteemHappiness: '',
    bodySpatialAwareness: '',
    educationalValue: '',
    other: '',
    when: '',
  };

  componentDidMount = () => {
    if (this.props.cookieConsent()) {
      this.setState({
        ...JSON.parse(window.localStorage.getItem('application')),
      });
    }
  }

  handleInputChange = (event) => {
    const e = getInputDetails(event);

    if (e.type.toLowerCase() === 'textarea') {
      setTextareaHeight(e.target);
    }

    this.setState({
      [e.name]: e.value,
    });

    if(this.props.cookieConsent())
      saveFormData('application', this.state);
  }

  render() {
    const { eng, isOrganization } = this.props;
    return (
      <Styled.Fieldset>
        <legend>{eng ? 'Application' : 'Ansökan'}</legend>

        <div className='grid'>
          <Styled.InputContainer>
            <label htmlFor='descriptionProject'>{
              isOrganization ?
                eng ? 'Description of purpose/project/activity' :
                  'Beskrivning av ändamål/projekt/aktivitet' :
                eng ? 'Description of purpose/activity' :
                  'Beskrivning av ändamål/aktivitet'
            }</label>
            <textarea
              name='descriptionProject'
              value={this.state.descriptionProject}
              onChange={this.handleInputChange}
            />
          </Styled.InputContainer>

          <Styled.InputContainer>
            <label htmlFor='disability'>{
              isOrganization ?
                eng ? 'Describe the indivuals disabilities' :
                  'Beskriv individens/individernas funktionshinder' :
                eng ? 'Describe the indivuals disabilities' :
                  'Beskriv individens funktionshinder'
            }</label>
            <textarea
              name='disability'
              value={this.state.disability}
              onChange={this.handleInputChange}
            />
          </Styled.InputContainer>

          {isOrganization &&
            <Styled.InputContainer>
                <label htmlFor='beneficiaryCount'>{
                  eng ? 'How many individuals/personell will take part in the activity?' :
                    'Hur många individer kommer att få ta del av aktiviteten samt eventuell personal som kommer delta?'
                }</label>
                <textarea
                  name='beneficiaryCount'
                  value={this.state.beneficiaryCount}
                  onChange={this.handleInputChange}
                />
           </Styled.InputContainer>
          }

          <Styled.InputContainer>
            <label htmlFor='selfesteemHappiness'>{
              isOrganization ?
                eng ? 'How will the activity increase the individuals selfesteem and happiness?' :
                  'Hur ökar aktiviteten individens självkänsla och glädje?' :
                eng ? 'How will the individuals selfesteem and happiness strenghten via the eventual subsidy?' :
                  'Hur stärks personens självkänsla och glädje genom det eventuella bidraget?'
            }</label>
            <textarea
              name='selfesteemHappiness'
              value={this.state.selfesteemHappiness}
              onChange={this.handleInputChange}
            />
          </Styled.InputContainer>

          <Styled.InputContainer>
            <label htmlFor='bodySpatialAwareness'>{
              isOrganization ?
                eng ? 'How will the activity increase bodily and spatial awareness?' :
                  'Hur ökar aktiviteten individens kropp- och rumsuppfattning?' :
                eng ? 'How will the individuals bodily and spatial awareness strenghten via the eventual subsidy?' :
                  'Hur stärks personens kropp- och rumsuppfattning genom det eventuella bidraget?'}</label>
            <textarea
              name='bodySpatialAwareness'
              value={this.state.bodySpatialAwareness}
              onChange={this.handleInputChange}
            />
          </Styled.InputContainer>

          {isOrganization &&
            <Styled.InputContainer>
              <label htmlFor='educationalValue'>{
                eng ? 'What educational value does the activity bring?' :
                  'Vilket pedagogiskt värde har aktiviteten?'
              }</label>
              <textarea
                name='educationalValue'
                value={this.state.educationalValue}
                onChange={this.handleInputChange}
              />
            </Styled.InputContainer>
          }

          <Styled.InputContainer>
            <label htmlFor='other'>{
              eng ? 'Other' :
                'Övrigt'
            }</label>
            <textarea
              name='other'
              value={this.state.other}
              onChange={this.handleInputChange}
            />
          </Styled.InputContainer>

          <Styled.InputContainer>
            <label htmlFor='when'>{
              eng ? 'When is the activity planned? ' :
                'När kommer aktiviteten genomföras?'
            }</label>
            <textarea
              name='when'
              value={this.state.when}
              onChange={this.handleInputChange}
            />
          </Styled.InputContainer>
        </div>
      </Styled.Fieldset>
    );
  }
}

export default Application;