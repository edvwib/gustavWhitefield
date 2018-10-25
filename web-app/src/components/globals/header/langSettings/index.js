import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Glob } from '../../../globals/context';
import { Container, Image } from './style';

class LangSettings extends Component{


  render() {
    return (
      <Glob.Consumer>
        {
          (context) => (
            <Container showInMob={this.props.showInMob} open={this.props.open} active={context.state.eng}>
              <NavLink to='/' onClick={context.update}>Svenska</NavLink>
              <span/>
              <NavLink to='/' onClick={context.update}>English</NavLink>
            </Container>
          )
        }
      </Glob.Consumer>
    );
  }
}

export default LangSettings;
