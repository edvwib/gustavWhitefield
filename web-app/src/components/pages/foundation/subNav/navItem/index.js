import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, LinkWrap } from './style';

class NavItem extends Component{

  render() {
    return (
      <Container>
        {
          this.props.items.map((item, index) =>
          <LinkWrap key={index}>
            <NavLink exact to={item.path}>{item.name}</NavLink>
          </LinkWrap>
        )
      }
    </Container>
  );
}
}

export default NavItem;
