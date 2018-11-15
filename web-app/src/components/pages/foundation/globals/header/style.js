import styled from 'styled-components';

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
height: 200px;
width: 90%;
box-shadow: inset 0 1px .5px .5px white;
margin: 50px 0;

@media (max-width: 750px) {
  width: 100%;
  margin: 25px 0;
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
  opacity: .25;
}
`;
