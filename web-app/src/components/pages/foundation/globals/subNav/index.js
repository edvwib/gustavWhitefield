import React, { Component } from 'react';
// import { Glob } from '../../../../components/globals/context';
import { Container } from './style';

import NavItem from './navItem';

class SubNav extends Component {

  state={
    items: {
      en: [
        {name: 'Purpose', path: '/the-foundation'},
        {name: 'We support', path: '/the-foundation/we-support'},
        {name: 'The board', path: '/the-foundation/the-board'},
        {name: 'Statutes', path: '/the-foundation/statutes'},
        {name: 'Economy', path: '/the-foundation/economy'}
      ],
      sv: [
        {name: 'Syfte', path: '/om-stiftelsen'},
        {name: 'Vi stödjer', path: '/om-stiftelsen/vi-stodjer'},
        {name: 'Styrelsen', path: '/om-stiftelsen/styrelsen'},
        {name: 'Stadgar', path: '/om-stiftelsen/stadgar'},
        {name: 'Ekonomi', path: '/om-stiftelsen/ekonomi'}
      ]
    }
  }

  render() {
    return (
      <Container>
        {
          this.props.eng ?
          <NavItem eng={this.props.eng} items={this.state.items.en}/> :
          <NavItem eng={this.props.eng} items={this.state.items.sv}/>
        }
      </Container>
    );
  }
}

export default SubNav;
