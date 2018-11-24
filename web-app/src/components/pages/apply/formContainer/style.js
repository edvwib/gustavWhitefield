import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 50px;

  label, input, textarea{
    font-size: 16px;
  }

  /*Hide radio buttons, but retain tab press focus*/
  input[type=radio]:focus + label{
    border: 2px solid #ADD7CD!important;
  }
  input[type=radio]{
    position: fixed;
    opacity: 0;
  }

  [data-error]::after{
    color: tomato;
    font-style: italic;
    font-size: 10px;
    margin-left: 10px;
    content: attr(data-error);
  }

  fieldset{
    border: none;
    margin: 0;
    padding: 18px;

    legend{
      font-size: 24px;
      width: 100%;
      text-align: center;
    }

    label{
      margin-bottom: 10px;
    }

    input{

      &[type=text], &[type=mail], &[type=tel]{
        border: 0;
        border-bottom: 1.5px solid #ccc;
        background-color: #fff;
        color: #314D30;
        padding: 0 0 5px 10px;

        transition: 1s border;
        will-change: border;

        &:focus{
          outline: none;
          border-bottom: 0;
          border-bottom: 1.5px solid #314D30;
        }
      }
    }

    textarea{
      border: 1px solid #ccc;
      border-radius: 5px;
      transition: 1s border;
      will-change: border;
      padding: 10px;

      &:focus{
        outline: none;
        border: 1px solid #314D30;
      }
    }
  }
`;

export const IsOrganization = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-bottom: 30px;

  >label{
    flex: 1 1 100%;
    margin-bottom: 20px;
    text-align: center;
  }
  label[for=organization]{
    margin-right: 20px;
  }
  >div>label{
    width: 41px;
    padding: 5px;
    margin-top: 2px;
    border-radius: 5px;
    border: 2px solid #314D30;

    :hover, :active{
      background-color: #ADD7CD;
    }

    &.active{
      background-color: #314D30;
      color: #fff;
    }
  }
`;

export const Instructions = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const SubmitContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 30px;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SubmitButton = styled.input`
  border: 1px solid #314D30;
  border-radius: 5px;
  background-color: #fff;
  color: #314D30;
  height: 78px;
  margin-bottom: 20px;

  @media (max-width: 800px) {
    margin: 20px 0;
  }

  &:hover, &:active{
    background-color: #ADD7CD;
  }

  &.error{
    color: tomato;
  }
`;

export const ErrorContainer = styled.div`

`;

export const ReceivedContainer = styled.div`
  margin-bottom: 25px;
  padding: 28px;
  border-radius: 5px;
  background-color: #ADD7CD;

  &.active{
    animation-duration: 5s;
    animation-name: colorFlash;
  }

  @keyframes colorFlash {
    0% { background-color: #fff }
    20% { background-color: #ADD7CD }
    40% { background-color: #fff }
    60% { background-color: #ADD7CD }
    80% { background-color: #fff }
    100% { background-color: #ADD7CD }
  }
`;

export const ConcentContainer = styled.div`
  padding: 28px;
  >a{
    display: block;
    margin-bottom: 15px;
  }
  >span{
    display: block;

    &:last-of-type{
      margin-top: 15px;
    }
  }

  >div{
    display: flex;
    align-items: center;
    margin-top: 15px;
  }
  [type=checkbox]{
    appearance: none;
    min-height: 25px;
    min-width: 25px;
    margin-right: 15px;
    border: 1px solid #314D30;
    border-radius: 3px;

    &:focus{
      outline: none;
      border-color: #4d9e8b;
    }

    &:checked{
      background-image: url(${props => props.checkmark});
      background-position: center;
      background-size: 80%;
      background-repeat: no-repeat;
      background-color: #ADD7CD;
    }
  }
`;
