import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom'
import { Container } from './style';

import SubNav from './subNav';
import Purpose from './purpose';
import Statues from './statues';
import WeSupport from './weSupport';
import TheBoard from './theBoard';
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

          <Route path='/the-foundation/statutes' component={Statues}/>
          <Route path='/om-stiftelsen/stadgar' component={Statues}/>

          <Route path='/the-foundation/the-board' component={TheBoard}/>
          <Route path='/om-stiftelsen/styrelsen' component={TheBoard}/>

          <Route path="*" component={NotFound}/>
        </Switch>
      </React.Fragment>

    );
  }
}

export default Foundation;
