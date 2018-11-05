import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 90%;
  margin: 5% 5%;
  @media (min-width: 1200px) {
    width: 80%;
    margin: 5% 10%;
  }
  @media (max-width: 650px) {
  flex-direction: column; 
  }
`;

export const Image = styled.div`
height: 200px;
min-width: 200px;
background-image: url(${props => props.src});
background-size: cover;
background-position: center;
@media (max-width: 650px) {

}
`;

export const Text = styled.div`
margin-left: 20px;
h2{
  margin: 0;
}
small{

}
p{
  ${'' /* margin: 0; */}
}
`;
