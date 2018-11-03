import styled from 'styled-components';

export const Container = styled.div`
display: grid;
grid-column-gap: 20px;
grid-row-gap: 20px;
padding: 5% 10% 5% 10%;
grid-template-columns: repeat( auto-fill, minmax(200px, 1fr));

@media (min-width: 1200px) {
  grid-template-columns: auto auto auto auto;
  padding: 5% 15% 5% 15%;
}

@media (max-width: 750px) {
  padding: 5% 5% 5% 5%;
}
`;
