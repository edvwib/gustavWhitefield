import styled from 'styled-components';

export const Container = styled.div`
min-height: 450px;
width: 200px;
margin: 10px 10px 10px 10px;
border: 1px solid grey;
border-radius: 5px;
padding: 10px;
img{
  height: 100px;
  width: 200px;
  object-fit: contain;
}
h3{
  font-size: 20px;
  min-height: 80px;
}
p{
  & *{
    margin: 0;
    text-align: left;
    font-size: 16px;
  }
}

small{
  font-style: italic;
}
`;
