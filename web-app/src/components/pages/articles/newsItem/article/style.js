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
  height: 200px;
  border-radius: 2.5px;
  object-fit: cover;
  width: 100%;
}
p{
  z-index: 0;
  min-height: 10px; 
}

button{
  position: absolute;
  font-family: 'niramit bold';
  font-size: 14px;
  border: none;
  padding: 0 5px;
  z-index: 2;
  bottom: 0;
  left: 0;
  background-color: white;
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

small{
  position: absolute;
  font-style: italic;
  font-size: 12px;
  padding: 0 5px;
  border: none;
  z-index: 2;
  bottom: 0;
  right: 0;
}

`;
