import React, { Suspense } from 'react';
import { Button, Navbar, NavItem, Nav, Container, Row, Col } from "react-bootstrap";
import logo from './logo.svg';
import { ReactComponent as Uniswap } from './uniswap.svg';
import 'bootswatch/dist/cerulean/bootstrap.min.css'; // Added this :boom:
import './App.css';
import { useTranslation } from 'react-i18next';


function MyComponent() {
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  
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
            <a href="https://slon-i-giraf.ru/app/work?view=findTeacherView&knowledgeCourse=77&utm_content=1606559945976"><Button variant="primary" size="lg">{t('Join us for free')}</Button></a>
            <a href="https://info.uniswap.org/pair/0x2B8795475a61C85636E1Ee13fd21ca1B7C860245"><Button variant="secondary" size="lg"> <Uniswap />&nbsp;{t('Swap SLON/ETH')}</Button></a>
          </Col>

        </Row>
        <Row>
          <Col md={12} sm={12}>
            <br />
            <a href="https://t.me/slonigiraf">{t('Follow us on Telegram or')}: </a>
            <a href="https://wa.me/79099319358">{t('WhatsApp')}, </a>
            <a href="mailto:info@slon-i-giraf.ru">{t('Email')}</a>
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
    <img src={logo} className="App-logo" alt="logo" />
    <br/>
    &nbsp;&nbsp;&nbsp;loading...
  </div>
);

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <MyComponent />
    </Suspense>
  );
}
