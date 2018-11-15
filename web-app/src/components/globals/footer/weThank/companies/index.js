import React from 'react';
import { Container, Company } from './style';

const Companies = (props) => {

  return(
    <Container>
      {
        props.companies &&
        props.companies.images.map( i =>
          <Company
            href={i.url || null}
            key={i.image.ID}
            img={i.image.url}
            target="_blank"
            rel="noopener noreferrer"
          />
        )}
      </Container>
    )
  }

  export default Companies;
