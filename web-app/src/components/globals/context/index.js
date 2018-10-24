import React, { Component } from 'react';
import { Redirect } from 'react-router'

export const Glob = React.createContext();


class ContextProvider extends Component{

  API_URL = `http://localhost:8888/wp-json/api/v1/`;

  state = {
    eng: false,
    news: []
  }

  componentDidMount = () => {
    this.getNews();
  }

  getNews = () => {
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

  updateLang = () => {
    this.setState({
      eng: !this.state.eng
    });
  }

  render() {
    return (
      <Glob.Provider value={{state: this.state, update: this.updateLang}}>
        {this.props.children}
      </Glob.Provider>
    );
  }
}

export default ContextProvider;
