import styled from 'styled-components';

export const Container = styled.div`

`;

export const Image = styled.div`

${
  props => props.img ?
  `background-image: url(${props.img});` :
  `display: none;`
}
background-position: center;
background-size: contain;
background-repeat: no-repeat;
width: 60%;
max-width: 400px;
min-width: 200px;
min-height: 200px;

`;
