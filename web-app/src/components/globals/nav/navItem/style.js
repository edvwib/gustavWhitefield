import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const LinkWrap = styled.div`
  text-align: center;
  margin: 10px;
  a{
    text-decoration: none;
    color: #314D30;
    font-family: 'niramit medium';
    img{
      height: 50px;
      object-fit: contain;
    }
  }
`;
