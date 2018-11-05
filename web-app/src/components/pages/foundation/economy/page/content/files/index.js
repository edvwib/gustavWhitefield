import React from 'react';
import { Container } from './style';


const Files = (props) => {
  return (
    <Container>
      <h3>{props.eng ? 'Annual Reports' : 'Årsredovisningar'}</h3>
      {
        props.files.map((file, index) =>
        <div key={index}>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href={file.report.url}>
            {file.report.title}
            <span>{props.eng ? 'Open' : 'Visa'}</span>
          </a>
        </div>
      )
    }
  </Container>
);
}

export default Files;
