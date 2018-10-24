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
  position: relative;
  padding-bottom: 3px;
  text-decoration: none;
  color: var(--dark-green);
  font-family: 'niramit medium';
  font-size: 18px;
  img{
    height: 50px;
    object-fit: contain;
  }
  &::after{
    width: 0;
    left: 50%;
  }
}
a.active{
  &::after{
    width: 100%;
    left: 0;
  }
}
&:not(:first-child){
  a::after{
    content: '';
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid var(--dark-green);
    transition: 1s ease;
  }
}
`;
