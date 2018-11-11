import styled from 'styled-components';

export const Container = styled.div`
  .grid{
    display: grid;
    grid-template-columns: 1fr;

    >div{
      display: flex;
      flex-direction: column;

      padding: 10px;
    }

    textarea{
      max-height: 20vh;
    }
  }
`;
