import React, { Component } from 'react';
import { Container } from './style';
import Head from 'components/globals/head';
import Header from './header';
import Slider from './slider';
import News from './news';

class Start extends Component {

  render() {
    const { eng, pages, news } = this.props.content;
    return (
      <Container>
        <Head title={eng ? 'Home' : 'Hem'} />
        <Header
          eng={eng}
          page={pages.startpage}
        />
        <Slider
          eng={eng}
          page={pages.startpage}
        />
        <News
          eng={eng}
          news={news}
        />
      </Container>
    );
  }
}

export default Start;
