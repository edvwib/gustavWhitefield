import styled from 'styled-components';

export const Container = styled.div`
div{
  background-color: white;
}
ul.control-dots{
  padding: 0;
}
li.slide.selected{
  background-color: white;
}
.carousel .control-dots .dot{
  background: var(--dark-green);
  height: 10px;
  width: 10px;
  box-shadow: 2px 2px 4px rgba(49, 77, 48, .9);
}
.carousel.carousel-slider .control-arrow:hover{
  background: #ADD7CD; 
}

`;
