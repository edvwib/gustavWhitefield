import React, { Component } from 'react';
import { Glob } from '../context';
import { Container } from './style';
import NavItem from './navItem';

class Nav extends Component {

  state={
    items: {
      en: [
        {name: '', path: '/'},
        {name: 'About Gustav', path: '/about-gustav'},
        {name: 'The Foundation', path: '/the-foundation'},
        {name: 'Apply', path: '/apply'},
        {name: 'Support Us', path: '/support-us'}
      ],
      sv: [
        {name: '', path: '/'},
        {name: 'Om Gustav', path: '/om-gustav'},
        {name: 'Om Stiftelsen', path: '/om-stiftelsen'},
        {name: 'Sök Bidrag', path: '/sok-bidrag'},
        {name: 'Stöd Oss', path: '/stod-oss'}
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
                <NavItem eng={context.state.eng} items={this.state.items.en}/> :
                <NavItem eng={context.state.eng} items={this.state.items.sv}/>
              }
            </Container>
          )
        }
      </Glob.Consumer>
    );
  }
}

export default Nav;
