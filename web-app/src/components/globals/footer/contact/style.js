import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
font-family: 'niramit regular';
padding: 10px;
position: relative;

div:last-child{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 0 10px 0;

  a{
    color: #314D30;
    font-size: 10px;
    margin-left: 10px;
  }
}
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  small{
    text-align: center;
    width: 100%;
  }
`;
