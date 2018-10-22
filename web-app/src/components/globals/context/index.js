import React, { Component } from 'react';

export const Glob = React.createContext();

class ContextProvider extends Component{

  state={
    language: 'en'
  }

  render() {
    return (
      <Glob.Provider value={{state: this.state}}>
        {this.props.children}
      </Glob.Provider>
    );
  }
}

export default ContextProvider;
