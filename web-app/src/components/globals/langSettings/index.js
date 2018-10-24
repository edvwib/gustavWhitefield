import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Glob } from '../../globals/context';
import { Container } from './style';

class LangSettings extends Component{


  render() {
    return (
      <Glob.Consumer>
        {
          (context) => (
            <Container active={context.state.eng}>
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
