import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 7% 0 0 0;

  @media (max-width: 750px) {
    margin: 50px 0 0 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  max-width: 800px;
  height: 200px;
  ${props => props.first &&`flex-flow: row-reverse; width: 90%; max-width: 900px;`}

  a{
    height: 100%;
    color: var(--dark-green);
    text-decoration: none;
    &:first-child{
      width: 40%;
      ${props => props.first &&`width: 50%;`}
    }
    &:last-child{
      width: 60%;
      margin: 0 0 0 30px;
      ${props => props.first &&`margin: 0 30px 0 0; width: 50%;`}
    }

    @media (max-width: 750px) {
      &:first-child, &:last-child{
        width: 90%;
      }
      &:first-child{
        height: 300px;
        margin: 0 0 0 0;
      }
      &:last-child{
        height: auto;
        margin: 0;
      }
    }
  }
  @media (max-width: 750px) {
    height: auto;
    width: 100%;
    flex-direction: column;
    justify-content:flex-start;
    align-items: center;
    ${props => props.first &&`height: auto;`}
  }
  @media (min-width: 900px) {
    width: 70%;
    ${props => props.first &&`height: 300px; width: 80%;`}
  }
  @media (min-width: 1200px) {
    width: 60%;
    ${props => props.first &&`height: 300px; width: 70%;`}
  }
`;

export const Image = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 2.5px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Text = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  font-family: 'niramit regular';
  position: relative;
  overflow: hidden;
  h2{
    display: flex;
    align-items: center;
    box-sizing: border-box;
    margin: 0 0 10px 0;
  }

  p{
    position: relative;
    margin: 0;
  }

  small{
    position: absolute;
    bottom: 0;
    left: 0;
    font-family: 'niramit bold';
    padding: 0 3px 2px 3px;
    border-radius: 3px;
    z-index: 1;

    &:after{
      content: '';
      position: absolute;
      top: calc(50% - 5px);
      right: -15px;
      width: 0;
      height: 0;
      border-top: 6px solid transparent;
      border-left: 12px solid var(--dark-green);
      border-bottom: 6px solid transparent;
    }
  }

  @media (max-width: 750px) {
    h2{
      height: auto;
      margin: 20px 0;
    }
  }
  &::after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 10%;
    width: 100%;
    background-color: white;
    box-shadow: 0px -10px 30px 20px white;
    opacity: .99;
  }
`;
