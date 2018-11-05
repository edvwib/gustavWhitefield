import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Glob } from '../../../globals/context';
import { Container } from './style';

class LangSettings extends Component {
  constructor() {
    super();
    this.eng = [
      '/about-gustav',
      '/the-foundation',
      '/the-foundation/we-support',
      '/the-foundation/statutes',
      '/the-foundation/the-board',
      '/the-foundation/economy',
      '/support-us',
      '/apply',
      '/article/',
      '/news',
    ];
    this.sv = [
      '/om-gustav',
      '/om-stiftelsen',
      '/om-stiftelsen/vi-stodjer',
      '/om-stiftelsen/stadgar',
      '/om-stiftelsen/styrelsen',
      '/om-stiftelsen/ekonomi',
      '/stod-oss',
      '/sok-bidrag',
      '/artikel/',
      '/nyheter',
    ];
  }

  translateURL = (eng) => {
    let index = eng ?
      this.eng.findIndex((x) => x === window.location.pathname) :
      this.sv.findIndex((x) => x === window.location.pathname);

    return index === -1 ? '/' : eng ? this.sv[index] : this.eng[index];
  }

  render() {
    return (
      <Glob.Consumer>
        {
          (context) => (
            <Container showInMob={this.props.showInMob} open={this.props.open} active={context.state.eng}>
              <NavLink to={this.translateURL(context.state.eng)} onClick={context.update}>Svenska</NavLink>
              <span />
              <NavLink to={this.translateURL(context.state.eng)} onClick={context.update}>English</NavLink>
            </Container>
          )
        }
      </Glob.Consumer>
    );
  }
}

export default LangSettings;
