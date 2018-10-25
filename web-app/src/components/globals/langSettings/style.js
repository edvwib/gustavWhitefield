import styled from 'styled-components';

export const Container = styled.div`
position: relative;
padding: 20px;
span{
  height: 100%;
  padding: 1px;
  left: 50%;
  bottom: 0;
  background-color: var(--dark-green);
}
a{
  padding: 5px;
  text-decoration: none;
  color: var(--dark-green);
  &:first-child{
    ${
      props => !props.active &&
      `font-family: 'niramit bold';`
    }
  }
  &:last-child{
    ${
      props => props.active &&
      `font-family: 'niramit bold';`
    }
  }
}
`;

export const Image = styled.img`
position: absolute;
left: 50%;
top: 10px;
margin: 0;
height: 20.5px;
width: 94px;
transform: translate(-50%);
`;
