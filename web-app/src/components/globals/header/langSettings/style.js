import styled from 'styled-components';

export const Container = styled.div`
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
  &:nth-child(3){
    ${
      props => props.active &&
      `font-family: 'niramit bold';`
    }
  }
}

@media (max-width: 750px) {
  ${
    props => !props.showInMob &&`
    display: none;
    `
  }
}

@media (min-width: 750px) {
  ${
    props => props.showInMob &&`
    display: none;
    `
  }
}
`;
