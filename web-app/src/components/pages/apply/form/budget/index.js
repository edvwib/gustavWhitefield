import React, { Component } from 'react';
import { Container } from './style';

class Budget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subsidy: '', // Sökt belopp
      partialFinancing: false, // Om vi inte kan dela ut det sökta beloppet, är ni då intresserad av delfinansiering?
      partialSubsidy: '', // Sökt delbelopp:
      multipleInstitutions: false, // Söker ni bidrag från fler stiftelser?
      budget: '', // Redogör för budget:
      guarantee: '', // Hur garanterar ni att aktiviteten genomförs? Kan Stiftelsen erhålla kvitto eller motsvarande?
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
  }

  render() {
    const {eng, isOrganization} = this.props;
    return (
      <Container>
        <fieldset>
          <legend>{isOrganization ? eng ? 'Amount & budget' : 'Belopp och budget' : eng ? 'Amount' : 'Belopp'}</legend>

          <div className='grid'>
            <div>
              {/* Sökt belopp */}
              <label htmlFor="subsidy">{
                eng ? 'Requested amount' : 'Sökt belopp'
              }</label>
              <input
                type="text" name="subsidy"
                value={this.state.subsidy}
                onChange={this.handleInputChange}
              />
            </div>

            <div className='partialFinancingContainer'>
              {/* Om vi inte kan dela ut det sökta beloppet, är ni då intresserad av delfinansiering? */}
              <label htmlFor="partialFinancing">
                {eng ? 'If we are unable to hand out the requested amount, will you then be interested in partial financing?' : 'Om vi inte kan dela ut det sökta beloppet, är ni då intresserad av delfinansiering?'}
              </label>
              <label htmlFor="yesPartialFinancing" className={this.state.partialFinancing ? 'active' : ''}>
                {eng ? 'Yes' : 'Ja'}
              </label>
              <input
                type="radio" name="partialFinancing" id="yesPartialFinancing"
                checked={this.state.partialFinancing}
                value={true}
                onChange={this.handleInputChange}
              />
              <label htmlFor="noPartialFinancing" className={!this.state.partialFinancing ? 'active' : ''}>
                {eng ? 'No' : 'Nej'}
              </label>
              <input
                type="radio" name="partialFinancing" id="noPartialFinancing"
                checked={!this.state.partialFinancing}
                value={false}
                onChange={this.handleInputChange}
              />
            </div>

            <div>
              {/* Sökt delbelopp */}
              {
                this.state.partialFinancing &&
                  <React.Fragment>
                    <label htmlFor="partialSubsidy">{
                      eng ? 'Sökt delbelopp' : 'Sökt delbelopp'
                    }</label>
                    <input
                      type="text" name="partialSubsidy"
                      value={this.state.partialSubsidy}
                      onChange={this.handleInputChange}
                    />
                  </React.Fragment>
              }
            </div>

            <div className='multipleInstitutionsContainer'>
              {/* Söker ni bidrag från fler stiftelser? */}
              <label htmlFor="multipleInstitutions">{
                eng ? 'Are you applying from any other funds/institutions?' : 'Söker ni bidrag från fler stiftelser?'
              }</label>
              <label htmlFor="yesMultipleInstitutions" className={this.state.multipleInstitutions ? 'active' : ''}>
                {eng ? 'Yes' : 'Ja'}
              </label>
              <input
                type="radio" name="multipleInstitutions" id="yesMultipleInstitutions"
                checked={this.state.multipleInstitutions}
                value={true}
                onChange={this.handleInputChange}
              />
              <label htmlFor="noMultipleInstitutions" className={!this.state.multipleInstitutions ? 'active' : ''}>
                {eng ? 'No' : 'Nej'}
              </label>
              <input
                type="radio" name="multipleInstitutions" id="noMultipleInstitutions"
                checked={!this.state.multipleInstitutions}
                value={false}
                onChange={this.handleInputChange}
              />
            </div>

            <div>
              {/* Redogör för budget: */}
              {
                isOrganization &&
                  <React.Fragment>
                    <label htmlFor="budget">{
                      eng ? 'Explain the budget' : 'Redogör för budget'
                    }</label>
                    <textarea
                      name="budget"
                      value={this.state.budget}
                      onChange={this.handleInputChange}
                    />
                  </React.Fragment>
              }
            </div>

            <div>
              {/* Hur garanterar ni att aktiviteten genomförs? Kan Stiftelsen erhålla kvitto eller motsvarande? */}
              <label htmlFor="guarantee">{
                isOrganization ?
                  eng ? 'How can you guerantee that the activity will carry through? Can the institute receive reciepts etc.?' :
                    'Hur garanterar ni att aktiviteten genomförs? Kan Stiftelsen erhålla kvitto eller motsvarande?' :
                  eng ? 'How can you guerantee that the activity will carry through? Can the institute receive reciepts etc.?' :
                    'Hur garanterar ni att ändamålet/aktiviteten genomförs? Kan Stiftelsen erhålla kvitto eller motsvarande?'
              }</label>
              <textarea
                name="guarantee"
                value={this.state.guarantee}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
        </fieldset>
      </Container>
    );
  }
}

export default Budget;
