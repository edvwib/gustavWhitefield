import styled from 'styled-components';

export const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
color: var(--dark-green);

>div:first-child{
  @media (max-width: 750px) {
    margin: 25px 0;
  }
  margin: 50px 0;
}
`;

export const Body = styled.div`
max-width: 612px;
width: 90%;
margin-bottom: 50px;
line-height: 1.5;
font-family: 'niramit regular';
font-size: 18px;

div{
  div{
    svg{
      float: right;
    }
  }
}

`;
