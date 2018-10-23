import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, LinkWrap } from './style';

class MainNav extends Component{

  render() {
    return (
      <Container>
        {
          this.props.items.map((item, index) =>
          <LinkWrap key={index}>
            <Link to={item.path} >{item.name}</Link>
          </LinkWrap>
        )}
      </Container>
    );
  }
}

export default MainNav;
