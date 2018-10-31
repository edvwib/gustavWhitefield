import styled from 'styled-components';

export const Wrapper = styled.div`
width: 90%;
margin: 10px 5% 10% 5%;
color: var(--dark-green);

h1{
  text-align: center;
}
div:nth-child(2){
  margin-top: 50px;
}
div:nth-child(2), div:nth-child(4){
  img{
    margin-left: 20px;
    float: right;
  }
}

div:nth-child(3){
  img{
    margin-right: 20px;
    float: left;
  }
}

@media (min-width: 1000px) {
  margin: 10px 15% 10% 15%;
  width: 70%;
}

@media (max-width: 600px) {

  div:nth-child(2), div:nth-child(4){
    img{
      margin-left: 0;
      float: none;
    }
  }

  div:nth-child(3){
    img{
      margin-right: 0;
      float: none;
    }
  }
}

`;
