import styled from 'styled-components';

export const Container = styled.div`
  .grid{
    display: grid;
    grid-template-columns: 1fr;

    >div{
      display: flex;
      flex-direction: column;

      padding: 10px;
    }


    input[name=subsidy], input[name=partialSubsidy]{
      width: 50%;
      @media (max-width: 600px) {
        width: 100%;
      }
    }

    .partialFinancingContainer, .multipleInstitutionsContainer{
      flex-direction: row;
      flex-wrap: wrap;

      label:first-child{
        flex: 1 1 100%;
      }

      label:not(:first-child){
        width: 40px;
        text-align: center;
        padding: 5px;
        margin-right: 20px;
        border-radius: 5px;
        border: 1px solid var(--dark-green);

        &.active{
          background-color: var(--dark-green);
          color: #fff;
        }
      }

      input{
        display: none;
      }
    }
  }
`;
