import React, { Component } from 'react';

export const Glob = React.createContext();

class ContextProvider extends Component{

  API_URL = `http://localhost:8888/wp-json/api/v1/`;

  state = {
    eng: false,
    news: [],
    pages: [],
  }

  componentDidMount = () => {
    this.getData('news');
    this.getData('pages');
  }

  getData = (endpoint) => {
    fetch(this.API_URL + endpoint)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      this.setState({
        [endpoint]: data,
      })
    })
  }

  updateLang = () => {
    this.setState({
      eng: !this.state.eng
    });
  }

  getNewsById = (id) => {
    return this.state.news.filter((item) => item.post.ID === Number(id))[0];
  }

  render() {
    return (
      <Glob.Provider value={{
        state: this.state,
        update: this.updateLang,
        getPage: this.getPageByName,
        getNewsById: this.getNewsById
      }}>
        {this.props.children}
      </Glob.Provider>
    );
  }
}

export default ContextProvider;
