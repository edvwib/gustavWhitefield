import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom'
import ContextProvider from './components/globals/context';
import './App.css';

import Nav from './components/globals/nav';
import Start from './components/pages/start';
import About from './components/pages/about';
import SupportUs from './components/pages/supportUs';
import WeThank from './components/pages/weThank';
import NotFound from './components/pages/notFound';

class App extends Component {

  render() {
    return (
      <ContextProvider className="App">
        <Nav/>
        <Switch>
          <Route exact path='/' component={Start}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/support-us' component={SupportUs}/>
          <Route exact path='/we-thank' component={WeThank}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </ContextProvider>
    );
  }
}

export default App;
