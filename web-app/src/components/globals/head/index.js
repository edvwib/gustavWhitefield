import React from 'react';
import {Helmet} from "react-helmet";

const Head = (props) => {
  return(
    <Helmet>
      <meta charset="utf-8"/>
      <title>{`Gustav Whitefield - ${props.title}`}</title>
    </Helmet>
  )
}

export default Head;
