import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-flow: wrap;
align-items: center;
justify-content: center;
`;

export const Company = styled.a`
width: 100px;
height: 100px;
background-image: url(${props => props.img});
background-size: 100% auto;
background-repeat: no-repeat;
background-position: center;
margin: 2%;
`;
