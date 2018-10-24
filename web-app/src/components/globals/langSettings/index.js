import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Glob } from '../context';
import { Container } from './style';

class LangSettings extends Component{


  render() {
    return (
      <Glob.Consumer>
        {
          (context) => (
            <Container>
              {
                context.state.eng ?
                <NavLink to='/' onClick={context.update}>Svenska</NavLink> :
                <NavLink to='/' onClick={context.update}>English</NavLink>
              }
            </Container>
          )
        }
      </Glob.Consumer>
    );
  }
}

export default LangSettings;
