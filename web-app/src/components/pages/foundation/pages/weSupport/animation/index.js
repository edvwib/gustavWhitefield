import React, { Component } from 'react';
import anime from 'animejs';
import { Container } from './style';


class WeSupport extends Component {

  componentDidMount(){
    this.initAnime();
  }

  componentDidUpdate(){
    this.initAnime();
  }

  initAnime = () => {
    const timeline = anime.timeline({loop: true});
    let container = document.querySelector('.container').childNodes;

    container.forEach((item) => {
      let text = item.innerHTML;
      let newText = '';

      for (var i = 0; i < text.length; i++) {
        newText += `<span>${text[i]}</span>`;
      }
      item.innerHTML = newText;
      this.anime(item, timeline);
    })
  }

  anime = (item, timeline) => {
    timeline
    .add({
      targets: item.childNodes,
      // translateY: [100,0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 2400,
      delay: function(el, i) {
        return 300 + 30 * i;
      }
    })
    .add({
      targets: item.childNodes,
      translateY: [0,-100],
      opacity: [1,0],
      easing: "easeInExpo",
      duration: 2200,
      delay: function(el, i) {
        return 100 + 30 * i;
      }
    });
  }

  render() {
    return (
      <Container className='container'>
        {
          this.props.items.map((item, index) =>
          <h2 key={index}>{this.props.eng ? item.contentENG : item.contentSV}</h2>
        )
        }
      </Container>
    );
  }
}

export default WeSupport;
