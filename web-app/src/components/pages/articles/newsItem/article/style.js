import styled from 'styled-components';

export const Container = styled.div`
position: relative;
max-height: 600px;
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
  max-height: 300px;
  border-radius: 2.5px;
  object-fit: contain;
  width: 100%;
}
p{
  z-index: 0;
}

small{
  position: absolute;
  font-family: 'niramit bold';
  border-radius: 3px;
  padding: 0 3px 2px 3px;
  z-index: 2;
  bottom: 0;
  left: 0;
  &:after{
    content: '';
    position: absolute;
    top: calc(50% - 5px);
    right: -15px;
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-left: 12px solid var(--dark-green);
    border-bottom: 6px solid transparent;
  }
}

`;
