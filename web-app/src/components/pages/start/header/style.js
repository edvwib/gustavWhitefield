import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 450px;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  box-shadow: inset 0 1px .5px .5px white;

  &::after{
    content: '';
    position: absolute;
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: .25;
  }

  h1{
    margin: 0;
    text-align: center;
    color: #314D30;
    @media (min-width: 750px) {
      width: 50%;
    }
    @media (max-width: 750px) {
      font-size: 30px;
    }
  }

  @media (min-width: 750px) {
    margin-top: 20px;
  }
`;
