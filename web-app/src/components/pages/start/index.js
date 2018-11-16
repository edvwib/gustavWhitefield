import React, { Component } from 'react';
import { Container } from './style';
import Head from 'components/globals/head';
import Header from './header';
import Slider from './slider';
import News from './news';

class Start extends Component {

  render() {
    return (
      <Container>
        <Head title={this.props.content.eng ? 'Home' : 'Hem'}/>
        <Header
          eng={this.props.content.eng}
          page={this.props.content.pages.startpage}
        />
        <Slider
          eng={this.props.content.eng}
          page={this.props.content.pages.startpage}
        />
        <News
          eng={this.props.content.eng}
          news={this.props.content.news}
        />
      </Container>
    );
  }
}

export default Start;
