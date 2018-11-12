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

  componentDidMount = () => {
    if (this.props.cookieConsent()) {
      this.setState({
        ...JSON.parse(window.localStorage.getItem('application')),
      });
    }
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    if (target.type.toLowerCase() === 'textarea') {
      // Reset field height
      target.style.height = 'inherit';

      // Get the computed styles for the element
      var computed = window.getComputedStyle(target);

      // Calculate the height
      var height = parseInt(computed.getPropertyValue('border-top-width'), 10)
        + parseInt(computed.getPropertyValue('padding-top'), 10)
        + target.scrollHeight
        + parseInt(computed.getPropertyValue('padding-bottom'), 10)
        + parseInt(computed.getPropertyValue('border-bottom-width'), 10);

      target.style.height = height + 'px';
    }

    this.setState({
      [name]: value,
    });

    if(this.props.cookieConsent())
      this.props.saveFormData('application', this.state);
  }

  render() {
    const { eng, isOrganization } = this.props;
    return (
      <Container>
        <fieldset>
          <legend>{eng ? 'Application' : 'Ansökan'}</legend>

          <div className='grid'>
            <div>
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
            </div>

            <div>
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
            </div>

            <div>
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
            </div>

            <div>
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
            </div>

            <div>
              {/* Hur ökar aktiviteten individens kropp- och rumsuppfattning? */}
              <label htmlFor="bodySpatialAwareness">{
                isOrganization ?
                  eng ? 'How will the activity increase bodily and spatial awareness?' :
                    'Hur ökar aktiviteten individens kropp- och rumsuppfattning?' :
                  eng ? 'How will the individuals bodily and spatial awareness strenghten via the eventual subsidy?' :
                    'Hur stärks personens kropp- och rumsuppfattning genom det eventuella bidraget?'}</label>
              <textarea
                name="bodySpatialAwareness"
                value={this.state.bodySpatialAwareness}
                onChange={this.handleInputChange}
              />
            </div>

            <div>
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
            </div>

            <div>
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
            </div>

            <div>
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
            </div>
          </div>
        </fieldset>
      </Container>
    );
  }
}

export default Application;
