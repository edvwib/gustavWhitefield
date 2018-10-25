import styled from 'styled-components';

export const Container = styled.div`
position: relative;
padding: 30px;

@media (min-width: 750px) {
  padding: 10px;
}
`;

export const Image = styled.img`
position: absolute;
left: 50%;
top: 10px;
margin: 0;
height: 41px;
width: 188px;
transform: translate(-50%);

@media (min-width: 750px) {
  display: none;
}

`;
