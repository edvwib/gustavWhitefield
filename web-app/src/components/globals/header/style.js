import styled from 'styled-components';

export const Container = styled.div`
position: relative;
padding: 20px;

`;

export const Image = styled.img`
position: absolute;
left: 50%;
top: 10px;
margin: 0;
height: 20.5px;
width: 94px;
transform: translate(-50%);

@media (min-width: 750px) {
  display: none;
}

`;
