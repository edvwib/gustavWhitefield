import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, LinkWrap } from './style';

class MainNav extends Component{

  render() {
    return (
      <Container>
        {
          this.props.items.map((item, index) =>
          <LinkWrap key={index}>
            {
              item.name === '' &&
              <NavLink to={item.path}>
                { this.props.eng ?
                  <img src='resources/icons/bigIconEng.png' alt='img'/>
                  :
                  <img src='resources/icons/bigIcon.png' alt='img'/>
                }
              </NavLink>
            }
            <NavLink to={item.path} >{item.name}</NavLink>
          </LinkWrap>
        )}
      </Container>
    );
  }
}

export default MainNav;
