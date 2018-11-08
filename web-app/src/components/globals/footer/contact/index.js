import React from 'react';
import { Container } from './style';
import { NavLink } from 'react-router-dom';

import TextItem from './textItem';

const Contact = (props) => {

  return(
    <Container>
      <TextItem text1='Elisabeth Whitefield' text2='tel: +46 703 517 761'/>
      <TextItem text1='Joakim Whitefield' text2='tel: +46 722 540 022'/>
      <TextItem text1='info@gustavwhitefield.com'/>
      <div>
        <TextItem text1='Copyright © www.gustavwhitefield.com'/>
        <NavLink to='/cookies'>Cookie policy</NavLink>
      </div>
    </Container>
  )
}

export default Contact;
