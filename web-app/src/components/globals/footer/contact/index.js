import React from 'react';
import { Container } from './style';

import TextItem from './textItem';

const Contact = (props) => {

  return(
    <Container>
      <TextItem text1='Elisabeth Whitefield' text2='tel: +46 703 517 761'/>
      <TextItem text1='Joakim Whitefield' text2='tel: +46 722 540 022'/>
      <TextItem text1='info@gustavwhitefield.com'/>
      <TextItem text1='Copyright © www.gustavwhitefield.com'/>
    </Container>
  )
}

export default Contact;
