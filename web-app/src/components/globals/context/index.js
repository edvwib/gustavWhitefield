import React, { Component } from 'react';

export const Glob = React.createContext();


class ContextProvider extends Component{

  API_URL = `http://localhost:${process.env.PHP_PORT}/wp-json/api/v1/`;

  state={
    eng: false,
    news: [],
  }

  componentDidMount = () => {
    fetch(this.API_URL + 'news')
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        this.setState({
          news: data,
        })
      })
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
