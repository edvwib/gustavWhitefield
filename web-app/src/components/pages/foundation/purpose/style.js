import styled from 'styled-components';

export const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
color: var(--dark-green);

>div:first-child{
  @media (max-width: 750px) {
    margin: 25px 0;
  }
  margin: 50px 0;
}

`;

export const Image = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
height: 200px;
width: 90%;
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

export const Body = styled.div`
max-width: 800px;
width: 90%;
margin-bottom: 50px;
line-height: 1.5;
font-family: 'niramit regular';
font-size: 18px;

div{
  div{
    svg{
      float: right;
    }
  }
}

`;
