import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom'
import { Glob } from './components/globals/context';

import Header from './components/globals/header';
import Nav from './components/globals/nav';
import Footer from './components/globals/footer'
import Start from './components/pages/start';
import Gustav from './components/pages/gustav';
import Foundation from './components/pages/foundation';
import SupportUs from './components/pages/supportUs';
import Apply from './components/pages/apply';
import Article from './components/pages/article';
import Articles from './components/pages/articles';
import Loading from './components/pages/loading';
import NotFound from './components/pages/notFound';

class App extends Component {

  render() {
    return (
      <Glob.Consumer>
        {
          (context) => (
            context.state.pages ?
            <React.Fragment>
              <Header content={context}/>
              <Nav content={context.state}/>
              <Switch>

                <Route exact path='/' render={() => <Start content={context.state}/>}/>
                <Route
                  path={context.state.eng ? '/about-gustav' : '/om-gustav'}
                  render={() => <Gustav content={context.state}/>}
                />
                <Route
                  path={context.state.eng ? '/the-foundation' : '/om-stiftelsen'}
                  render={() => <Foundation content={context.state}/>}
                />
                <Route
                  path={context.state.eng ? '/support-us' : '/stod-oss'}
                  render={() => <SupportUs content={context.state}/>}
                />
                <Route
                  path={context.state.eng ? '/apply' : '/sok-bidrag'}
                  render={() => <Apply content={context.state}/>}
                />
                <Route
                  path={context.state.eng ? '/article/:id' : '/artikel/:id'}
                  render={(props) => <Article {...props} content={context}/>}
                />
                <Route
                  path={context.state.eng ? '/news' : '/nyheter'}
                  render={() => <Articles content={context.state}/>}
                />
                <Route path="*" component={NotFound}/>

              </Switch>
              <Footer content={context.state}/>
            </React.Fragment>
            :
            <Loading/>

          )
        }
      </Glob.Consumer>
    );
  }
}

export default App;
