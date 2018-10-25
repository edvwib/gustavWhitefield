import React, { Component } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { NavLink } from 'react-router-dom';
import { Container, LinkWrap } from './style';

import MenuBtn from './MenuBtn';
import LangSettings from '../../header/langSettings';

class MainNav extends Component{

  state={
    open: false
  }

  updateOpen = () => {
    this.setState({open: !this.state.open})
    this.state.open ? enableBodyScroll(null) : disableBodyScroll(null);
    !this.state.open && window.scrollTo(0, 0);
  }

  render() {
    return (
      <Container open={this.state.open}>
        <MenuBtn open={this.state.open} updateOpen={this.updateOpen}/>
        {
          this.props.items.map((item, index) =>
          <LinkWrap open={this.state.open} key={index}>
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
        <LangSettings showInMob={this.state.open}/>
      </Container>
    );
  }
}

export default MainNav;
