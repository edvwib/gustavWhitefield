import styled from 'styled-components';

export const Container = styled.div`
position: relative;
display: grid;
grid-column-gap: 20px;
grid-row-gap: 20px;
padding: 100px 10% 5% 10%;
grid-template-columns: repeat( auto-fill, minmax(200px, 1fr));

h1{
  position: absolute;
  top: 0;
  width: 100%;
  text-align: center;
  color: var(--dark-green);
  font-family: 'niramit bold';
}
@media (min-width: 1300px) {
  grid-template-columns: auto auto auto auto, minmax(200px, 1fr);
  padding: 100px 15% 5% 15%;
}

@media (max-width: 750px) {
  padding: 100px 5% 5% 5%;
}
`;
