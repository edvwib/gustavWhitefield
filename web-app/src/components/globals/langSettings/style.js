import styled from 'styled-components';

export const Container = styled.div`
margin: 10px;
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
