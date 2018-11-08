import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 80%;
  margin: 20px 10%;
  img{
    @media (max-width: 650px) {
      align-self: center;
      height: auto;
      width: 70%;
    }
    @media (max-width: 450px) {
      align-self: center;
      height: auto;
      width: 100%;
    }
  }
  @media (min-width: 1200px) {
    width: 80%;
    margin: 20px 10%;
  }
  @media (max-width: 650px) {
  flex-direction: column;
  }
`;

export const Text = styled.div`
margin-left: 20px;
h2{
  margin: 0;
}
small{
  font-style: italic;
  font-size: 16px;
}

@media (max-width: 650px) {
  margin-top: 10px;
  margin-left: 0;
}
@media (max-width: 450px) {
  width: 100%;
  margin-left: 0;
  p{
    margin-top: 10px;
  }
}
`;
