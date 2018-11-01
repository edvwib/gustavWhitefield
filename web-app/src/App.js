import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom'
import ContextProvider from './components/globals/context';
import './App.css';

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
import NotFound from './components/pages/notFound';

class App extends Component {

  render() {
    return (
      <ContextProvider className="App">
        <Header/>
        <Nav/>
        <Switch>
          <Route exact path='/' component={Start}/>

          <Route path='/about-gustav' component={Gustav}/>
          <Route path='/om-gustav' component={Gustav}/>

          <Route path='/the-foundation' component={Foundation}/>
          <Route path='/om-stiftelsen' component={Foundation}/>

          <Route path='/support-us' component={SupportUs}/>
          <Route path='/stod-oss' component={SupportUs}/>

          <Route path='/apply' component={Apply}/>
          <Route path='/sok-bidrag' component={Apply}/>

          <Route path='/article/:id' component={Article}/>
          <Route path='/artikel/:id' component={Article}/>

          <Route path='/articles' component={Articles}/>
          <Route path='/artiklar' component={Articles}/>

          <Route path="*" component={NotFound}/>
        </Switch>
        <Footer/>
      </ContextProvider>
    );
  }
}

export default App;
