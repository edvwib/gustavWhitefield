import React, { Component } from 'react';
import { Container, Wrapper } from './style';

class MenuBtn extends Component{

  render() {
    return (
      <Container onClick={this.props.updateOpen}>
        <Wrapper open={this.props.open}>
          <span/>
          <span/>
          <span/>
        </Wrapper>
      </Container>
    );
  }
}

export default MenuBtn;
