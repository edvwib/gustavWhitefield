import styled from 'styled-components';

export const Container = styled.div`
  .grid{
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }

    >div{
      display: flex;
      flex-direction: column;

      padding: 10px;
    }
  }
`;
