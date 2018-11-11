import styled from 'styled-components';

export const Container = styled.div`

&.hidden{
  display: none;
}

label, input, textarea{
  font-size: 16px;
}

/*Organization or individual*/
.isOrg{
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 5px solid var(--dark-green);
  margin-bottom: 20px;

  >div{
    flex: 1;
    text-align: center;
    padding: 20px 20px 15px 20px;

    display: flex;
    flex-direction: column;

    input{
      display: none;
    }

    &.active{
      background-color: var(--dark-green);
      color: #fff;
    }
  }
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

    &[data-error]{
      color: tomato;

      &::after{
        color: var(--dark-green);
        content: attr(data-error);
      }
    }
  }

  label[data-error] + input{
    border-color: tomato;
  }

  input{

    &[type=text], &[type=mail]{
      border: 0;
      border-bottom: 1.5px solid #ccc;
      background-color: #fff;
      color: var(--dark-green);
      padding: 0 0 5px 10px;

      transition: 1s border;
      will-change: border;

      &:focus{
        outline: none;
        border-bottom: 0;
        border-bottom: 1.5px solid var(--dark-green);
      }
    }
  }

  textarea{
    border: 1px solid #ccc;
    transition: 1s border;
    will-change: border;
    padding: 10px;

    &:focus{
      outline: none;
      border: 1px solid var(--dark-green);
    }
  }
`;
