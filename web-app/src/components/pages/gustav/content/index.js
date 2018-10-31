import React from 'react';
import { Wrapper } from './style';

import Section from './section';

const Content = (props) => {

  return (
    <React.Fragment>
      {
        props.page &&
        <React.Fragment>
          {
            props.eng ?
            <Wrapper>
              <h1>{props.page.title.titleENG}</h1>
              <Section content={props.page.part1.contentSV} img={props.page.part1.image}/>
              <Section content={props.page.part2.contentSV} img={props.page.part2.image}/>
              <Section content={props.page.part3.contentSV} img={props.page.part3.image}/>
            </Wrapper>
            :
            <Wrapper>
              <h1>{props.page.title.titleSV}</h1>
              <Section content={props.page.part1.contentSV} img={props.page.part1.image}/>
              <Section content={props.page.part2.contentSV} img={props.page.part2.image}/>
              <Section content={props.page.part3.contentSV} img={props.page.part3.image}/>
            </Wrapper>
          }
        </React.Fragment>
      }
    </React.Fragment>

  );
}

export default Content;
