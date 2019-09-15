import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Container } from './style';

class Cookies extends Component {

  showCookiePopup = () => {
    window.cookiePopup.open();
  }

  render() {
    const eng = this.props.eng;
    return (
      <React.Fragment>
        <Helmet >
          <meta name="robots" content="noindex" />
        </Helmet>

        <Container>
          <h2>{eng ? 'Cookies' : 'Kakor ("cookies")'}</h2>
          <p className='intro'>{
            eng ?
              'To make this site work properly, we sometimes place small data files called cookies on your device. Most big websites do this too.' :
              'För att få den här webbplatsen att fungera ordentligt skickar vi ibland små filer till din dator. Dessa filer kallas kakor eller ”cookies”. De flesta större webbplatser gör på samma sätt.'
          }</p>

          <h3>{eng ? 'What are cookies?' : 'Vad är kakor?'}</h3>
          <p className='summary'>{
            eng ?
              'A cookie is a small text file that a website saves on your computer or mobile device when you visit the site. It enables the website to remember your actions and preferences (such as login, language, font size and other display preferences) over a period of time, so you don’t have to keep re-entering them whenever you come back to the site or browse from one page to another.' :
              'Kakorna är små textfiler som sparas på din dator, telefon eller surfplatta när du besöker webbplatsen. Kakorna hjälper webbplatsen att komma ihåg dina inställningar (t.ex. användarnamn, språk, textstorlek och andra förhandsval) under en viss tid. Tanken är att du inte ska behöva göra om inställningarna varje gång du går in på webbplatsen eller bläddrar mellan olika sidor.'
          }</p>

          <h3>{eng ? 'How do we use cookies?' : 'Hur använder vi kakor?'}</h3>
          <p className='explanation'>{
            eng ?
              'We use cookies to remember details you may have entered in our online form, if you have agreed (or not) to our use of cookies on this site, as well as anonymously gather statistics on how you got here and what pages you visited on our site.' :
              'Vi använder kakor för att spara data ni har skrivit in i formuläret på webbplatsen, om ni har tillåtit (eller nekat) till vår användning av kakor på denna webbplatsen, för att anonymt samla in statistik över hur ni kom till webbplatsen samt vilka sidor ni har besökt på vår webbplats.'
          }</p>

          <h3>{eng ? 'How to control cookies' : 'Hur du kan kontrollera kakorna'}</h3>
          <p className='control'>{
            eng ?
              'You can control and/or delete cookies as you wish – for details, see aboutcookies.org. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.' :
              'Du kan kontrollera och radera kakor precis som du vill. Läs mer på aboutcookies.org.  Du kan ta bort alla kakor som finns på din dator och du kan ställa in webbläsaren så att den inte tar emot några kakor. I så fall måste du eventuellt göra om vissa inställningar varje gång du går in på en webbplats och vissa tjänster och funktioner kanske inte fungerar.'
          }</p>

          <input
            type="button"
            value={eng ? 'Change your choice' : 'Ändra ditt val'}
            onClick={this.showCookiePopup}
          />
        </Container>
      </React.Fragment>
    );
  }
}

export default Cookies;
