import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
box-sizing: border-box;
border: 1px solid grey;
border-radius: 5px;
padding: 10px;
img{
  height: 100px;
  max-width: 180px;
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
`;
