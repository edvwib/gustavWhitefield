import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom'

import SubNav from './globals/subNav';
import Purpose from './pages/purpose';
import Statutes from './pages/statutes';
import WeSupport from './pages/weSupport';
import TheBoard from './pages/theBoard';
import Economy from './pages/economy';
import NotFound from '../../../components/pages/notFound';

class Foundation extends Component {

  render() {
    return (
      <React.Fragment>
        <SubNav eng={this.props.content.eng}/>
        <Switch>
          <Route
            exact path='(/the-foundation|/om-stiftelsen)'
            render={() => <Purpose content={this.props.content.pages.purpose} eng={this.props.content.eng}/> }
          />
          <Route
            path='(/the-foundation/we-support|/om-stiftelsen/vi-stodjer)'
            render={() => <WeSupport content={this.props.content.pages.weSupport} eng={this.props.content.eng}/>}
          />
          <Route
            path='(/the-foundation/statutes|/om-stiftelsen/stadgar)'
            render={() => <Statutes content={this.props.content.pages.bylaws} eng={this.props.content.eng}/>}
          />
          <Route
            path='(/the-foundation/the-board|/om-stiftelsen/styrelsen)'
            render={() => <TheBoard content={this.props.content.pages.board} eng={this.props.content.eng}/>}
          />
          <Route path='(/the-foundation/economy|/om-stiftelsen/ekonomi)'
          render={() => <Economy content={this.props.content.pages.economy} eng={this.props.content.eng}/>}
        />
        <Route path="*" component={NotFound}/>

      </Switch>
    </React.Fragment>
  );
}
}

export default Foundation;
