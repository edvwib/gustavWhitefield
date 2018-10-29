import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom'
import { Container } from './style';

import Purpose from './purpose';
import Statues from './statues';
import WeSupport from './weSupport';
import TheBoard from './theBoard';
import NotFound from '../../../components/pages/notFound';

class Foundation extends Component {

  render() {
    return (
      <Switch>
        <Route exact path='/the-foundation/purpose' component={Purpose}/>
        <Route path='/om-stiftelsen/syfte' component={Purpose}/>

        <Route path='/the-foundation/statutes' component={Statues}/>
        <Route path='/om-stiftelsen/stadgar' component={Statues}/>

        <Route path='/the-foundation/we-support' component={WeSupport}/>
        <Route path='/om-stiftelsen/vi-stodjer' component={WeSupport}/>

        <Route path='/the-foundation/the-board' component={TheBoard}/>
        <Route path='/om-stiftelsen/styrelsen' component={TheBoard}/>

        <Route path="*" component={NotFound}/>
      </Switch>
    );
  }
}

export default Foundation;
