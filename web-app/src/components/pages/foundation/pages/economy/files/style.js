import styled from 'styled-components';

export const Container = styled.div`

padding-bottom: 50px;

div{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 10px;
  a{
    font-family: 'niramit medium';
    color: #314D30;
    text-decoration: none;
    padding: 0 0 4px 0;
    span{
      border: 1px solid #314D30;
      border-radius: 5px;
      padding: 0 7px 4px 7px;
      margin-left: 10px;
      &:hover, &:active{
        background-color: #ADD7CD;
      }
    }
  }
}
`;
