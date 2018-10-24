import styled from 'styled-components';

export const Container = styled.div`
  .gallery{
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    align-items: center;

    img{
      max-width: 100%;
      max-height: 100%;
    }
  }
`;
