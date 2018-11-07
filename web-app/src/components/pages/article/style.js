import styled from 'styled-components';

export const Container = styled.div`
color: var(--dark-green);
width: 90%;
margin: 25px 5% 50px 5%;

h1{
  text-align: center;
}

@media (min-width: 750px) {
  width: 70%;
  margin: 50px 15% 100px 15%;
}
`;
