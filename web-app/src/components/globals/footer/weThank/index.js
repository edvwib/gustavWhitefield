import React, { Component } from 'react';
import { Glob } from '../../context';
import { Container } from './style';

class WeThank extends Component{

  render() {
    return (
      <Glob.Consumer>
        {
          (c) => (
            <Container>
              {c.state.pages.weThank ? (
                <React.Fragment>
                  <h1>{
                    c.state.eng ?
                      c.state.pages.weThank.titleENG :
                      c.state.pages.weThank.titleSV
                  }</h1>
                  <div className="gallery">{
                    c.state.pages.weThank.images.map(i => {
                      return <img
                        key={i.ID}
                        src={i.url}
                        alt={i.alt ? i.alt : i.title}
                      />
                    })
                  }</div>
                </React.Fragment>
              ) : (
                  <p className="loading">Loading...</p>
                )}
            </Container>
          )
        }
      </Glob.Consumer>
    );
  }
}

export default WeThank;
