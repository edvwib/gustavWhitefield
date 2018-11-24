import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
margin-bottom: 50px;
h1{
  color: #314D30;
  margin-bottom: 50px;
}
`;

export const Wrapper = styled.div`
position: relative;
display: grid;
grid-column-gap: 20px;
grid-row-gap: 75px;
width: 90%;
max-width: 1000px;
grid-template-columns: repeat( auto-fill, minmax(250px, 1fr));

>div{
  display: inline-block;

}
`;
