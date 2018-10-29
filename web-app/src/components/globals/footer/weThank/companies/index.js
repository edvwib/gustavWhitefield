import React from 'react';
import { Container, Company } from './style';

const Companies = (props) => {

  return(
    <Container>
      {
        props.companies &&
        props.companies.images.map( i =>
          <Company
            href="https://www.thesaurus.com/"
            key={i.ID}
            img={i.url}
          />
        )}
      </Container>
    )
  }

  export default Companies;
