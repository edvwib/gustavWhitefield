import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  color: var(--dark-green);
  margin-bottom: 50px;
  div:first-child{
    @media (max-width: 750px) {
      margin: 25px 0;
    }
    margin: 50px 0;
  }
`;
