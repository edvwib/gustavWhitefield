import styled from 'styled-components';

export const Container = styled.div`

`;

export const Image = styled.div`
height: 200px;
width: 200px;
background-image: url(${props => props.src});
background-size: cover;
background-position: center;
`;
