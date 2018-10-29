import React from 'react';

import { Container, Wrapper } from './style';

const Text = (props) => {

  return (
    <React.Fragment>
      {
        props.page &&
        <Container>
          {
            props.eng ?
            <Wrapper>
              <h1>{props.page.titleENG}</h1>
              <p dangerouslySetInnerHTML={{__html: props.page.contentENG}}></p>
            </Wrapper>
            :
            <Wrapper>
              <h2>{props.page.titleSV}</h2>
              <p dangerouslySetInnerHTML={{__html: props.page.contentSV}}></p>
            </Wrapper>
          }
          {console.log(props.page)}
        </Container>
      }
    </React.Fragment>

  );
}

export default Text;
