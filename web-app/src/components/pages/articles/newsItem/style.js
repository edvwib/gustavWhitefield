import styled from 'styled-components';

export const Container = styled.div`
  width: ${props => props.supportsGrid ? 'unset' : '300px'};
  margin: ${props => props.supportsGrid ? 'unset' : '0 10px 75px 10px'};

  a{
    text-decoration: none;
  }
`;
