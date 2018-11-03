import styled from 'styled-components';

export const Container = styled.div`
position: relative;
height: 450px;
box-sizing: border-box;
color: var(--dark-green);
overflow-y: hidden;

p::after{
  position: absolute;
  z-index: 1;
  content: '';
  left: 0;
  bottom: 0;
  height: 20px;
  width: 100%;
  background-color: white;
  box-shadow: 0px -10px 30px 20px white;
}
img{
  height: auto;
  width: 100%;
}
p{
  z-index: 0;
}

span{
  position: absolute;
  font-family: 'niramit bold';
  border: 1px solid var(--light-green);
  background-color: rgba(149,162,149, .1);
  border-radius: 3px;
  padding: 0 3px 2px 3px;
  z-index: 2;
  bottom: 0;
  left: 0;
}

`;
