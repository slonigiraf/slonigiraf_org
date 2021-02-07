import React, { Suspense } from 'react';
import { Dropdown, Button, Navbar, NavItem, Nav, Container, Row, Col } from "react-bootstrap";
import logo from './logo.svg';
import loader from './loader.svg';
import { ReactComponent as Uniswap } from './uniswap.svg';
import 'bootswatch/dist/cerulean/bootstrap.min.css'; // Added this :boom:
import './App.css';
import { useTranslation } from 'react-i18next';
import KoFi from "./KoFi";


function MyComponent() {
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  const getCurrentLng = () => i18n.language || window.localStorage.i18nextLng || '';
  const support = t('Support');

  const languages = [
    { code: 'ar', name: 'العربية' },
    { code: 'bn', name: 'বাংলা' },
    { code: 'de', name: 'Deutsch' },
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'français' },
    { code: 'hi', name: 'हिन्दी' },
    { code: 'id', name: 'Bahasa Indonesia' },
    { code: 'ja', name: '日本語' },
    { code: 'ko', name: '한국어' },
    { code: 'pt', name: 'Português' },
    { code: 'ru', name: 'русский' },
    { code: 'sw', name: 'Kiswahili' },
    { code: 'tr', name: 'Türkçe' },
    { code: 'zh', name: '中文' },
  ];
  const codeToName = new Map();
  languages.map((lng, index) => codeToName.set(lng.code, lng.name));
  codeToName.set('', "English");

  let languageMenuCaption = codeToName.get(getCurrentLng());
  if (languageMenuCaption == undefined) {
    languageMenuCaption = "Language";
  }

  return (
    <div className="App" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Container>
        <Row>
          <Col lg={1} md={1} sm={0}>&nbsp;</Col>
          <Col lg={10} md={10} sm={12}>
            <div class="embed-responsive embed-responsive-16by9">
              <iframe title="Promo video" src={t("youtube_promo")} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </Col>
          <Col lg={1} md={1} sm={0}>&nbsp;</Col>
        </Row>
        <Row>

          <Col md={12} sm={12}>
            {/* <button onClick={() => changeLanguage('en')}>en</button> */}
            <a href={t("join_link")}><Button variant="primary" size="lg">{t('Join us for free')}</Button></a>
            <a href="https://info.uniswap.org/pair/0x2B8795475a61C85636E1Ee13fd21ca1B7C860245"><Button variant="secondary" size="lg"> <Uniswap />&nbsp;{t('Swap SLON/ETH')}</Button></a>
          </Col>

        </Row>
        <Row>
          <Col md={12} sm={12}>
            <br />
            <a href="https://t.me/slonigiraf">{t('Follow us on Telegram')}, </a>
            <a href="https://wa.me/79099319358">{t('WhatsApp')}, </a>
            <a href="mailto:info@slon-i-giraf.ru">{t('Email')}</a>
            <Dropdown>
              <Dropdown.Toggle variant="link" id="dropdown-basic">
                {languageMenuCaption}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {languages.map((lng, index) => <Dropdown.Item value={lng.code} onClick={() => changeLanguage(lng.code)}>{lng.name}</Dropdown.Item>)}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <Row>
          <Col md={12} sm={12}>
            <KoFi color="#31a5e8" id="M4M02YJTN" label={support} />
          </Col>
        </Row>
        <Row>
          <Col md={12} sm={12}>
            <small>Bitcoin: bc1q60wh08cmde28pnaym0sj5fggwupvlseh6th8q7<br/>
              Ethereum: 0x3AE0CC7D1d89fE694922ad2f7A3fE4dD82443ded</small>
          </Col>
        </Row>

      </Container>

    </div>
  );
}

// loading component for suspense fallback
const Loader = () => (
  <div className="App" style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    <img src={loader} className="App-logo" alt="logo" />
  </div>
);

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <MyComponent />
    </Suspense>
  );
}
