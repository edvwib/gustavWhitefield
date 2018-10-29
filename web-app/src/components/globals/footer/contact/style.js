import styled from 'styled-components';

export const Container = styled.div`
display: flex;
font-family: 'niramit regular';
padding: 10px;

div:first-child{

  small{
    border-right: 1px solid var(--dark-green);
    padding: 0 10px;
  }

  small:last-child{
    border-right: none;
  }

}

`;
