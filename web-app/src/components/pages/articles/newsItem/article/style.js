import styled from 'styled-components';

export const Container = styled.div`
position: relative;
max-height: 600px;
box-sizing: border-box;
color: #314D30;
overflow: hidden;

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
  color: #314D30;

  &:after{
    content: '';
    position: absolute;
    top: calc(50% - 5px);
    right: -15px;
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-left: 12px solid #314D30;
    border-bottom: 6px solid transparent;
  }
}
`;

export const ImgWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 200px;
width: 100%;
img{
  max-height: 200px;
  border-radius: 2.5px;
  object-fit: contain;
  width: ${props => props.supportsObjectFit ? '100%' : 'auto'};
}
`;
