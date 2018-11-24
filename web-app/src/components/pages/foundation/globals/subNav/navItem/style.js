import styled from 'styled-components';

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;

@media (min-width: 750px) {
  flex-wrap: wrap;
}
`;

export const LinkWrap = styled.div`
text-align: center;
margin: 10px;
position: relative;

a{
  position: relative;
  padding-bottom: 3px;
  text-decoration: none;
  color: #314D30;
  font-family: 'niramit medium';

  &::after{
    width: 0;
    left: 50%;
    bottom: 0;
    content: '';
    position: absolute;
    border-bottom: 1px solid #314D30;
  }
}

a.active{
  &::after{
    width: 100%;
    left: 0;
    transition: 1s ease;
  }
}

`;
