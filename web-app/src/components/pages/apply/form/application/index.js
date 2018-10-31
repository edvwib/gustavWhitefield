import React, { Component } from 'react';
import { Container } from './style';

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descriptionProject: '', // Beskrivning av ändamål/projekt/aktivitet:
      disability: '', // Beskriv individens/individernas funktionshinder:
      beneficiaryCount: '', // Hur många individer kommer att få ta del av aktiviteten samt eventuell personal som kommer delta?
      selfesteemHappiness: '', // Hur ökar aktiviteten individens självkänsla och glädje?
      bodySpatialAwareness: '', // Hur ökar aktiviteten individens kropp- och rumsuppfattning?
      educationalValue: '', // Vilket pedagogiskt värde har aktiviteten?
      other: '', // övrigt
      when: '', // När kommer aktiviteten genomföras?
    };
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
  }

  render() {
    const {eng, isOrganization} = this.props;
    return (
      <Container>
        <fieldset>
          <legend>{eng ? 'Application' : 'Ansökan'}</legend>

          {/* Beskrivning av ändamål/projekt/aktivitet: */}
          <label htmlFor="descriptionProject">{
            isOrganization ?
              eng ? 'Description of purpose/project/activity' :
                'Beskrivning av ändamål/projekt/aktivitet' :
              eng ? 'Description of purpose/activity' :
                'Beskrivning av ändamål/aktivitet'
          }</label>
          <textarea
            name="descriptionProject"
            value={this.state.descriptionProject}
            onChange={this.handleInputChange}
          />

          {/* Beskriv individens/individernas funktionshinder: */}
          <label htmlFor="disability">{
            isOrganization ?
              eng ? 'Describe the indivuals disabilities' :
                'Beskriv individens/individernas funktionshinder' :
              eng ? 'Describe the indivuals disabilities' :
                'Beskriv individens funktionshinder'
          }</label>
          <textarea
            name="disability"
            value={this.state.disability}
            onChange={this.handleInputChange}
          />

          {/* Hur många individer kommer att få ta del av aktiviteten samt eventuell personal som kommer delta? */}
          {
            isOrganization &&
              <React.Fragment>
                <label htmlFor="beneficiaryCount">{
                  eng ? 'How many individuals/personell will take part in the activity?' :
                    'Hur många individer kommer att få ta del av aktiviteten samt eventuell personal som kommer delta?'
                }</label>
                <textarea
                  name="beneficiaryCount"
                  value={this.state.beneficiaryCount}
                  onChange={this.handleInputChange}
                />
              </React.Fragment>
          }


          {/* Hur ökar aktiviteten individens självkänsla och glädje? */}
          <label htmlFor="selfesteemHappiness">{
            isOrganization ?
              eng ? 'How will the activity increase the individuals selfesteem and happiness?' :
                'Hur ökar aktiviteten individens självkänsla och glädje?' :
              eng ? 'How will the individuals selfesteem and happiness strenghten via the eventual subsidy?' :
                'Hur stärks personens självkänsla och glädje genom det eventuella bidraget?'
          }</label>
          <textarea
            name="selfesteemHappiness"
            value={this.state.selfesteemHappiness}
            onChange={this.handleInputChange}
          />

          {/* Hur ökar aktiviteten individens kropp- och rumsuppfattning? */}
          <label htmlFor="bodySpatialAwareness">{
            isOrganization ?
              eng ? 'How will the activity increase bodily and spatial awareness?' :
                'Hur ökar aktiviteten individens kropp- och rumsuppfattning?' :
              eng ? 'How will the individuals bodily and spatial awareness strenghten via the eventual subsidy?' :
                'Hur stärks personens kropp- och rumsuppfattning genom det eventuella bidraget?'          }</label>
          <textarea
            name="bodySpatialAwareness"
            value={this.state.bodySpatialAwareness}
            onChange={this.handleInputChange}
          />

          {/* Vilket pedagogiskt värde har aktiviteten? */}
          {
            isOrganization &&
              <React.Fragment>
                <label htmlFor="educationalValue">{
                  eng ? 'What educational value does the activity bring?' :
                    'Vilket pedagogiskt värde har aktiviteten?'
                }</label>
                <textarea
                  name="educationalValue"
                  value={this.state.educationalValue}
                  onChange={this.handleInputChange}
                />
              </React.Fragment>
          }


          {/* Övrigt */}
          <label htmlFor="other">{
            eng ? 'Other' :
              'Övrigt'
          }</label>
          <textarea
            name="other"
            value={this.state.other}
            onChange={this.handleInputChange}
          />

          {/* När kommer aktiviteten genomföras? */}
          <label htmlFor="when">{
              eng ? 'When is the activity planned? ' :
                'När kommer aktiviteten genomföras?'
          }</label>
          <textarea
            name="when"
            value={this.state.when}
            onChange={this.handleInputChange}
          />
        </fieldset>
      </Container>
    );
  }
}

export default Application;
