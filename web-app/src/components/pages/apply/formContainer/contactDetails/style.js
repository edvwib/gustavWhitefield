import styled from 'styled-components';

export const Fieldset = styled.fieldset`
  .grid{
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }
`;

export { InputContainer } from './../style';
