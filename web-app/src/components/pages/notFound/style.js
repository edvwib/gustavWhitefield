import styled from 'styled-components';

export const Container = styled.div`
height: 400px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
text-align: center;
color: var(--darkGreen);

p{
  margin: 0;
}
p, h3{
  width: 90%;
  max-width: 712px;
}
`;
