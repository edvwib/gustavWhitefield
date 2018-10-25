import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Glob } from '../../globals/context';
import { Container, Image } from './style';

import LangSettings from './langSettings';

class Header extends Component{


  render() {
    return (
      <Glob.Consumer>
        {
          (context) => (
            <Container active={context.state.eng}>
              <LangSettings showInMob={false}/>
              <Image
                showImg={this.props.showImg}
                src={context.state.eng ?
                  'resources/icons/bigIconEng.png' :
                  'resources/icons/bigIcon.png'
                }/>
              </Container>
            )
          }
        </Glob.Consumer>
      );
    }
  }

  export default Header;
