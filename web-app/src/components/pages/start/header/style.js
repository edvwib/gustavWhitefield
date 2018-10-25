import styled from 'styled-components';

export const Container = styled.div`
height: 450px;
`;

export const ImgCont = styled.div`
position: relative;
padding: 20px;
box-sizing: border-box;
width: 100%;
height: 100%;
@media (max-width: 700px) {
  display: flex;
  justify-content: center;
  align-items: center;
}

&::after{
  content: '';
  position: absolute;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  filter: opacity(.6);
}
h1{
  margin: 0;
  text-align: center;
  font-size: 2em;
  color: var(--dark-green);
  font-family: 'niramit bold';
  text-shadow: 0px 0px 2px white;
  @media (min-width: 700px) {
    width: 40%;
    text-align: left;
  }
}
`;
