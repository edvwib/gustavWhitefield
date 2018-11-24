import styled from 'styled-components';

export const Container = styled.div`
color: #314D30;
width: 100%;
margin: 50px auto;
max-width: 712px;
`;

export const Wrapper = styled.div`
margin: 0 auto;
width: 90%;
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
color: #314D30;
background-color: white;
border-color: white;
font-size: 18px;
position: relative;
border: 1px solid #314D30;
padding-bottom: 5px;
cursor: pointer;
transition: .5s;
border-radius: 2.5px;
&:hover{
  background-color: #ADD7CD;
}
`;
