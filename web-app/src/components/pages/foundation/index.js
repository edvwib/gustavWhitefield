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

          <Route
            exact path={this.props.content.eng ? '/the-foundation' : '/om-stiftelsen'}
            render={() => <Purpose content={this.props.content.pages.purpose} eng={this.props.content.eng}/> }
          />
          <Route
            path={this.props.content.eng ? '/the-foundation/we-support' : '/om-stiftelsen/vi-stodjer'}
            render={() => <WeSupport content={this.props.content}/>}
          />
          <Route
            path={this.props.content.eng ? '/the-foundation/statutes' : '/om-stiftelsen/stadgar'}
            render={() => <Statutes content={this.props.content.pages.bylaws} eng={this.props.content.eng}/>}
          />
          <Route
            path={this.props.content.eng ? '/the-foundation/the-board' : '/om-stiftelsen/styrelsen'}
            render={() => <TheBoard content={this.props.content.pages.board} eng={this.props.content.eng}/>}
          />
          <Route path={this.props.content.eng ? '/the-foundation/economy' : '/om-stiftelsen/ekonomi'}
          render={() => <Economy content={this.props.content.pages.economy} eng={this.props.content.eng}/>}
        />
        <Route path="*" component={NotFound}/>

      </Switch>
    </React.Fragment>
  );
}
}

export default Foundation;
