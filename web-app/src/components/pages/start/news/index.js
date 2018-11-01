import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { Container, ArtBtn } from './style';

import Articles from './articles';

class News extends Component {

  render() {
    return (
      <Container>
        {
          this.props.news &&
          this.props.news.map((item, index) =>
          index < 3 &&
          <Articles eng={this.props.eng} first={index === 0} key={index} news={item}/>)
        }
        {
          this.props.eng ?
          <ArtBtn>
            <NavLink to={'/articles'}>All Articles</NavLink>
          </ArtBtn>
          :
          <ArtBtn>
            <NavLink to={'/articles'}>Alla Artiklar</NavLink>
          </ArtBtn>
        }
      </Container>
    );
  }
}

export default News;
