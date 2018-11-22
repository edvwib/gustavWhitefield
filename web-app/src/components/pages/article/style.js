import styled from 'styled-components';

export const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
color: var(--darkGreen);
width: 100%;
margin: 50px 0;
`;

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 90%;
max-width: 712px;
>h1{
  margin-top: 0;
  text-align: center;
}
>small{
  width: 100%;
  font-style: italic;
}
>p{
  margin-top: 0;
}
`;

export const Btn = styled.button`
font-family: 'niramit bold';
color: var(--darkGreen);
background-color: white;
border-color: white;
font-size: 18px;
position: relative;
border: 1px solid var(--darkGreen);
padding-bottom: 5px;
cursor: pointer;
transition: .5s;
border-radius: 2.5px;
&:hover{
  background-color: var(--lightGreen);
}
`;
