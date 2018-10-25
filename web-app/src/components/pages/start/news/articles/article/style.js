import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: center;
margin: 5% 0;
`;

export const Wrapper = styled.div`
display: flex;
justify-content: center;
flex-direction: row;
width: 80%;
height: 200px;
${props => props.first &&`flex-flow: row-reverse;width: 90%;`}
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
      height: 300px;
      width: 90%;
    }
    &:first-child{
      margin: 0 0 0 0;
    }
    &:last-child{
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
background-image: url(${props => props.src});
background-size: cover;
background-repeat: no-repeat;
`;

export const Text = styled.div`
width: 100%;
height: 100%;
box-sizing: border-box;

h3{
  display: flex;
  align-items: center;
  box-sizing: border-box;
  font-family: 'niramit bold';
  height: 30%;
  margin: 0;
}
p{
  position: relative;
  margin: 0;
  height: 70%;
  font-family: 'niramit regular';
  overflow: hidden;
}
p::after{
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  height: 5px;
  width: 100%;
  background-color: white;
  box-shadow: 10px 10px 30px 30px white;
  opacity: .99;
}
`;
