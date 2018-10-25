import styled from 'styled-components';

export const Container = styled.div`
display: none;
@media (max-width: 700px) {
  display: block;
  position: absolute;
  top: 10px;
  right: 10px;
  height: 30px;
  width: 40px;
}
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  span{
    position: absolute;
    height: 5px;
    width: 100%;
    border-radius: 10px;
    transition: .5s ease;
    background-color: var(--dark-green);
  }
  span:nth-child(1){
    top: 0;
    left: 0;
    ${
      props => props.open &&
      `
        top: calc(50% - 2.5px);
        transform: rotate(45deg);
      `
    }
  }
  span:nth-child(2){
    top: calc(50% - 2.5px);
    left: 0;
    ${
      props => props.open &&
      `
        left: -10px;
        width: 0;
      `
    }
  }
  span:nth-child(3){
    top: calc(100% - 5px);
    left: 0;
    ${
      props => props.open &&
      `
        top: calc(50% - 2.5px);
        transform: rotate(-45deg);
      `
    }
  }

`;
