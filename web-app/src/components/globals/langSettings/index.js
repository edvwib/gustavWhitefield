import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Glob } from '../../globals/context';
import { Container, Image } from './style';

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
                <Image src={context.state.eng ? 'resources/icons/bigIconEng.png' : 'resources/icons/bigIcon.png'}/>
            </Container>
          )
        }
      </Glob.Consumer>
    );
  }
}

export default LangSettings;
