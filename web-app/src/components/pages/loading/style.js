import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: absolute;
height: 100vh;
width: 100%;
z-index: 100;

img{
  width: 200px;
  height: auto;
}
h2{
  color: var(--dark-green);
  font-family: 'niramit bold';
  letter-spacing: 0.5em;
  width: 100%;
  text-align: center;
  span{
    display: inline-block;
  }
}
`;
