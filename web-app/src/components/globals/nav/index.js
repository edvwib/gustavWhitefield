import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Glob } from '../context';
import { Container } from './style';


// {context.state.test}
class Nav extends Component {

  state={
    pages: {
      'en': [
        'About Gustav',
        'About The Foundation',
        'Apply For Contribution',
        'We Thank',
        'Support us',
        'Contact us'
      ],
      'sv': [
        'Om Gustav',
        'Om Stiftelsen',
        'Sök Bidrag',
        'Vi Tackar',
        'Stöd Oss',
        'Kontakta Oss'
      ]
    }
  }

  render() {
    return (
      <Glob.Consumer>
        {
          (context) => (
            <Container>
              {
                context.state.language === 'en' ?
                <p>eng</p> :
                <p>sve</p>
              }
            </Container>
          )
        }
      </Glob.Consumer>

    );
  }
}

export default Nav;
