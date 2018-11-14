import styled from 'styled-components';

export const Fieldset = styled.fieldset`
  .grid{
    display: grid;
    grid-template-columns: 1fr;

    textarea{
      max-height: 20vh;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
