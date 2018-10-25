import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, LinkWrap } from './style';

import MenuBtn from './MenuBtn';

class MainNav extends Component{

  state={
    open: false
  }

  updateOpen = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return (
      <Container open={this.state.open}>
        <MenuBtn open={this.state.open} updateOpen={this.updateOpen}/>
        {
          this.props.items.map((item, index) =>
          <LinkWrap key={index}>
            {
              item.name === '' &&
              <NavLink to={item.path}>
                { this.props.eng ?
                  <img src='resources/icons/bigIconEng.png' alt='Icon English'/>
                  :
                  <img src='resources/icons/bigIcon.png' alt='Icon Swedish'/>
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
