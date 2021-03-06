import styled from 'styled-components';

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
@media (max-width: 750px) {
  ${
    props => props.open &&
    `
    background-color: rgba(173, 215, 205, .95);
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    flex-wrap:nowrap;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 20%;
    `
  }
}

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
&:not(:nth-child(2)){
  a::after{
    content: '';
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid #314D30;
    transition: 1s ease;
  }
}

@media (max-width: 750px) {
  ${
    props => !props.open &&`
    display: none;
    `
  }
}

`;
