import styled from 'styled-components';

export const Container = styled.div`
display: grid;
grid-template-columns:  repeat(auto-fill, minmax(300px, 1fr));
grid-row-gap: 10px;
padding: 5%;

div{
  background-color: red;
  border: 2px solid black;
  width: 300px;
  height: 300px;
}
`;
