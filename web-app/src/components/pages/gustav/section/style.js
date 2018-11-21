import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 100px;
  width: 90%;
  max-width: 712px;
  clear: both;
  span{
    width: 50%;
    >*{
      width: 100%;
    }
  }

`;

export const Image = styled.img`
  border-radius: 2.5px;
  background-position: center;
  background-size: contain;
  height: 200px;
  width: auto;
  max-height: 100%;

  @media (max-width: 600px) {
  height: auto;
  width: 100%;
  }
`;
