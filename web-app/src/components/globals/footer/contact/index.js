import React from 'react';
import { Container, ContactWrapper } from './style';
import { NavLink } from 'react-router-dom';

import TextItem from './textItem';

const Contact = (props) => {
  const policy = props.page.policy.policy;

  return (
    <Container>
      {
        props.page.contactUs.contact &&
        props.page.contactUs.contact.map((contact) =>
          <TextItem key={contact.name} name={contact.name} phone={contact.phone} />
        )}
      <small>{props.page.contactUs.email}</small>
      <ContactWrapper>
        <small>Copyright © www.gustavwhitefield.com</small>
        <NavLink to='/cookies'>Cookie policy</NavLink>
        <a
          href={policy.url}
          target="_blank"
          rel="noopener noreferrer"
        >{
          policy.title
        }</a>
      </ContactWrapper>
    </Container>
  )
}

export default Contact;
