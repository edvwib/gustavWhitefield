import React, { Component } from 'react';
import { Container } from './style';


class Content extends Component {

  render() {
    console.log(this.props.article);
    return (
      <Container>
        {
          this.props.article &&
          <React.Fragment>
            {
              this.props.eng ?
              <React.Fragment>
                <h1 dangerouslySetInnerHTML={{__html: this.props.article.fields.news.titleENG}}/>
                <p dangerouslySetInnerHTML={{__html: this.props.article.fields.news.contentENG}}/>
              </React.Fragment>
              :
              <React.Fragment>
                <h1 dangerouslySetInnerHTML={{__html: this.props.article.fields.news.titleSV}}/>
                <p dangerouslySetInnerHTML={{__html: this.props.article.fields.news.contentSV}}/>
              </React.Fragment>
            }
          </React.Fragment>
        }
      </Container>
    );
  }
}

export default Content;
