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
import NotFound from './components/pages/notFound';

class App extends Component {

  render() {
    return (
      <ContextProvider className="App">
        <Header/>
        <Nav/>
        <Switch>
          <Route exact path='/' component={Start}/>

          <Route exact path='/about-gustav' component={Gustav}/>
          <Route exact path='/om-gustav' component={Gustav}/>

          <Route exact path='/the-foundation' component={Foundation}/>
          <Route exact path='/om-stiftelsen' component={Foundation}/>

          <Route exact path='/support-us' component={SupportUs}/>
          <Route exact path='/stod-oss' component={SupportUs}/>

          <Route exact path='/apply' component={Apply}/>
          <Route exact path='/sok-bidrag' component={Apply}/>

          <Route exact path='/article' component={Article}/>
          <Route exact path='/artikel' component={Article}/>

          <Route path="*" component={NotFound}/>
        </Switch>
        <Footer/>
      </ContextProvider>
    );
  }
}

export default App;
