import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
color: var(--dark-green);

h1{
  text-align: center;
  margin-bottom: 50px;
}

div:nth-child(2), div:nth-child(4){
  img{
    margin: 0 0 20px 20px;
    float: right;
  }
}

div:nth-child(3){
  img{
    margin: 0 20px 20px 0;
    float: left;
  }
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
