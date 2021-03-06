import { Component } from 'react'
import 'cookieconsent';
import 'cookieconsent/build/cookieconsent.min.css';

class CookiePopup extends Component {
  componentDidMount = () => {
    this.createPopup(this.props.eng);
  }

  createPopup = (eng) => {
    window.cookiePopup = new window.cookieconsent.Popup();
    window.cookiePopup.initialise({
      palette: {
        popup: {
          background: '#314d30',
          text: '#ffffff'
        },
        button: {
          background: '#e0f0ec',
          text: '#000000'
        }
      },
      position: 'bottom-right',
      content: {
        message: eng ? 'We use cookies to ensure you get the best experience on our website.' : 'Vi använder cookies för att ge dig den bästa upplevelsen på vår webbsida.',
        allow: (eng ? 'Allow' : 'Tillåt') + ' cookies',
        deny: (eng ? 'Decline' : 'Neka'),
        link: (eng ? 'Read more about' : 'Läs mer om') + ' cookies',
      },
      type: 'opt-in',
      onStatusChange: function (status) {
        if (status === 'allow') {
          eng && localStorage.setItem('eng', true);
        }
        else if (status === 'deny'){
          localStorage.clear();
        }
      },
    });
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.eng !== prevProps.eng) {
      document.querySelector('.cc-window').outerHTML = ''; //outerHTML instead of remove() to support IE 11
      this.createPopup(this.props.eng);
    }
  }

  render() {
    return null;
  }
}

export default CookiePopup;
