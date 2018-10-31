import styled from 'styled-components';

export const Container = styled.div`
margin-bottom: 100px;
clear: both;
span{
  width: 50%;
  >*{
    width: 100%;
  }
}

@media (max-width: 600px) {
margin-bottom: 50px;
}

`;

export const Image = styled.img`
background-position: center;
background-size: contain;
height: 200px;
width: auto;
max-height: 100%;

@media (max-width: 600px) {
height: auto;
width: 100%;
}
`;
