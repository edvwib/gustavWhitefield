import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { Container, Wrapper, Image, Text } from './style';
import placeholder from 'resources/icons/placeholder.jpg';

class Article extends Component {

  getImage = () => {
    const { images } = this.props.content;
    if (!images) return placeholder;

    let img;
    for (var i = 0; i < images.length; i++) {
      if (!Object.values(images[i])[0]) {
        if (i === images.length - 1) {
          img = placeholder;
        }
      }
      else {
        img = Object.values(images[i])[0];
        break;
      }
    }
    return typeof img === 'string' ? img : img.sizes.large
  }

  formatDate = (dateString) => {
    let string = dateString.split(' ');
    let date = new Date(string[0]);
    return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
  }

  render() {
    const { eng, content, first } = this.props;
    return (
      <Container>
        <Wrapper first={first}>
          <NavLink
            to={eng ?
              `/article/${content.id}` :
              `/artikel/${content.id}`
            }
            aria-label={content.title}
          >
            <Image src={this.getImage()} />
          </NavLink>
          <NavLink
            to={eng ?
              `/article/${content.id}` :
              `/artikel/${content.id}`
            }
            aria-label={content.title}
          >
            <Text first={first}>
              <h2>{content.title}</h2>
              <p>{this.formatDate(content.date)} {content.intro}</p>
              <small>{eng ? 'Read more' : 'Läs mer'}</small>
            </Text>
          </NavLink>
        </Wrapper>
      </Container>
    );
  }
}

export default Article;
