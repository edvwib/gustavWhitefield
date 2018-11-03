import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Glob } from '../../../globals/context';
import { Container } from './style';

class LangSettings extends Component{
  translateURL = (eng) => {
    if (eng) {
      switch (window.location.pathname) {
        case '/about-gustav':
          return '/om-gustav'
        case '/the-foundation':
          return '/om-stiftelsen'
        case '/the-foundation/we-support':
          return '/om-stiftelsen/vi-stodjer'
        case '/the-foundation/statutes':
          return '/om-stiftelsen/stadgar'
        case '/the-foundation/the-board':
          return '/om-stiftelsen/styrelsen'
        case '/the-foundation/economy':
          return '/om-stiftelsen/ekonomi'
        case '/support-us':
          return '/stod-oss'
        case '/apply':
          return '/sok-bidrag'
        case '/article/':
          return '/artikel/'
        case '/news':
          return '/nyheter'
        default:
          return '/'
      }
    } else {
      switch (window.location.pathname) {
        case '/om-gustav':
          return '/about-gustav'
        case '/om-stiftelsen':
          return '/the-foundation'
        case '/om-stiftelsen/vi-stodjer':
          return '/the-foundation/we-support'
        case '/om-stiftelsen/stadgar':
          return '/the-foundation/statutes'
        case '/om-stiftelsen/styrelsen':
          return '/the-foundation/the-board'
        case '/om-stiftelsen/ekonomi':
          return '/the-foundation/economy'
        case '/stod-oss':
          return '/support-us'
        case '/sok-bidrag':
          return '/apply'
        case '/artikel/':
          return '/article/'
        case '/nyheter':
          return '/news'
        default:
          return '/'
      }
    }
  }

  render() {
    return (
      <Glob.Consumer>
        {
          (context) => (
            <Container showInMob={this.props.showInMob} open={this.props.open} active={context.state.eng}>
              <NavLink to={this.translateURL(context.state.eng)} onClick={context.update}>Svenska</NavLink>
              <span/>
              <NavLink to={this.translateURL(context.state.eng)} onClick={context.update}>English</NavLink>
            </Container>
          )
        }
      </Glob.Consumer>
    );
  }
}

export default LangSettings;
