import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  color: var(--dark-green);
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 90%;
  color: var(--dark-green);
  max-width: 612px;

  >h2{
    margin: 40px 0 0 0;
  }
`;
