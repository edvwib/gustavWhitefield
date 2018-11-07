import styled from 'styled-components';

export const Container = styled.div`
width: 90%;
margin: 0 5%;
color: var(--dark-green);
div{
  margin: 50px 0;
}
>div:nth-child(2){

  @media (max-width: 750px) {
    margin: 25px 0;
  }

  @media (min-width: 750px) {
    width: 80%;
    margin: 0 10%;
  }
}
`;

export const Image = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
height: 200px;
width: 100%;
box-shadow: inset 0 1px .5px .5px white;
h1{
  text-shadow: 0px 0px 2px white;
}
&::after{
  content: '';
  position: absolute;
  background-image: url(${props => props.src});
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
`;
