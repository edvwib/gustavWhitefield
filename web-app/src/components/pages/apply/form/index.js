import React, { Component } from 'react';
import { Container } from './style';
import ContactDetails from './contactDetails';
import Application from './application';
import Budget from './budget';


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOrganization: true,
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

  handleSubmit = (event) => {
    event.preventDefault();

    const params = {
      body: {
        isOrganization: this.state.isOrganization,
        contact: this.contact.state,
        application: this.application.state,
        budget: this.budget.state,
      },
      method: 'POST',
    };
    console.log(params);

    fetch('http://localhost:8888/wp-json/api/v1/application/', params)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
  }

  render() {
    const {eng} = this.props;
    return (
      <Container>
        <form onSubmit={this.handleSubmit}>
          <legend>Sök bidrag</legend>

          <input
            type="radio" name="isOrganization" id="organization"
            checked={this.state.isOrganization}
            value={true}
            onChange={this.handleInputChange}
          />
          <label htmlFor="organization">
            {eng ? 'Organization' : 'Organisation'}
          </label>
          <input
            type="radio" name="isOrganization" id="notOrganization"
            checked={!this.state.isOrganization}
            value={false}
            onChange={this.handleInputChange}
          />
          <label htmlFor="notOrganization">
            {eng ? 'Individual' : 'Privatperson'}
          </label>

          <ContactDetails eng={eng} isOrganization={this.state.isOrganization}
            ref={(contact) => { this.contact = contact;}}/>
          <Application eng={eng} isOrganization={this.state.isOrganization}
            ref={(application) => { this.application = application; }}/>
          <Budget eng={eng} isOrganization={this.state.isOrganization}
            ref={(budget) => { this.budget = budget; }}/>

          <input type="submit" value={eng ? 'Send application' : 'Skicka ansökan'}/>
        </form>
      </Container>
    );
  }
}

export default Form;
