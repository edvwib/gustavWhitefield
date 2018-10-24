import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  p{
    color: var(--dark-green);
    font-family: 'niramit medium';
    margin: 0;
  }
`;

export const LinkWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  img{
    margin-right: 5px;
    height: 40px;
    width: 40px;
  }
`;
