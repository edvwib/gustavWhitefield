import styled from 'styled-components';

export const Fieldset = styled.fieldset`
  .grid{
    display: grid;
    grid-template-columns: 1fr;

    input[name=subsidy], input[name=partialSubsidy]{
      width: 50%;
      @media (max-width: 600px) {
        width: 100%;
      }
    }

    .partialFinancingContainer, .multipleInstitutionsContainer{
      flex-flow: row wrap;

      label:first-child{
        flex: 1 1 100%;
      }

      label:not(:first-child){
        width: 41px;
        text-align: center;
        padding: 5px;
        margin-right: 20px;
        margin-top: 2px;
        border-radius: 5px;
        border: 2px solid var(--darkGreen);

        :hover, :active{
          background-color: var(--lightGreen);
        }

        &.active{
          background-color: var(--darkGreen);
          color: #fff;
        }
      }
    }
  }
`;

export { InputContainer } from './../style';
