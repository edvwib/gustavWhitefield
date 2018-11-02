import styled from 'styled-components';

export const Container = styled.div`
display: grid;
grid-column-gap: 10px;
grid-row-gap: 10px;
padding: 5%;
grid-template-columns: repeat( auto-fill, minmax(250px, 1fr));

@media (min-width: 1400px) {
  grid-template-columns: auto auto auto auto;
}

`;
