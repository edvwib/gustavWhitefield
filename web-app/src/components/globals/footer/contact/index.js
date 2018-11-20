import React from 'react';
import { Container } from './style';
import { NavLink } from 'react-router-dom';

import TextItem from './textItem';

const Contact = (props) => {
  return (
    <Container>
      {props.page.contact.map((contact) =>
        <TextItem key={contact.name} name={contact.name} phone={contact.phone} />
      )}
      <small>{props.page.email}</small>
      <div>
        <small>Copyright © www.gustavwhitefield.com</small>
        <NavLink to='/cookies'>Cookie policy</NavLink>
      </div>
    </Container>
  )
}

export default Contact;
