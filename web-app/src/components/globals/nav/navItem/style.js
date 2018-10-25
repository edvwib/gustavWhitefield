import styled from 'styled-components';

export const Container = styled.div`
${
  props => props.open &&
  `
  background-color: rgba(149,162,149, .9);
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  `
}

@media (min-width: 700px) {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
`;

export const LinkWrap = styled.div`
text-align: center;
margin: 10px;

a{
  position: relative;
  padding-bottom: 3px;
  text-decoration: none;
  color: var(--dark-green);
  font-family: 'niramit medium';
  font-size: 18px;
  img{
    height: 50px;
    object-fit: contain;
  }
  &::after{
    width: 0;
    left: 50%;
  }
}
a.active{
  &::after{
    width: 100%;
    left: 0;
  }
}
&:not(:nth-child(2)){
  a::after{
    content: '';
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid var(--dark-green);
    transition: 1s ease;
  }
}

@media (max-width: 700px) {
  display: none;
}

`;
