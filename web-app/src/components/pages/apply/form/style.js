import styled from 'styled-components';

export const Container = styled.div`
label, input, textarea{
  font-size: 16px;
}

/*Hide radio buttons, but retain tab press focus*/
input[type=radio]:focus + label{
  border: 2px solid var(--light-green)!important;
}
input[type=radio]{
  position: fixed;
  opacity: 0;
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
    label{
      padding: 20px 20px 15px 20px;
    }

    display: flex;
    flex-direction: column;

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
      /* color: tomato; */

      &::after{
        color: tomato;
        font-style: italic;
        font-size: 10px;
        margin-left: 10px;
        content: attr(data-error);
      }
    }
  }

  label[data-error] + input{
    /* border-color: tomato; */
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
    border-radius: 5px;
    transition: 1s border;
    will-change: border;
    padding: 10px;

    &:focus{
      outline: none;
      border: 1px solid var(--dark-green);
    }
  }
}
.submitContainer{
  display: flex;
  justify-content: space-around;
  padding: 0 30px;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }

  [type=submit]{
    border: 1px solid var(--dark-green);
    border-radius: 5px;
    background-color: #fff;
    color: var(--dark-green);
    height: 78px;
    margin-bottom: 20px;

    @media (max-width: 800px) {
      margin: 20px 0;
    }

    &:hover, &:active{
      background-color: var(--light-green);
    }
  }
}
`;
