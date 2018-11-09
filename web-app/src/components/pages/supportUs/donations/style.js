import styled from 'styled-components';

export const Container = styled.div`
display: grid;
grid-column-gap: 20px;
grid-row-gap: 20px;
grid-template-columns: repeat( auto-fill, minmax(200px, 1fr));
width: 90%;
max-width: 1000px;
margin: 50px;
`;
