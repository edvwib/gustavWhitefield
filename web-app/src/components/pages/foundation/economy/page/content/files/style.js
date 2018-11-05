import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
padding-bottom: 50px;

div{
  margin-top: 10px;
  a{
    font-family: 'niramit medium';
    color: var(--dark-green);
    text-decoration: none;
    padding: 0 0 4px 0;
    span{
      border: 1px solid var(--dark-green);
      border-radius: 5px;
      padding: 0 7px 4px 7px;
      margin-left: 10px;
      &:hover, &:active{
        background-color: var(--light-green);
      }
    }
  }
}

@media (min-width: 750px) {
  width: 80%;
  margin: 0 10%;
}
`;
