import React, { Component } from 'react';
import anime from 'animejs';
import { Container } from './style';
import iconLion from '../../../resources/icons/lion.svg';

class Loading extends Component {

  componentDidMount(){
    this.initTxtAnime();
  }

  initTxtAnime = () => {
    let title = document.querySelector('.loading');
    let text = title.innerHTML;
    let newText = '';

    for (var i = 0; i < text.length; i++) {
      newText += `<span>${text[i]}</span>`;
    }

    title.innerHTML = newText;
    this.animeTxt();

  }

  animeTxt = () => {
    anime.timeline({loop: true})
    .add({
      targets: '.loading span',
      translateX: [40,0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: function(el, i) {
        return 500 + 30 * i;
      }
    }).add({
      targets: '.loading span',
      translateX: [0,-30],
      opacity: [1,0],
      easing: "easeInExpo",
      duration: 1100,
      delay: function(el, i) {
        return 100 + 30 * i;
      }
    });
  }

  render() {
    return (
      <Container>
        <img src={iconLion} alt='Gustav Whitefield'/>
        <h2 className='loading'>
          {navigator.language.toLowerCase() === 'sv-se' ? 'Laddar' : 'Loading'}
        </h2>
      </Container>
    );
  }
}

export default Loading;
