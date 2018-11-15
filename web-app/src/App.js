import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom'
import { Glob } from './components/globals/context';

import Header from 'components/globals/header';
import Nav from 'components/globals/nav';
import Footer from 'components/globals/footer'
import Start from 'components/pages/start';
import Gustav from 'components/pages/gustav';
import Foundation from 'components/pages/foundation';
import SupportUs from 'components/pages/supportUs';
import Apply from 'components/pages/apply';
import Article from 'components/pages/article';
import Articles from 'components/pages/articles';
import Loading from 'components/pages/loading';
import Cookies from 'components/pages/cookies';
import NotFound from 'components/pages/notFound';
import CookiePopup from 'components/globals/cookiePopup';

class App extends Component {

  render() {
    return (
      <Glob.Consumer>
        {
          (context) => (
            context.state.pages ?
            <React.Fragment>
              <CookiePopup eng={context.state.eng}/>
              <Header content={context}/>
              <Nav content={context.state}/>
              <Switch>
                <Route exact path='/' render={() => <Start content={context.state}/>}/>
                <Route
                  path='(/about-gustav|/om-gustav)'
                  render={() => <Gustav content={context.state.pages.aboutGustav} eng={context.state.eng}/>}
                />
                <Route
                  path='(/the-foundation|/om-stiftelsen)'
                  render={() => <Foundation content={context.state}/>}
                />
                <Route
                  path='(/support-us|/stod-oss)'
                  render={() => <SupportUs content={context.state.pages.supportUs} eng={context.state.eng}/>}
                />
                <Route
                  path='(/apply|/sok-bidrag)'
                  render={() => <Apply content={context.state.pages.apply} context={context}/>}
                />
                <Route
                  path='/(article|artikel)\/:id([0-9]+)'
                  render={(props) => <Article {...props} content={context} eng={context.state.eng}/>}
                />
                <Route
                  path='(/news|/nyheter)'
                  render={() => <Articles content={context.state}/>}
                />
                <Route
                  path='/cookies'
                  render={() => <Cookies eng={context.state.eng} />}
                />
                <Route
                  path='*'
                  render={() => <NotFound eng={context.state.eng} />}
                />
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
