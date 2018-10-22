import React, { Component } from 'react';
import { Glob } from '../context';
import { Container } from './style';
import MainNav from './mainNav';

class Nav extends Component {

  state={
    items: {
      en: [
        {name: 'About Gustav', path: '/about'},
        {name: 'About The Foundation', path: '/about'},
        {name: 'Apply For Contribution', path: '/about'},
        {name: 'We Thank', path: '/we-thank'},
        {name: 'Support Us', path: '/support-us'},
        {name: 'Contact Us', path: '/about'}
      ],
      sv: [
        {name: 'Om Gustav', path: '/about'},
        {name: 'Om Stiftelsen', path: '/about'},
        {name: 'Sök Bidrag', path: '/about'},
        {name: 'Vi Tackar', path: '/we-thank'},
        {name: 'Stöd Oss', path: '/support-us'},
        {name: 'Kontakta Oss', path: '/about'}
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
                context.state.eng ?
                <MainNav items={this.state.items.en}/> :
                <MainNav items={this.state.items.sv}/>
              }
            </Container>
          )
        }
      </Glob.Consumer>
    );
  }
}

export default Nav;
