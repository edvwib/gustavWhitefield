import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom'
import ContextProvider from './components/globals/context';
import './App.css';

import Nav from './components/globals/nav';
import Start from './components/pages/start';
import About from './components/pages/about';
import NotFound from './components/pages/notFound';

class App extends Component {

  render() {
    return (
      <ContextProvider className="App">
        <Nav/>
        <Switch>
          <Route exact path='/' component={Start}/>
          <Route exact path='/about' component={About}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </ContextProvider>
    );
  }
}

export default App;
