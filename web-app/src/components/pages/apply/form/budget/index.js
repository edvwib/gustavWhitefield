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

    this.setState({
      [name]: value,
    });
  }

  render() {
    const {eng, isOrganization} = this.props;
    return (
      <Container>
        <fieldset>
          <legend>{isOrganization ? 'Belopp och budget' : 'Belopp'}</legend>

          {/* Sökt belopp */}
          <label htmlFor="subsidy">{
            eng ? 'Sökt belopp' : 'Sökt belopp'
          }</label>
          <input
            type="text" name="subsidy"
            value={this.state.subsidy}
            onChange={this.handleInputChange}
          />

          {/* Om vi inte kan dela ut det sökta beloppet, är ni då intresserad av delfinansiering? */}
          <label htmlFor="partialFinancing">
            {eng ? 'Om vi inte kan dela ut det sökta beloppet, är ni då intresserad av delfinansiering?' : ' Om vi inte kan dela ut det sökta beloppet, är ni då intresserad av delfinansiering?'}
          </label>
          <label htmlFor="yesPartialFinancing">
            {eng ? 'Yes' : 'Ja'}
          </label>
          <input
            type="radio" name="partialFinancing" id="yesPartialFinancing"
            checked={this.state.partialFinancing}
            value={true}
            onChange={this.handleInputChange}
          />
          <label htmlFor="noPartialFinancing">
            {eng ? 'No' : 'Nej'}
          </label>
          <input
            type="radio" name="partialFinancing" id="noPartialFinancing"
            checked={!this.state.partialFinancing}
            value={false}
            onChange={this.handleInputChange}
          />

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

          {/* Söker ni bidrag från fler stiftelser? */}
          <label htmlFor="multipleInstitutions">{
            eng ? 'Söker ni bidrag från fler stiftelser?' : 'Söker ni bidrag från fler stiftelser?'
          }</label>
          <label htmlFor="yesMultipleInstitutions">
            {eng ? 'Yes' : 'Ja'}
          </label>
          <input
            type="radio" name="multipleInstitutions" id="yesMultipleInstitutions"
            checked={this.state.multipleInstitutions}
            value={true}
            onChange={this.handleInputChange}
          />
          <label htmlFor="noMultipleInstitutions">
            {eng ? 'No' : 'Nej'}
          </label>
          <input
            type="radio" name="multipleInstitutions" id="noMultipleInstitutions"
            checked={!this.state.multipleInstitutions}
            value={false}
            onChange={this.handleInputChange}
          />

          {/* Redogör för budget: */}
          {
            isOrganization &&
              <React.Fragment>
                <label htmlFor="budget">{
                  eng ? 'Redogör för budget' :
                    'Redogör för budget'
                }</label>
                <textarea
                  name="budget"
                  value={this.state.budget}
                  onChange={this.handleInputChange}
                />
              </React.Fragment>
          }

          {/* Hur garanterar ni att aktiviteten genomförs? Kan Stiftelsen erhålla kvitto eller motsvarande? */}
          <label htmlFor="guarantee">{
            isOrganization ?
              eng ? 'Hur garanterar ni att aktiviteten genomförs? Kan Stiftelsen erhålla kvitto eller motsvarande?' :
                'Hur garanterar ni att aktiviteten genomförs? Kan Stiftelsen erhålla kvitto eller motsvarande?' :
              eng ? 'Hur garanterar ni att ändamålet/aktiviteten genomförs? Kan Stiftelsen erhålla kvitto eller motsvarande?' :
                'Hur garanterar ni att ändamålet/aktiviteten genomförs? Kan Stiftelsen erhålla kvitto eller motsvarande?'
          }</label>
          <textarea
            name="guarantee"
            value={this.state.guarantee}
            onChange={this.handleInputChange}
          />

        </fieldset>
      </Container>
    );
  }
}

export default Budget;
