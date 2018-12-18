import React, { Component } from 'react';
import { Container, ImgWrapper } from './style';
import placeholder from 'resources/icons/placeholder.jpg';

class Article extends Component {

  state={
    image: placeholder
  }

  componentDidMount(){
    let img;
    if (this.props.images) {
      img = this.props.images.filter((image) => image.image !== false);
      img.length > 0 &&
      this.setState({image: img[0].image.sizes.large});
    }
    window.scrollTo(0, 0);
  }

  formatDate = (article) => {
    let date = new Date(article);
    return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
  }

  render() {
    return (
      <Container>
        <ImgWrapper>
          <img src={this.state.image} alt="icon"/>
        </ImgWrapper>
        <h3>{this.props.title}</h3>
        <p>{this.formatDate(this.props.date)} {this.props.intro}</p>
        <button>{this.props.eng ? 'Read more' : 'Läs mer'}</button>
      </Container>
    );
  }
}

export default Article;
