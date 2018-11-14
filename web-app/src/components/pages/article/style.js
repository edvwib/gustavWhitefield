import styled from 'styled-components';

export const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
color: var(--dark-green);
width: 100%;
margin: 50px 0;
h1{
  margin: 0;
  text-align: center;
}
`;

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 90%;
max-width: 712px;
`;

export const Btn = styled.button`
font-family: 'niramit bold';
color: var(--dark-green);
background-color: white;
border-color: white;
font-size: 18px;
position: relative;
border: 1px solid var(--dark-green);
padding-bottom: 5px;
cursor: pointer;
transition: .5s;
border-radius: 2.5px;
&:hover{
  background-color: var(--light-green);
}
`;
