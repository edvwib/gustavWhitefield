import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'niramit regular';
  color: var(--darkGreen);
  height: auto;
  padding-top: 20px;

  p{
    width: 60%;
    margin: 0 0 50px 0;
    ${props => !props.img && `font-size: 18px;`}
    @media (max-width: 750px) {
    width: 90%;
    }
  }
`;

export const Image = styled.div`
  ${
    props => props.img ?
    `background-image: url(${props.img});` :
    `display: none;`
  }
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 60%;
  max-width: 400px;
  min-width: 200px;
  min-height: 200px;
  @media (max-width: 750px) {
  width: 90%;
  }
`;
