import React, { Component } from 'react';
import * as Styled from './style';
import { getInputDetails, setTextareaHeight, saveFormData } from './../formHelpers';

class Budget extends Component {
  initialState = {
    subsidy: '',
    partialFinancing: false,
    partialSubsidy: '',
    multipleInstitutions: false,
    budget: '',
    guarantee: '',
  };
  state = this.initialState;

  componentDidMount = () => {
    if (this.props.cookieConsent()) {
      this.setState({
        ...JSON.parse(window.localStorage.getItem('budget')),
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

    if (this.props.cookieConsent())
      saveFormData('budget', this.state);
  }

  render() {
    const { eng, isOrganization } = this.props;
    return (
      <Styled.Fieldset>
        <legend>{isOrganization ? eng ? 'Amount & budget' : 'Belopp och budget' : eng ? 'Amount' : 'Belopp'}</legend>

        <div className='grid'>
          <Styled.InputContainer>
            <label htmlFor='subsidy' id='subsidyLabel'>{
              eng ? 'Requested amount' : 'Sökt belopp'
            }*</label>
            <input
              type='text' name='subsidy'
              aria-labelledby='subsidyLabel'
              value={this.state.subsidy}
              onChange={this.handleInputChange}
            />
          </Styled.InputContainer>

          <Styled.InputContainer className='partialFinancingContainer'>
            <label htmlFor='partialFinancing'>
              {eng ? 'If we are unable to hand out the requested amount, will you then be interested in partial financing?' : 'Om vi inte kan dela ut det sökta beloppet, är ni då intresserad av delfinansiering?'}*
            </label>
            <input
              type='radio' name='partialFinancing' id='yesPartialFinancing'
              aria-labelledby='yesPartialFinancing noPartialFinancing'
              checked={this.state.partialFinancing}
              value={true}
              onChange={this.handleInputChange}
            />
            <label htmlFor='yesPartialFinancing' className={this.state.partialFinancing ? 'active' : ''}>
              {eng ? 'Yes' : 'Ja'}
            </label>
            <input
              type='radio' name='partialFinancing' id='noPartialFinancing'
              aria-labelledby='yesPartialFinancing noPartialFinancing'
              checked={!this.state.partialFinancing}
              value={false}
              onChange={this.handleInputChange}
            />
            <label htmlFor='noPartialFinancing' className={!this.state.partialFinancing ? 'active' : ''}>
              {eng ? 'No' : 'Nej'}
            </label>
          </Styled.InputContainer>

          <Styled.InputContainer>
            {
              this.state.partialFinancing &&
              <React.Fragment>
                <label htmlFor='partialSubsidy' id='partialSubsidyLabel'>{
                  eng ? 'Sökt delbelopp' : 'Sökt delbelopp'
                }*</label>
                <input
                  type='text' name='partialSubsidy'
                  aria-labelledby='partialSubsidyLabel'
                  value={this.state.partialSubsidy}
                  onChange={this.handleInputChange}
                />
              </React.Fragment>
            }
          </Styled.InputContainer>

          <Styled.InputContainer className='multipleInstitutionsContainer'>
            <label htmlFor='multipleInstitutions'>{
              eng ? 'Are you applying from any other funds/institutions?' : 'Söker ni bidrag från fler stiftelser?'
            }*</label>
            <input
              type='radio' name='multipleInstitutions' id='yesMultipleInstitutions'
              aria-labelledby='yesMultipleInstitutions noMultipleInstitutions'
              checked={this.state.multipleInstitutions}
              value={true}
              onChange={this.handleInputChange}
            />
            <label htmlFor='yesMultipleInstitutions' className={this.state.multipleInstitutions ? 'active' : ''}>
              {eng ? 'Yes' : 'Ja'}
            </label>
            <input
              type='radio' name='multipleInstitutions' id='noMultipleInstitutions'
              aria-labelledby='yesMultipleInstitutions noMultipleInstitutions'
              checked={!this.state.multipleInstitutions}
              value={false}
              onChange={this.handleInputChange}
            />
            <label htmlFor='noMultipleInstitutions' className={!this.state.multipleInstitutions ? 'active' : ''}>
              {eng ? 'No' : 'Nej'}
            </label>
          </Styled.InputContainer>

          <Styled.InputContainer>
            {
              isOrganization &&
              <React.Fragment>
                <label htmlFor='budget' id='budgetLabel'>{
                  eng ? 'Explain the budget' : 'Redogör för budget'
                }*</label>
                <textarea
                  name='budget'
                  aria-labelledby='budgetLabel'
                  value={this.state.budget}
                  onChange={this.handleInputChange}
                />
              </React.Fragment>
            }
          </Styled.InputContainer>

          <Styled.InputContainer>
            <label htmlFor='guarantee' id='guaranteeLabel'>{
              isOrganization ?
                eng ? 'How can you guerantee that the activity will carry through? Can the institute receive reciepts etc.?' :
                  'Hur garanterar ni att aktiviteten genomförs? Kan Stiftelsen erhålla kvitto eller motsvarande?' :
                eng ? 'How can you guerantee that the activity will carry through? Can the institute receive reciepts etc.?' :
                  'Hur garanterar ni att ändamålet/aktiviteten genomförs? Kan Stiftelsen erhålla kvitto eller motsvarande?'
            }*</label>
            <textarea
              name='guarantee'
              aria-labelledby='guaranteeLabel'
              value={this.state.guarantee}
              onChange={this.handleInputChange}
            />
          </Styled.InputContainer>
        </div>
      </Styled.Fieldset>
    );
  }
}

export default Budget;
