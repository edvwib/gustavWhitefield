import React, { Component } from 'react';

export const Glob = React.createContext();

class ContextProvider extends Component {

  API_URL = process.env.REACT_APP_API_URL + 'wp-json/api/v1/';

  state = {
    cookieConsent: false,
    eng: window.localStorage.getItem('eng') || false,
    news: [],
    pages: false,
  }

  componentDidMount = () => {
    let cookieConsent = this.cookieConsent();
    this.setState({ cookieConsent });
    this.getData('news', cookieConsent);
    this.getData('pages', cookieConsent);
  }

  getData = (endpoint, cookieConsent) => {
    let lastFetch = parseInt(localStorage.getItem(`${endpoint}Fetched`));
    let data = localStorage.getItem(endpoint);

    if (!lastFetch && !data) {
      console.log(`found no data for ${endpoint}`);
      this.fetchData(endpoint, cookieConsent);
    } else if (data) {
      console.log(`found data for ${endpoint}`);
      this.setState({ [endpoint]: JSON.parse(data) });
      fetch(this.API_URL + endpoint + 'LastUpdated')
        .then((blob) => blob.json())
        .then((lastModified) => {
          if (lastModified > lastFetch) {
            console.log(`${endpoint} data is outdated, was last updated ${lastModified}, client has ${lastFetch}`);
            this.fetchData(endpoint, cookieConsent);
          } else {
            console.log(`${endpoint} is up to date`);
          }
        });
    }
  }

  fetchData = (endpoint, cookieConsent) => {
    fetch(this.API_URL + endpoint)
      .then((blob) => blob.json())
      .then((data) => {
        this.setState({ [endpoint]: data });
        if (cookieConsent) {
          this.saveToLocalStorage(endpoint, JSON.stringify(data));
          this.saveToLocalStorage(`${endpoint}Fetched`, (Date.now() / 1000).toFixed(0));
        }
        console.log(`fetched new data for ${endpoint}`);
      });
  }

  updateLang = () => {
    if (this.state.cookieConsent)
      window.localStorage.setItem('eng', !this.state.eng ? 'true' : '');
    this.setState({
      eng: !this.state.eng
    });
  }

  getNewsById = (id) => {
    return this.state.news.filter((item) => item.post.ID === Number(id))[0];
  }

  cookieConsent = () => {
    return document.cookie.split(';').filter((item) => item.includes('cookieconsent_status=allow')).length ? true : false;
  }

  saveToLocalStorage = (key, data) => {
    if (this.state.cookieConsent) {
      window.localStorage.setItem(key, data);
    }
  }

  render() {
    return (
      <Glob.Provider value={{
        state: this.state,
        update: this.updateLang,
        getNewsById: this.getNewsById,
        cookieConsent: this.cookieConsent,
        API_URL: this.API_URL,
      }}>
        {this.props.children}
      </Glob.Provider>
    );
  }
}

export default ContextProvider;
