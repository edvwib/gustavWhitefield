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
    const container = document.querySelector('.container');
    const content = this.props.items && this.props.items.map((item) => this.props.eng ? item.contentENG : item.contentSV);
    const elements = content && content.map((item, index, array) => {
      item = `<h3><span>${item}`;
      item = item.replace(/ /g, '</span><span>')
      item = `${item}</span></h3>`;
      return item;
    });
    container.innerHTML = '';
    elements && elements.forEach(item => container.innerHTML += item);
    Array.from(container.childNodes).forEach(child => this.anime(child, timeline));
  }

  anime = (child, timeline) => {
    timeline
    .add({
      targets: child.childNodes,
      translateY: [100,0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 2400,
      delay: function(el, i) {
        return 300 + 500 * i;
      }
    })
    .add({
      targets: child.childNodes,
      translateY: [0,-100],
      opacity: [1,0],
      easing: "easeInExpo",
      duration: 2200,
      delay: function(el, i) {
        return 100 + 500 * i;
      }
    });
  }

  render() {
    return (
      <Container className='container'/>
    );
  }
}

export default WeSupport;
