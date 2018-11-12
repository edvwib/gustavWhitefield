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
        border: 2px solid var(--dark-green);

        :hover, :active{
          background-color: var(--light-green);
        }

        &.active{
          background-color: var(--dark-green);
          color: #fff;
        }
      }
    }
  }
`;
