import React from 'react';
import { Container, Company } from './style';

const Companies = (props) => {

  return(
    <Container>
      {
        props.companies &&
        props.companies.images.map( i =>
          <Company
            href={i.url}
            key={i.image.ID}
            img={i.image.url}
          />
        )}
      </Container>
    )
  }

  export default Companies;
