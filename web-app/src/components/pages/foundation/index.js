import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom'

import SubNav from './subNav';
import Purpose from './purpose';
import Statutes from './statutes';
import WeSupport from './weSupport';
import TheBoard from './theBoard';
import Economy from './economy';
import NotFound from '../../../components/pages/notFound';

class Foundation extends Component {

  render() {
    return (
      <React.Fragment>
        <SubNav/>
        <Switch>
          <Route exact path='/the-foundation' component={Purpose}/>
          <Route exact path='/om-stiftelsen' component={Purpose}/>

          <Route path='/the-foundation/we-support' component={WeSupport}/>
          <Route path='/om-stiftelsen/vi-stodjer' component={WeSupport}/>

          <Route path='/the-foundation/statutes' component={Statutes}/>
          <Route path='/om-stiftelsen/stadgar' component={Statutes}/>

          <Route path='/the-foundation/the-board' component={TheBoard}/>
          <Route path='/om-stiftelsen/styrelsen' component={TheBoard}/>

          <Route path='/the-foundation/economy' component={Economy}/>
          <Route path='/om-stiftelsen/ekonomi' component={Economy}/>

          <Route path="*" component={NotFound}/>
        </Switch>
      </React.Fragment>

    );
  }
}

export default Foundation;
