import React from 'react';
import { NavLink } from 'react-router-dom'
import { Button } from './style';

const ContactBtn = (props) => {

  return (
    <NavLink to="/om-stiftelsen">
    <Button>
      {
        props.eng ?
        <p>Contact</p> :
        <p>Kontakt</p>
      }
    </Button>
  </NavLink>
  );
}

export default ContactBtn;
