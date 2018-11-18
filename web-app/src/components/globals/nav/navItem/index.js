import React, { Component } from 'react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { NavLink } from 'react-router-dom';
import { Container, LinkWrap } from './style';

import MenuBtn from './MenuBtn';
import LangSettings from '../../header/langSettings';
import iconEng from '../../../../resources/icons/bigIconEng.png'
import iconSwe from '../../../../resources/icons/bigIcon.png'

class NavItem extends Component{

  state={
    open: false
  }

  updateOpen = () => {
    this.setState({open: !this.state.open});
    this.state.open ? enableBodyScroll(null) : disableBodyScroll(null);
    !this.state.open && window.scrollTo(0, 0);
  }

  componentWillUnmount(){
    clearAllBodyScrollLocks();
  }

  closeMenu = () => {
    this.state.open && this.setState({open: false});
    enableBodyScroll(null);
  }

  render() {
    const eng = this.props.eng;
    return (
      <Container open={this.state.open}>
        <MenuBtn open={this.state.open} updateOpen={this.updateOpen}/>
        {
          this.props.items.map((item, index) =>
          <LinkWrap onClick={this.closeMenu} open={this.state.open} key={index}>
            {
              item.name === '' &&
              <NavLink to={item.path} aria-label={eng ? 'Homepage' : 'Startsida'}>
                {eng ?
                  <img src={iconEng} alt='logo'/>
                  :
                  <img src={iconSwe} alt='logga'/>
                }
              </NavLink>
            }
            {
              item.name && <NavLink to={item.path}>{item.name}</NavLink>
            }
            </LinkWrap>
          )}
          <LangSettings open={this.state.open} showInMob={true}/>
        </Container>
      );
    }
  }

  export default NavItem;
