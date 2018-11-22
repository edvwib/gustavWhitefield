import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  color: var(--darkGreen);
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 90%;
  color: var(--darkGreen);
  max-width: 612px;

  >h2{
    margin: 40px 0 0 0;
  }
`;
